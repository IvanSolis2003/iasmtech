import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import LanguageIcon from '@mui/icons-material/Language'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SettingsIcon from '@mui/icons-material/Settings'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import BuildIcon from '@mui/icons-material/Build'

const services = [
  {
    icon: <LanguageIcon sx={{ fontSize: 48 }} />,
    title: 'Presencia Online Profesional',
    benefit: 'Que tus clientes te encuentren en Google y confíen en tu negocio desde el primer clic.',
    techs: ['Next.js', 'SEO', 'Vercel'],
    color: '#2979FF',
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 48 }} />,
    title: 'Vende las 24 horas del día',
    benefit: 'Tu tienda online trabajando mientras duermes: pagos, stock y pedidos en piloto automático.',
    techs: ['E-commerce', 'Pasarela de pagos', 'Dashboard'],
    color: '#00E5FF',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 48 }} />,
    title: 'Tu negocio en el celular',
    benefit: 'Una app con tu nombre que tus clientes descargan, usan y recuerdan todos los días.',
    techs: ['Android', 'React Native', 'Notificaciones'],
    color: '#69F0AE',
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 48 }} />,
    title: 'Controla tu negocio en un solo lugar',
    benefit: 'Olvídate de las planillas Excel. Un sistema hecho exactamente para como trabajas tú.',
    techs: ['Panel admin', 'Reportes', 'Base de datos'],
    color: '#FFD740',
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 48 }} />,
    title: 'Ahorra tiempo con automatización',
    benefit: 'Tareas repetitivas que hace una máquina: cotizaciones, avisos por WhatsApp, reportes automáticos.',
    techs: ['n8n', 'WhatsApp API', 'Email'],
    color: '#FF6E40',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Tranquilidad post-lanzamiento',
    benefit: 'Que tu sitio o sistema nunca se caiga. Actualizaciones, respaldos y soporte cuando los necesitas.',
    techs: ['Monitoreo', 'Backups', 'Soporte'],
    color: '#EA80FC',
  },
]

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="servicios"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
          >
            Servicios
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            ¿Qué puedo hacer por tu negocio?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: 'auto' }}>
            Sin tecnicismos. Resultados concretos para que tu negocio crezca.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: 'background.paper',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                    borderColor: `${service.color}40`,
                  },
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ color: service.color, mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                    {service.benefit}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
                    {service.techs.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: 22,
                          backgroundColor: `${service.color}14`,
                          color: service.color,
                          border: `1px solid ${service.color}30`,
                        }}
                      />
                    ))}
                  </Box>

                  <Button
                    component="a"
                    href="#contacto"
                    size="small"
                    sx={{
                      color: service.color,
                      borderColor: `${service.color}60`,
                      border: '1px solid',
                      px: 2,
                      py: 0.5,
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      borderRadius: 1,
                      textTransform: 'none',
                      alignSelf: 'flex-start',
                      '&:hover': {
                        backgroundColor: `${service.color}12`,
                        borderColor: service.color,
                      },
                    }}
                  >
                    Cotizar →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
