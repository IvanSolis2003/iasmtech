import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import DownloadIcon from '@mui/icons-material/Download'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Prisma', 'MUI', 'React Native', 'n8n', 'Docker',
  'Git', 'Vercel',
]

const highlights = [
  { icon: <WorkIcon fontSize="small" />, text: '+3 años de experiencia en desarrollo' },
  { icon: <SchoolIcon fontSize="small" />, text: 'Ex-líder de equipos — Apple Premium Reseller' },
  { icon: <LocationOnIcon fontSize="small" />, text: 'Talca, Región del Maule, Chile' },
]

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="sobre-mi"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: { xs: 260, md: 340 },
                  height: { xs: 260, md: 340 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(41, 121, 255, 0.2) 0%, rgba(0, 229, 255, 0.1) 100%)',
                  border: '2px solid rgba(41, 121, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: { xs: '80px', md: '120px' },
                  boxShadow: '0 0 60px rgba(41, 121, 255, 0.15)',
                }}
              >
                👨‍💻
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  right: { xs: '10%', md: '5%' },
                  backgroundColor: 'background.default',
                  border: '1px solid rgba(41, 121, 255, 0.3)',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  Full Stack Developer
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}
            >
              Sobre mí
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
              Iván Solís
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
              {highlights.map((h, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ color: 'primary.main' }}>{h.icon}</Box>
                  <Typography variant="body2" color="text.secondary">{h.text}</Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Comencé mi carrera liderando equipos en Apple Premium Reseller, donde aprendí que la tecnología
              solo tiene valor cuando resuelve problemas reales. Esa convicción me llevó a reconvertirme como
              desarrollador Full Stack, especializándome en soluciones digitales para PYMES y emprendedores
              de la Región del Maule.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Hoy desarrollo desde Talca, combinando visión de negocio con código limpio y escalable.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: 'rgba(41, 121, 255, 0.3)',
                    color: 'text.secondary',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="/assets/cv-ivan-solis.pdf"
                download
              >
                Descargar CV
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/ivansolismanqueo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderColor: 'rgba(41, 121, 255, 0.5)' }}
              >
                Ver LinkedIn
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
