import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeIcon from '@mui/icons-material/Code'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ShieldIcon from '@mui/icons-material/Shield'
import type { SvgIconComponent } from '@mui/icons-material'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type Capability = {
  overline: string
  title: string
  description: string
  bullets: string[]
  icon: SvgIconComponent
  color: string
}

const capabilities: Capability[] = [
  {
    overline: 'Desarrollo a medida',
    title: 'Software hecho para cómo trabaja tu negocio',
    description:
      'Nada de plantillas genéricas. Construyo sitios, tiendas y sistemas pensados exactamente para tu operación, con código limpio, rápido y listo para crecer contigo.',
    bullets: [
      'Sitios web y e-commerce con Next.js',
      'Sistemas de gestión a medida',
      'Apps móviles Android con React Native',
    ],
    icon: CodeIcon,
    color: '#2979FF',
  },
  {
    overline: 'Automatización e IA aplicada',
    title: 'Que las tareas repetitivas las haga una máquina',
    description:
      'Conecto tus herramientas y automatizo lo que hoy te quita tiempo: cotizaciones, avisos por WhatsApp, reportes y flujos de trabajo que corren solos las 24 horas.',
    bullets: [
      'Flujos automatizados con n8n',
      'Integraciones con WhatsApp y email',
      'IA aplicada a tareas concretas de tu negocio',
    ],
    icon: AutoAwesomeIcon,
    color: '#00E5FF',
  },
  {
    overline: 'Soporte y confianza',
    title: 'Tranquilidad después del lanzamiento',
    description:
      'El proyecto no termina cuando sale a producción. Me quedo contigo: monitoreo, respaldos, actualizaciones y soporte directo para que nunca te quedes solo.',
    bullets: [
      'Monitoreo y respaldos automáticos',
      'Actualizaciones y mejoras continuas',
      'Soporte directo por WhatsApp',
    ],
    icon: ShieldIcon,
    color: '#69F0AE',
  },
]

export default function CapabilitiesSection() {
  return (
    <Box
      component="section"
      id="capacidades"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground
        orbs={[
          { top: '-15%', right: '-10%', size: 500, color: 'rgba(41,121,255,0.13)', duration: 12 },
          { bottom: '-15%', left: '-10%', size: 420, color: 'rgba(0,229,255,0.1)', duration: 14, delay: 3 },
        ]}
        gridOpacity={0.04}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 4, fontSize: '0.75rem' }}
          >
            Capacidades
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800 }}>
            Ingeniería moderna para tu proyecto
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', fontSize: '1.05rem' }}>
            Todo lo que necesitas para lanzar más rápido, operar con confianza y escalar sin fricciones.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
          {capabilities.map((cap, index) => {
            const reversed = index % 2 === 1
            const Icon = cap.icon
            return (
              <Grid
                key={cap.title}
                container
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                direction={{ xs: 'column-reverse', md: reversed ? 'row-reverse' : 'row' }}
              >
                {/* Columna de texto */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: cap.color, fontWeight: 700, letterSpacing: 3 }}
                  >
                    {cap.overline}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, mb: 2, fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700 }}>
                    {cap.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                    {cap.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                    {cap.bullets.map((bullet) => (
                      <Box key={bullet} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CheckCircleIcon sx={{ fontSize: 20, color: cap.color }} />
                        <Typography variant="body2" color="text.secondary">
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="outlined"
                    href="#contacto"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderColor: `${cap.color}80`,
                      color: cap.color,
                      '&:hover': {
                        borderColor: cap.color,
                        backgroundColor: `${cap.color}12`,
                        boxShadow: `0 0 16px ${cap.color}40`,
                      },
                    }}
                  >
                    Hablemos de esto
                  </Button>
                </Grid>

                {/* Columna visual decorativa */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '24px',
                      padding: '1px',
                      background: `linear-gradient(135deg, ${cap.color}50 0%, transparent 60%, ${cap.color}25 100%)`,
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: '23px',
                        backgroundColor: 'background.default',
                        minHeight: { xs: 220, md: 300 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Glow de fondo */}
                      <Box
                        sx={{
                          position: 'absolute',
                          width: 260,
                          height: 260,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${cap.color}22 0%, transparent 70%)`,
                        }}
                      />
                      {/* Grilla decorativa */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `
                            linear-gradient(${cap.color}10 1px, transparent 1px),
                            linear-gradient(90deg, ${cap.color}10 1px, transparent 1px)
                          `,
                          backgroundSize: '32px 32px',
                          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 75%)',
                          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 75%)',
                        }}
                      />
                      {/* Ícono grande */}
                      <Box
                        sx={{
                          position: 'relative',
                          width: 120,
                          height: 120,
                          borderRadius: '28px',
                          backgroundColor: `${cap.color}15`,
                          border: `1px solid ${cap.color}35`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: cap.color,
                          boxShadow: `0 0 40px ${cap.color}30`,
                        }}
                      >
                        <Icon sx={{ fontSize: 60 }} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
