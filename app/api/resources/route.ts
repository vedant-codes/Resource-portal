// app/api/resources/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const BUCKET = process.env.SUPABASE_BUCKET || "resources";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || null;

// Helper: encode each path segment so spaces & chars are safe, but keep slashes
function encodePathPreserveSlashes(p: string) {
  return p
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

/** build public object URL for Supabase public bucket:
 *  https://<SUPABASE_URL>/storage/v1/object/public/<BUCKET>/<filePath>
 */
function buildPublicUrl(filePath: string) {
  const normalized = filePath.startsWith("/") ? filePath.slice(1) : filePath;
  return `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/${BUCKET}/${encodePathPreserveSlashes(
    normalized
  )}`;
}

export async function GET() {
  try {
    // fetch all resources; include versions but take only the latest
    const rows = await prisma.resource.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        versions: {
          orderBy: { version: "desc" },
          take: 1,
          select: {
            id: true,
            filePath: true,
            fileName: true,
            mimeType: true,
            size: true,
            version: true,
            createdAt: true,
          },
        },
        uploader: {
          select: { id: true, name: true, email: true, image: true },
        },
      },
    });

    // If you set a service role key, prepare a supabase admin client to create signed urls if needed
    const supabaseAdmin = SUPABASE_SERVICE_KEY
      ? createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)
      : null;

    const items = await Promise.all(
      rows.map(async (r) => {
        const ver = r.versions && r.versions[0] ? r.versions[0] : null;
        const filePath = ver?.filePath ?? null;

        // default public URL (works for public buckets)
        let downloadUrl: string | null = filePath ? buildPublicUrl(filePath) : null;

        // If service key present, attempt to create a signed URL for added reliability (private buckets)
        if (filePath && supabaseAdmin) {
          try {
            // TTL short — frontend should download immediately (adjust if needed)
            const ttl = 60 * 5; // 5 minutes
            const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUrl(filePath, ttl);
            if (!error && data?.signedUrl) downloadUrl = data.signedUrl;
            // if error, we keep the publicUrl fallback
          } catch (e) {
            // swallow — keep public URL fallback
            console.warn("createSignedUrl failed, falling back to public URL", e);
          }
        }

        return {
          id: r.id,
          title: r.title,
          description: r.description,
          courseId: r.courseId,
          uploaderId: r.uploaderId,
          uploader: r.uploader ?? null,
          currentVersionId: r.currentVerId ?? null,
          version: ver
            ? {
                id: ver.id,
                fileName: ver.fileName,
                filePath: ver.filePath,
                mimeType: ver.mimeType,
                size: ver.size,
                version: ver.version,
                createdAt: ver.createdAt,
              }
            : null,
          downloadUrl,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
        };
      })
    );

    return NextResponse.json({ ok: true, items });
  } catch (err) {
    console.error("GET /api/resources error:", err);
    return NextResponse.json({ ok: false, error: "Internal server error", details: String(err) }, { status: 500 });
  }
}
