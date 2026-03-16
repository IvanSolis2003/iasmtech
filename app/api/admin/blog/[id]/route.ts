import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const { id } = await params
    const body = await req.json()

    const current = await prisma.blogPost.findUnique({ where: { id } })
    if (!current) return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 })

    const publishedAt = body.published && !current.published ? new Date() : current.publishedAt

    const post = await prisma.blogPost.update({
      where: { id },
      data: { ...body, publishedAt },
    })

    return NextResponse.json(post)
  } catch {
    return NextResponse.json({ error: 'Error al actualizar post' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const { id } = await params
    await prisma.blogPost.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Error al eliminar post' }, { status: 500 })
  }
}
