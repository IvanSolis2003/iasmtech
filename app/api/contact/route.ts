import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getResend } from '@/lib/resend'
import { type ServiceType } from '@/types'

interface ContactBody {
  name: string
  email: string
  phone?: string
  serviceType: ServiceType
  message: string
}

const SERVICE_LABELS: Record<ServiceType, string> = {
  SITIO_WEB: 'Sitio Web',
  ECOMMERCE: 'Tienda Online',
  APP_MOVIL: 'App Móvil',
  SISTEMA_MEDIDA: 'Sistema a Medida',
  AUTOMATIZACION: 'Automatización',
  OTRO: 'Otro',
}

const VALID_SERVICE_TYPES: ServiceType[] = [
  'SITIO_WEB', 'ECOMMERCE', 'APP_MOVIL', 'SISTEMA_MEDIDA', 'AUTOMATIZACION', 'OTRO',
]

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()
    const { name, email, phone, serviceType, message } = body

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Nombre inválido (mínimo 2 caracteres)' }, { status: 400 })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Email inválido' }, { status: 400 })
    }
    if (!serviceType || !VALID_SERVICE_TYPES.includes(serviceType)) {
      return NextResponse.json({ success: false, error: 'Tipo de servicio inválido' }, { status: 400 })
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Mensaje demasiado corto (mínimo 10 caracteres)' }, { status: 400 })
    }

    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        serviceType,
        message: message.trim(),
      },
    })

    if (process.env.RESEND_API_KEY) {
      await getResend().emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'contacto@iasmtech.cl',
        to: process.env.RESEND_TO_EMAIL ?? 'ivan.solis20.m@gmail.com',
        subject: `Nuevo contacto: ${SERVICE_LABELS[serviceType]} — ${name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          <p><strong>Servicio:</strong> ${SERVICE_LABELS[serviceType]}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    }

    return NextResponse.json({ success: true, id: contact.id })
  } catch {
    return NextResponse.json({ success: false, error: 'Error interno del servidor' }, { status: 500 })
  }
}
