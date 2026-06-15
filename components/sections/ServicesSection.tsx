import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import LanguageIcon from '@mui/icons-material/Language'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SettingsIcon from '@mui/icons-material/Settings'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import BuildIcon from '@mui/icons-material/Build'

const services = [
  {
    icon: <LanguageIcon sx={{ fontSize: 40 }} />,
    title: 'Presencia Online Profesional',
    benefit: 'Que tus clientes te encuentren en Google y confíen en tu negocio desde el primer clic.',
    techs: ['Next.js', 'SEO', 'Vercel'],
    color: '#2979FF',
    glow: 'rgba(41,121,255,0.35)',
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
    title: 'Vende las 24 horas del día',
    benefit: 'Tu tienda online trabajando mientras duermes: pagos, stock y pedidos en piloto automático.',
    techs: ['E-commerce', 'Pasarela de pagos', 'Dashboard'],
    color: '#00E5FF',
    glow: 'rgba(0,229,255,0.3)',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />,
    title: 'Tu negocio en el celular',
    benefit: 'Una app con tu nombre que tus clientes descargan, usan y recuerdan todos los días.',
    techs: ['Android', 'React Native', 'Notificaciones'],
    color: '#69F0AE',
    glow: 'rgba(105,240,174,0.3)',
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 40 }} />,
    title: 'Controla tu negocio en un solo lugar',
    benefit: 'Olvídate de las planillas Excel. Un sistema hecho exactamente para como trabajas tú.',
    techs: ['Panel admin', 'Reportes', 'Base de datos'],
    color: '#FFD740',
    glow: 'rgba(255,215,64,0.3)',
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    title: 'Ahorra tiempo con automatización',
    benefit: 'Tareas repetitivas que hace una máquina: cotizaciones, avisos por WhatsApp, reportes automáticos.',
    techs: ['n8n', 'WhatsApp API', 'Email'],
    color: '#FF6E40',
    glow: 'rgba(255,110,64,0.3)',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Tranquilidad post-lanzamiento',
    benefit: 'Que tu sitio o sistema nunca se caiga. Actualizaciones, respaldos y soporte cuando los necesitas.',
    techs: ['Monitoreo', 'Backups', 'Soporte'],
    color: '#EA80FC',
    glow: 'rgba(234,128,252,0.3)',
  },
]

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="servicios"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-20%', left: '-10%', size: 500, color: 'rgba(41,121,255,0.15)', duration: 10 },
        { bottom: '-20%', right: '-10%', size: 450, color: 'rgba(255,215,64,0.08)', duration: 13, delay: 3 },
        { top: '40%', right: '20%', size: 280, color: 'rgba(0,229,255,0.08)', duration: 8, delay: 1 },
      ]} gridOpacity={0.04} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: '0.75rem',
            }}
          >
            Servicios
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800 }}>
            ¿Qué puedo hacer por tu negocio en Talca?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', fontSize: '1.05rem' }}>
            Sin tecnicismos. Resultados concretos para que tu negocio crezca.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '1px',
                  background: `linear-gradient(135deg, ${service.color}40 0%, transparent 50%, ${service.color}20 100%)`,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `linear-gradient(135deg, ${service.color}80 0%, ${service.color}20 50%, ${service.color}60 100%)`,
                    transform: 'translateY(-6px)',
                    '& .card-glow': {
                      opacity: 1,
                    },
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                      filter: `drop-shadow(0 0 12px ${service.color})`,
                    },
                  },
                }}
              >
                {/* Glow exterior en hover */}
                <Box
                  className="card-glow"
                  sx={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: '24px',
                    boxShadow: `0 0 30px ${service.glow}`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                />

                {/* Interior de la card */}
                <Box
                  sx={{
                    backgroundColor: 'background.default',
                    borderRadius: '23px',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Ícono con fondo */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '14px',
                      backgroundColor: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{ transition: 'all 0.3s ease', display: 'flex' }}
                    >
                      {service.icon}
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}>
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.8, flexGrow: 1 }}
                  >
                    {service.benefit}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                    {service.techs.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.68rem',
                          height: 22,
                          backgroundColor: `${service.color}12`,
                          color: service.color,
                          border: `1px solid ${service.color}25`,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    component="a"
                    href="#contacto"
                    size="small"
                    sx={{
                      alignSelf: 'flex-start',
                      color: service.color,
                      border: `1px solid ${service.color}50`,
                      px: 2.5,
                      py: 0.6,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: `${service.color}15`,
                        borderColor: service.color,
                        boxShadow: `0 0 12px ${service.color}40`,
                      },
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Cotizar →
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
