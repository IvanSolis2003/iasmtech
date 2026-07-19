import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const steps = [
  {
    number: '01',
    title: 'Conversamos',
    description:
      'Me cuentas tu idea o problema. Sin formularios complicados, solo una charla directa por WhatsApp o videollamada para entender qué necesitas.',
    color: '#2979FF',
  },
  {
    number: '02',
    title: 'Te propongo una solución',
    description:
      'En 24–48 horas te envío una propuesta clara: qué se va a construir, en cuánto tiempo y a qué costo. Sin sorpresas.',
    color: '#00E5FF',
  },
  {
    number: '03',
    title: 'Desarrollamos juntos',
    description:
      'Trabajamos en etapas cortas. Tú ves el avance real desde el primer día y puedes dar feedback en cada paso.',
    color: '#69F0AE',
  },
  {
    number: '04',
    title: 'Lanzamos y te acompaño',
    description:
      'Publicamos tu proyecto y te entrego todo: accesos, capacitación y soporte post-lanzamiento para que nunca te quedes solo.',
    color: '#FFD740',
  },
]

export default function HowIWorkSection() {
  return (
    <Box
      component="section"
      id="como-trabajo"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-20%', left: '-10%', size: 500, color: 'rgba(121,41,255,0.15)', duration: 10 },
        { bottom: '-20%', right: '-10%', size: 400, color: 'rgba(0,229,255,0.12)', duration: 13, delay: 2 },
      ]} gridOpacity={0.04} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
          >
            Proceso
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            ¿Cómo trabajamos juntos?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
            Simple, transparente y sin tecnicismos. Así es como llevamos tu idea a la realidad.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid key={step.number} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 28,
                      left: '70%',
                      width: '60%',
                      height: 1,
                      borderTop: '1px dashed rgba(41, 121, 255, 0.25)',
                      zIndex: 0,
                    }}
                  />
                )}

                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: `${step.color}18`,
                    border: `2px solid ${step.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      color: step.color,
                      letterSpacing: 1,
                    }}
                  >
                    {step.number}
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
