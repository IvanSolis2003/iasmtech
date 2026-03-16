import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { type ContactStatus } from '@/types'

const VALID_STATUSES: ContactStatus[] = ['NUEVO', 'LEIDO', 'RESPONDIDO', 'ARCHIVADO']

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  try {
    const { id } = await params
    const { status } = await req.json()

    if (!VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Estado inválido' }, { status: 400 })
    }

    const contact = await prisma.contact.update({ where: { id }, data: { status } })
    return NextResponse.json(contact)
  } catch {
    return NextResponse.json({ error: 'Error al actualizar mensaje' }, { status: 500 })
  }
}
