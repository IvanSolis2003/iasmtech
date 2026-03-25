'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(41, 121, 255, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0, 229, 255, 0.05), transparent)
          `,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(41, 121, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(41, 121, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Chip
            icon={
              <FiberManualRecordIcon
                sx={{
                  fontSize: '10px !important',
                  color: '#4caf50 !important',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.3 },
                  },
                }}
              />
            }
            label="Disponible para proyectos"
            variant="outlined"
            sx={{
              mb: 4,
              borderColor: 'rgba(76, 175, 80, 0.4)',
              color: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.08)',
              fontWeight: 500,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              background: 'linear-gradient(135deg, #F0F0F0 0%, #75A7FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1,
            }}
          >
            Tu negocio merece tecnología de verdad
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 5,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
            }}
          >
            Desarrollo web, apps y automatización a medida
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#proyectos"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                boxShadow: '0 0 30px rgba(41, 121, 255, 0.4)',
                '&:hover': {
                  boxShadow: '0 0 40px rgba(41, 121, 255, 0.6)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Ver mis trabajos
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contacto"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'rgba(41, 121, 255, 0.5)',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(41, 121, 255, 0.08)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Contáctame
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(8px)' },
          },
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
      </Box>
    </Box>
  )
}
