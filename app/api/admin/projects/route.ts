import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { type Category } from '@/types'

interface ProjectBody {
  title: string
  description: string
  longDesc?: string
  techStack: string[]
  imageUrl?: string
  projectUrl?: string
  githubUrl?: string
  category: Category
  featured: boolean
  order: number
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const body: ProjectBody = await req.json()

    if (!body.title || !body.description || !body.category) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const project = await prisma.project.create({ data: body })
    return NextResponse.json(project, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Error al crear proyecto' }, { status: 500 })
  }
}
