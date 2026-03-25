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
        background: '#0A0A0F',
      }}
    >
      {/* Orbe azul superior izquierdo */}
      <Box sx={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: { xs: 400, md: 700 },
        height: { xs: 400, md: 700 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,121,255,0.18) 0%, transparent 70%)',
        animation: 'floatA 8s ease-in-out infinite',
        '@keyframes floatA': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, 30px) scale(1.05)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe cyan inferior derecho */}
      <Box sx={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: { xs: 350, md: 600 },
        height: { xs: 350, md: 600 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 70%)',
        animation: 'floatB 10s ease-in-out infinite',
        '@keyframes floatB': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-30px, -40px) scale(1.08)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe azul centro derecho */}
      <Box sx={{
        position: 'absolute',
        top: '40%',
        right: '15%',
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,121,255,0.1) 0%, transparent 70%)',
        animation: 'floatC 12s ease-in-out infinite',
        '@keyframes floatC': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -25px)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Grid de fondo */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(41, 121, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(41, 121, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 860, mx: 'auto', textAlign: 'center' }}>

          {/* Badge */}
          <Chip
            icon={
              <FiberManualRecordIcon sx={{
                fontSize: '10px !important',
                color: '#4caf50 !important',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.3 },
                },
              }} />
            }
            label="Disponible para proyectos"
            variant="outlined"
            sx={{
              mb: 5,
              borderColor: 'rgba(76, 175, 80, 0.5)',
              color: '#4caf50',
              backgroundColor: 'rgba(76, 175, 80, 0.08)',
              fontWeight: 600,
              px: 1,
            }}
          />

          {/* Titular principal */}
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: '#F0F0F0',
            }}
          >
            Tu negocio merece{' '}
            <Box
              component="span"
              sx={{
                position: 'relative',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #2979FF 0%, #00E5FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              tecnología
              {/* Línea subrayado animada */}
              <Box sx={{
                position: 'absolute',
                bottom: { xs: 2, md: 4 },
                left: 0,
                right: 0,
                height: { xs: 3, md: 4 },
                background: 'linear-gradient(90deg, #2979FF, #00E5FF)',
                borderRadius: 2,
                animation: 'glow 3s ease-in-out infinite',
                '@keyframes glow': {
                  '0%, 100%': { opacity: 1, boxShadow: '0 0 10px rgba(41,121,255,0.5)' },
                  '50%': { opacity: 0.7, boxShadow: '0 0 20px rgba(0,229,255,0.8)' },
                },
              }} />
            </Box>
            {' '}de verdad
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              lineHeight: 1.6,
              color: 'rgba(240,240,240,0.6)',
              maxWidth: 620,
              mx: 'auto',
            }}
          >
            Desarrollo web, apps y automatización a medida.
            <br />
            Resultados que se notan en tu negocio.
          </Typography>

          {/* CTAs */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              href="#proyectos"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #2979FF 0%, #0046CB 100%)',
                boxShadow: '0 0 30px rgba(41, 121, 255, 0.5), 0 4px 20px rgba(0,0,0,0.3)',
                '&:hover': {
                  boxShadow: '0 0 50px rgba(41, 121, 255, 0.8), 0 4px 20px rgba(0,0,0,0.3)',
                  transform: 'translateY(-3px)',
                  background: 'linear-gradient(90deg, #4090FF 0%, #2979FF 100%)',
                },
                transition: 'all 0.25s ease',
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
                py: 1.8,
                fontSize: '1rem',
                fontWeight: 600,
                borderColor: 'rgba(41, 121, 255, 0.6)',
                color: 'text.primary',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(41,121,255,0.05)',
                '&:hover': {
                  borderColor: '#2979FF',
                  backgroundColor: 'rgba(41, 121, 255, 0.12)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 0 20px rgba(41,121,255,0.2)',
                },
                transition: 'all 0.25s ease',
              }}
            >
              Contáctame
            </Button>
          </Box>

          {/* Logos tecnologías */}
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', opacity: 0.4 }}>
            {['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'React Native'].map((tech) => (
              <Typography key={tech} variant="caption" sx={{ fontWeight: 600, letterSpacing: 1, fontSize: '0.7rem', textTransform: 'uppercase' }}>
                {tech}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Flecha scroll */}
      <Box sx={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      }}>
        <KeyboardArrowDownIcon sx={{ color: 'rgba(240,240,240,0.3)', fontSize: 32 }} />
      </Box>
    </Box>
  )
}
