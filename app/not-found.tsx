import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import HomeIcon from '@mui/icons-material/Home'

const orbs = [
  { top: '-10%', left: '-10%', size: 500, color: 'rgba(41,121,255,0.2)', duration: 10 },
  { bottom: '-15%', right: '-10%', size: 400, color: 'rgba(0,229,255,0.15)', duration: 13, delay: 2 },
  { top: '40%', right: '15%', size: 250, color: 'rgba(121,41,255,0.12)', duration: 8, delay: 1 },
]

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#0A0A0F',
      }}
    >
      <AnimatedBackground orbs={orbs} gridOpacity={0.04} />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '7rem', md: '10rem' },
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(90deg, #2979FF 0%, #00E5FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            letterSpacing: '-4px',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: '#F0F0F0',
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          Esta página no existe
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(240,240,240,0.5)',
            mb: 5,
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          La ruta que buscas no fue encontrada. Puede que haya sido eliminada o que el enlace esté incorrecto.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="/"
          startIcon={<HomeIcon />}
          sx={{
            px: 4,
            py: 1.8,
            fontWeight: 700,
            fontSize: '1rem',
            background: 'linear-gradient(90deg, #2979FF 0%, #0046CB 100%)',
            boxShadow: '0 0 30px rgba(41,121,255,0.45)',
            '&:hover': {
              boxShadow: '0 0 50px rgba(41,121,255,0.7)',
              transform: 'translateY(-3px)',
              background: 'linear-gradient(90deg, #4090FF 0%, #2979FF 100%)',
            },
            transition: 'all 0.25s ease',
          }}
        >
          Volver al inicio
        </Button>
      </Container>
    </Box>
  )
}
