'use client'

import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const WA_NUMBER = '56990457931'
const WA_MESSAGE = encodeURIComponent('Hola Iván, me interesa cotizar un proyecto contigo.')

export default function WhatsAppFab() {
  return (
    <Tooltip title="Escríbeme por WhatsApp" placement="left">
      <Fab
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1300,
          backgroundColor: '#25D366',
          color: '#fff',
          width: 60,
          height: 60,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
          '&:hover': {
            backgroundColor: '#1ebe5d',
            transform: 'scale(1.08)',
            boxShadow: '0 6px 28px rgba(37, 211, 102, 0.65)',
          },
          transition: 'all 0.25s ease',
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Fab>
    </Tooltip>
  )
}
