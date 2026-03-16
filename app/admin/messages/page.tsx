import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { prisma } from '@/lib/prisma'
import { type ContactStatus } from '@/types'

const STATUS_COLORS: Record<ContactStatus, 'error' | 'warning' | 'success' | 'default'> = {
  NUEVO: 'error',
  LEIDO: 'warning',
  RESPONDIDO: 'success',
  ARCHIVADO: 'default',
}

export default async function MessagesPage() {
  const messages = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Mensajes</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        {messages.filter((m) => m.status === 'NUEVO').length} nuevos · {messages.length} en total
      </Typography>

      <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper', border: '1px solid rgba(41,121,255,0.15)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { fontWeight: 700, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 } }}>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Servicio</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((msg) => (
              <TableRow key={msg.id} sx={{ '&:hover': { backgroundColor: 'rgba(41,121,255,0.04)' } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: msg.status === 'NUEVO' ? 700 : 400 }}>
                    {msg.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">{msg.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">{msg.serviceType.replace('_', ' ')}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(msg.createdAt).toLocaleDateString('es-CL')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={msg.status} size="small" color={STATUS_COLORS[msg.status as ContactStatus]}
                    sx={{ fontSize: '0.7rem' }} />
                </TableCell>
                <TableCell align="right">
                  <IconButton href={`/admin/messages/${msg.id}`} size="small" sx={{ color: 'text.secondary' }}>
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
