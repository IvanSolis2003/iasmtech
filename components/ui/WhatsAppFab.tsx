'use client'

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CloseIcon from '@mui/icons-material/Close'

const WA_NUMBER = '56953074204'
const WA_MESSAGE = encodeURIComponent('Hola Iván, me interesa cotizar un proyecto contigo.')
const STORAGE_KEY = 'wa_bubble_dismissed'

export default function WhatsAppFab() {
  const [bubbleVisible, setBubbleVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = setTimeout(() => {
      setBubbleVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setBubbleVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          opacity: bubbleVisible ? 1 : 0,
          transform: bubbleVisible ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(6px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          pointerEvents: bubbleVisible ? 'auto' : 'none',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            px: 2,
            py: 1.2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            whiteSpace: 'nowrap',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: -8,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '8px solid #ffffff',
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#1a1a1a',
              fontWeight: 600,
              fontSize: '0.85rem',
              lineHeight: 1.3,
            }}
          >
            ¿Tienes una idea? Hablemos →
          </Typography>
          <IconButton
            size="small"
            onClick={handleDismiss}
            aria-label="Cerrar burbuja"
            sx={{
              p: 0.2,
              color: '#666',
              '&:hover': { color: '#1a1a1a', backgroundColor: 'rgba(0,0,0,0.06)' },
            }}
          >
            <CloseIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
      </Box>

      <Fab
        component="a"
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        sx={{
          backgroundColor: '#25D366',
          color: '#fff',
          width: 60,
          height: 60,
          flexShrink: 0,
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
    </Box>
  )
}
