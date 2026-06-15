import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function CtaSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.paper',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-30%', left: '10%', size: 600, color: 'rgba(41,121,255,0.18)', duration: 10 },
        { bottom: '-30%', right: '10%', size: 500, color: 'rgba(0,229,255,0.12)', duration: 12, delay: 3 },
        { top: '30%', left: '50%', size: 300, color: 'rgba(121,41,255,0.1)', duration: 8, delay: 1 },
      ]} gridOpacity={0.05} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
        >
          ¿Listo para comenzar?
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1,
            mb: 2,
            fontSize: { xs: '2rem', md: '2.8rem' },
            background: 'linear-gradient(135deg, #F0F0F0 0%, #75A7FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Tienes una idea. Yo la convierto en realidad.
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 480, mx: 'auto', lineHeight: 1.8 }}
        >
          La primera conversación es sin costo y sin compromiso.
          Desde Talca para todo Chile — cuéntame tu proyecto.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            href="#contacto"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': {
                opacity: 0.9,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Cotizar mi proyecto
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://wa.me/56990457931?text=Hola%20Iván%2C%20me%20interesa%20cotizar%20un%20proyecto%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderColor: 'rgba(37, 211, 102, 0.5)',
              color: '#25D366',
              '&:hover': {
                borderColor: '#25D366',
                backgroundColor: 'rgba(37, 211, 102, 0.08)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Escribir por WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
