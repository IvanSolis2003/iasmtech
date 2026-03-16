import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import LanguageIcon from '@mui/icons-material/Language'
import StorefrontIcon from '@mui/icons-material/Storefront'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import SettingsIcon from '@mui/icons-material/Settings'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import BuildIcon from '@mui/icons-material/Build'

const services = [
  {
    icon: <LanguageIcon sx={{ fontSize: 48 }} />,
    title: 'Sitios Web Modernos',
    description: 'Landing pages y sitios institucionales rápidos, responsivos y optimizados para SEO.',
    color: '#2979FF',
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 48 }} />,
    title: 'Tiendas Online',
    description: 'E-commerce completo con carrito, pagos, inventario y panel de administración.',
    color: '#00E5FF',
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 48 }} />,
    title: 'Apps Móviles Android',
    description: 'Aplicaciones React Native para Android, conectadas a tu backend existente.',
    color: '#69F0AE',
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 48 }} />,
    title: 'Sistemas a Medida',
    description: 'Software de gestión personalizado: inventarios, activos, ventas, RRHH.',
    color: '#FFD740',
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 48 }} />,
    title: 'Automatización con n8n',
    description: 'Flujos automatizados entre tus apps: CRM, email, WhatsApp, facturación.',
    color: '#FF6E40',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Mantención y Soporte',
    description: 'Mantención mensual, actualizaciones, backups y soporte técnico continuo.',
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
            Soluciones tecnológicas adaptadas a la realidad de las PYMES y emprendedores del Maule.
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
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                    borderColor: `${service.color}40`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: service.color, mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>
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
