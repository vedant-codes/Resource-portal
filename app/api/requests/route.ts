// app/api/requests/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const subject = searchParams.get("subject")
    const status = searchParams.get("status")
    const search = searchParams.get("search")
    const sortBy = searchParams.get("sortBy") || "recent"

    const where: any = {}

    if (subject && subject !== "All Subjects") {
      where.subject = subject
    }

    if (status && status !== "All Status") {
      where.status = status
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { has: search.toLowerCase() } },
      ]
    }

    let orderBy: any = { createdAt: "desc" }

    if (sortBy === "upvoted") {
      orderBy = { upvotes: { _count: "desc" } }
    } else if (sortBy === "commented") {
      orderBy = { comments: { _count: "desc" } }
    }

    const requests = await prisma.request.findMany({
      where,
      include: {
        requester: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        upvotes: true,
        comments: true,
        _count: {
          select: {
            upvotes: true,
            comments: true,
            fulfillments: true,
          },
        },
      },
      orderBy,
    })

    return NextResponse.json(requests)
  } catch (error) {
    console.error("Error fetching requests:", error)
    return NextResponse.json({ error: "Failed to fetch requests" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const { title, description, subject, semester, courseCode, priority, tags } = body

    if (!title || !description || !subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const request = await prisma.request.create({
      data: {
        title,
        description,
        subject,
        semester,
        courseCode,
        priority: priority || "medium",
        tags: tags || [],
        requesterId: session.user.id,
      },
      include: {
        requester: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        _count: {
          select: {
            upvotes: true,
            comments: true,
            fulfillments: true,
          },
        },
      },
    })

    return NextResponse.json(request)
  } catch (error) {
    console.error("Error creating request:", error)
    return NextResponse.json({ error: "Failed to create request" }, { status: 500 })
  }
}
