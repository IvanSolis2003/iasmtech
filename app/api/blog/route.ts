import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const limit = searchParams.get('limit')
    const published = searchParams.get('published')

    const where = {
      ...(published === 'true' && { published: true }),
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: 'desc' },
        ...(limit && { take: parseInt(limit) }),
      }),
      prisma.blogPost.count({ where }),
    ])

    return NextResponse.json({ posts, total })
  } catch {
    return NextResponse.json({ error: 'Error al obtener posts' }, { status: 500 })
  }
}
