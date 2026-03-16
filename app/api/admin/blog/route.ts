import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

interface BlogBody {
  title: string
  slug: string
  excerpt: string
  content: string
  imageUrl?: string
  published: boolean
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const body: BlogBody = await req.json()

    if (!body.title || !body.slug || !body.excerpt || !body.content) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug: body.slug } })
    if (existing) {
      return NextResponse.json({ error: 'El slug ya está en uso' }, { status: 400 })
    }

    const post = await prisma.blogPost.create({
      data: {
        ...body,
        publishedAt: body.published ? new Date() : null,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error al crear post' }, { status: 500 })
  }
}
