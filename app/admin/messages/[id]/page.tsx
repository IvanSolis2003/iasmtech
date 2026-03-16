import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { type ContactStatus } from '@/types'
import MessageStatusUpdater from './MessageStatusUpdater'

const STATUS_COLORS: Record<ContactStatus, 'error' | 'warning' | 'success' | 'default'> = {
  NUEVO: 'error', LEIDO: 'warning', RESPONDIDO: 'success', ARCHIVADO: 'default',
}

export default async function MessageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const msg = await prisma.contact.findUnique({ where: { id } })

  if (!msg) notFound()

  if (msg.status === 'NUEVO') {
    await prisma.contact.update({ where: { id }, data: { status: 'LEIDO' } })
  }

  return (
    <Box>
      <Button href="/admin/messages" startIcon={<ArrowBackIcon />} sx={{ mb: 3, color: 'text.secondary' }}>
        Volver a mensajes
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>{msg.name}</Typography>
          <Typography variant="body2" color="text.secondary">{msg.email} · {msg.phone ?? 'Sin teléfono'}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip label={msg.status} color={STATUS_COLORS[msg.status as ContactStatus]} />
          <MessageStatusUpdater id={msg.id} currentStatus={msg.status as ContactStatus} />
        </Box>
      </Box>

      <Paper sx={{ p: 3, backgroundColor: 'background.paper', border: '1px solid rgba(41,121,255,0.15)', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 4, mb: 3, flexWrap: 'wrap' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">Servicio solicitado</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{msg.serviceType.replace('_', ' ')}</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">Fecha</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {new Date(msg.createdAt).toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 1 }}>
          Mensaje
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
          {msg.message}
        </Typography>
      </Paper>

      <Button variant="contained" href={`mailto:${msg.email}?subject=Re: Consulta ${msg.serviceType.replace('_', ' ')} — iasmtech`}>
        Responder por email
      </Button>
    </Box>
  )
}
