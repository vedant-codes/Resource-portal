// app/api/resources/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const BUCKET = process.env.SUPABASE_BUCKET || "resources";

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * GET /api/resources
 * Returns list of resources with their latest version and a short-lived signed download URL.
 */
export async function GET() {
  try {
    // fetch resources + latest version + uploader (small result set; add pagination later)
    const items = await prisma.resource.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        // get latest version (highest version number)
        versions: {
          orderBy: { version: "desc" },
          take: 1,
        },
        uploader: {
          select: { id: true, name: true, email: true, image: true },
        },
      },
    });

    // map to API-friendly shape and generate signed URL for each latest version (if exists)
    const mapped = await Promise.all(
      items.map(async (r) => {
        const v = r.versions && r.versions.length > 0 ? r.versions[0] : null;
        let downloadUrl: string | null = null;

        if (v?.filePath) {
          try {
            // create signed URL valid for 60 seconds (adjust expiry as needed)
            const { data, error } = await supabaseAdmin.storage
              .from(BUCKET)
              .createSignedUrl(v.filePath, 60);

            if (!error && data?.signedUrl) {
              downloadUrl = data.signedUrl;
            } else {
              console.error("Signed URL error", error);
            }
          } catch (err) {
            console.error("Supabase signed url generation error:", err);
          }
        }

        return {
          id: r.id,
          title: r.title,
          description: r.description,
          courseId: r.courseId,
          uploaderId: r.uploaderId,
          uploader: r.uploader ?? null,
          currentVerId: r.currentVerId,
          version: v
            ? {
                id: v.id,
                fileName: v.fileName,
                filePath: v.filePath,
                mimeType: v.mimeType,
                size: v.size,
                version: v.version,
                createdAt: v.createdAt,
              }
            : null,
          downloadUrl,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
        };
      }),
    );

    return NextResponse.json({ ok: true, items: mapped });
  } catch (err) {
    console.error("GET /api/resources error:", err);
    return NextResponse.json({ ok: false, error: "Failed to load resources", details: String(err) }, { status: 500 });
  }
}
