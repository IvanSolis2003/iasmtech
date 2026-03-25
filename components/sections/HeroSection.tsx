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
        animation: 'bgShift 12s ease-in-out infinite',
        '@keyframes bgShift': {
          '0%, 100%': { backgroundColor: '#0A0A0F' },
          '50%': { backgroundColor: '#0A0D1A' },
        },
      }}
    >
      {/* Aurora superior — banda de color que pulsa */}
      <Box sx={{
        position: 'absolute',
        top: '-30%',
        left: '-20%',
        right: '-20%',
        height: '70%',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,121,255,0.22) 0%, rgba(0,229,255,0.06) 40%, transparent 70%)',
        animation: 'auroraPulse 8s ease-in-out infinite',
        '@keyframes auroraPulse': {
          '0%, 100%': { opacity: 0.7, transform: 'scaleX(1)' },
          '50%': { opacity: 1, transform: 'scaleX(1.08)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe azul superior izquierdo */}
      <Box sx={{
        position: 'absolute',
        top: '-10%',
        left: '-15%',
        width: { xs: 450, md: 750 },
        height: { xs: 450, md: 750 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,121,255,0.28) 0%, transparent 65%)',
        animation: 'floatA 9s ease-in-out infinite',
        '@keyframes floatA': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(50px, 30px) scale(1.06)' },
          '66%': { transform: 'translate(20px, 60px) scale(0.97)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe cyan inferior derecho */}
      <Box sx={{
        position: 'absolute',
        bottom: '-25%',
        right: '-15%',
        width: { xs: 380, md: 650 },
        height: { xs: 380, md: 650 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 65%)',
        animation: 'floatB 11s ease-in-out infinite',
        '@keyframes floatB': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-70px, -20px) scale(0.95)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe magenta centro izquierdo */}
      <Box sx={{
        position: 'absolute',
        top: '55%',
        left: '5%',
        width: { xs: 200, md: 350 },
        height: { xs: 200, md: 350 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(121,41,255,0.15) 0%, transparent 70%)',
        animation: 'floatC 14s ease-in-out infinite',
        '@keyframes floatC': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.1)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Orbe pequeño cyan centro derecho */}
      <Box sx={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: { xs: 150, md: 280 },
        height: { xs: 150, md: 280 },
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
        animation: 'floatD 7s ease-in-out infinite',
        '@keyframes floatD': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-20px, 30px) scale(1.15)' },
        },
        pointerEvents: 'none',
      }} />

      {/* Grid de fondo con movimiento lento */}
      <Box sx={{
        position: 'absolute',
        inset: '-60px',
        backgroundImage: `
          linear-gradient(rgba(41, 121, 255, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(41, 121, 255, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridMove 20s linear infinite',
        '@keyframes gridMove': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
        maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 100%)',
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
