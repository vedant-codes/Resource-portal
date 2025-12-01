// app/api/marketplace/[id]/like/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient()

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Check if already liked
    const existingLike = await prisma.marketplaceLike.findUnique({
      where: {
        itemId_userId: {
          itemId: params.id,
          userId: user.id,
        },
      },
    })

    if (existingLike) {
      // Unlike
      await prisma.marketplaceLike.delete({
        where: {
          id: existingLike.id,
        },
      })
      return NextResponse.json({ liked: false })
    } else {
      // Like
      await prisma.marketplaceLike.create({
        data: {
          itemId: params.id,
          userId: user.id,
        },
      })
      return NextResponse.json({ liked: true })
    }
  } catch (error) {
    console.error("Error toggling like:", error)
    return NextResponse.json({ error: "Failed to toggle like" }, { status: 500 })
  }
}