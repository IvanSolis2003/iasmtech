import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const socialLinks = [
  { icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/IvanSolis2003', label: 'GitHub' },
  { icon: <LinkedInIcon fontSize="small" />, href: 'https://www.linkedin.com/in/iván-solís-m', label: 'LinkedIn' },
]

const footerLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/#contacto' },
]

const contactLinks = [
  { icon: <WhatsAppIcon fontSize="small" />, label: '+56 9 5307 4204', href: 'https://wa.me/56953074204' },
  { icon: <EmailIcon fontSize="small" />, label: 'contacto@iasmtech.com', href: 'mailto:contacto@iasmtech.com' },
  { icon: <LocationOnIcon fontSize="small" />, label: 'Talca, Chile', href: null },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'background.paper',
        borderTop: '1px solid rgba(41, 121, 255, 0.15)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
            mb: 5,
          }}
        >
          <Box sx={{ flex: { md: '1.4 1 0' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 1.5 }}>
              <Image
                src="/assets/logo-icon.png"
                alt="iasmtech"
                width={128}
                height={128}
                style={{ width: 30, height: 30 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                iasm<Box component="span" sx={{ color: 'primary.main' }}>tech</Box>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mx: { xs: 'auto', md: 0 }, mb: 2.5 }}>
              Desarrollo web y soluciones digitales para PYMES en Talca y todo Chile.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main', backgroundColor: 'rgba(41, 121, 255, 0.08)' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: { md: '1 1 0' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Contacto
            </Typography>
            <Stack spacing={1.5}>
              {contactLinks.map((item) => (
                <Stack
                  key={item.label}
                  direction="row"
                  spacing={1.25}
                  sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  <Box sx={{ display: 'flex', color: 'primary.main' }}>{item.icon}</Box>
                  {item.href ? (
                    <Typography
                      component="a"
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' },
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.label}
                    </Typography>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                  )}
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: { md: '1 1 0' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Enlaces
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(41, 121, 255, 0.1)', mb: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Iván Solís — Talca, Chile. Todos los derechos reservados.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}
        >
          Desarrollado con
          <Box component="span" role="img" aria-label="amor" sx={{ color: '#e25555' }}>
            ❤️
          </Box>
          por
          <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
            iasm<Box component="span" sx={{ color: 'primary.main' }}>tech.com</Box>
          </Box>
        </Typography>
      </Container>
    </Box>
  )
}
