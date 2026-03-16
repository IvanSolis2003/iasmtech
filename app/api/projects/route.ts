import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { type Category } from '@/types'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const category = searchParams.get('category') as Category | null
    const featured = searchParams.get('featured')
    const limit = searchParams.get('limit')

    const where = {
      ...(category && { category }),
      ...(featured === 'true' && { featured: true }),
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        orderBy: { order: 'asc' },
        ...(limit && { take: parseInt(limit) }),
      }),
      prisma.project.count({ where }),
    ])

    return NextResponse.json({ projects, total })
  } catch {
    return NextResponse.json({ error: 'Error al obtener proyectos' }, { status: 500 })
  }
}
