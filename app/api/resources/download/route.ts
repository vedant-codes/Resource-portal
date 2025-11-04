// app/api/resources/download/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const BUCKET = process.env.SUPABASE_BUCKET || "resources";

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/** Build public object URL (for public bucket) */
function buildPublicUrl(filePath: string) {
  const normalized = filePath.startsWith("/") ? filePath.slice(1) : filePath;
  return `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/${BUCKET}/${encodeURI(normalized)}`;
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ ok: false, error: "missing id" }, { status: 400 });

    // fetch resource & latest version
    const r = await prisma.resource.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
          take: 1,
          select: { filePath: true, fileName: true, mimeType: true, size: true },
        },
      },
    });

    if (!r) return NextResponse.json({ ok: false, error: "resource not found" }, { status: 404 });
    const ver = r.versions && r.versions[0];
    if (!ver || !ver.filePath) return NextResponse.json({ ok: false, error: "no file version" }, { status: 404 });

    const filePath = ver.filePath;

    // If your bucket is public, build public URL — faster and avoids signing
    // If you want signed access for private buckets, use createSignedUrl below.
    // Use whichever matches your Supabase bucket policy.
    const usePublic = (process.env.SUPABASE_BUCKET_PUBLIC === "true") || false;

    if (usePublic) {
      const publicUrl = buildPublicUrl(filePath);
      // Optionally log download here
      return NextResponse.redirect(publicUrl, 307);
    }

    // For private buckets: create a short-lived signed URL (seconds)
    // TTL in seconds
    const ttl = 60; // 1 minute — adjust as needed
    const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUrl(filePath, ttl);

    if (error || !data?.signedUrl) {
      console.error("Supabase signedUrl error:", error);
      // fallback: if bucket is actually public, try public URL
      const publicUrl = buildPublicUrl(filePath);
      return NextResponse.redirect(publicUrl, 307);
    }

    // Redirect browser to signed URL — browser will request Supabase directly
    return NextResponse.redirect(data.signedUrl, 307);
  } catch (err) {
    console.error("GET /api/resources/download error:", err);
    return NextResponse.json({ ok: false, error: "internal" }, { status: 500 });
  }
}
