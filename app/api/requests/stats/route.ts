// app/api/requests/stats/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const [total, fulfilled, inProgress, open] = await Promise.all([
      prisma.request.count(),
      prisma.request.count({ where: { status: "fulfilled" } }),
      prisma.request.count({ where: { status: "in-progress" } }),
      prisma.request.count({ where: { status: "open" } }),
    ])

    return NextResponse.json({
      total,
      fulfilled,
      inProgress,
      open,
      fulfillmentRate: total > 0 ? Math.round((fulfilled / total) * 100) : 0,
    })
  } catch (error) {
    console.error("Error fetching stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}