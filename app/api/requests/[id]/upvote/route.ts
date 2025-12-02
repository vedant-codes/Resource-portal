// app/api/requests/[id]/upvote/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const requestId = params.id

    // Check if already upvoted
    const existing = await prisma.requestUpvote.findUnique({
      where: {
        requestId_userId: {
          requestId,
          userId: session.user.id,
        },
      },
    })

    if (existing) {
      // Remove upvote
      await prisma.requestUpvote.delete({
        where: { id: existing.id },
      })
      return NextResponse.json({ upvoted: false })
    } else {
      // Add upvote
      await prisma.requestUpvote.create({
        data: {
          requestId,
          userId: session.user.id,
        },
      })
      return NextResponse.json({ upvoted: true })
    }
  } catch (error) {
    console.error("Error toggling upvote:", error)
    return NextResponse.json({ error: "Failed to toggle upvote" }, { status: 500 })
  }
}
