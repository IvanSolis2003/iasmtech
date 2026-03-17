import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import CodeIcon from '@mui/icons-material/Code'

const socialLinks = [
  { icon: <GitHubIcon />, href: 'https://github.com/IvanSolis2003', label: 'GitHub' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/iván-solís-manqueo-57a00b2b8', label: 'LinkedIn' },
]

const footerLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
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
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <CodeIcon sx={{ color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                iasm<Box component="span" sx={{ color: 'primary.main' }}>tech</Box>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
              Soluciones digitales para PYMES y emprendedores en todo Chile.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
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
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
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
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(41, 121, 255, 0.1)', mb: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Iván Solís — Talca, Chile
        </Typography>
      </Container>
    </Box>
  )
}
