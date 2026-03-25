import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import { type Project } from '@/types'

interface PortfolioSectionProps {
  projects: Project[]
}

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  if (projects.length === 0) {
    return (
      <Box
        component="section"
        id="proyectos"
        sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
              Trabajos
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Esto es lo que puedo construir para ti
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Los trabajos se cargarán pronto.
            </Typography>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <Box
      component="section"
      id="proyectos"
      sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
            Trabajos
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Esto es lo que puedo construir para ti
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: 'auto' }}>
            Ejemplos reales de lo que desarrollo. Tu proyecto podría ser el siguiente.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    borderColor: 'rgba(41, 121, 255, 0.4)',
                  },
                }}
              >
                {project.imageUrl && (
                  <Box
                    sx={{
                      height: 180,
                      background: 'linear-gradient(135deg, rgba(41,121,255,0.15) 0%, rgba(0,229,255,0.05) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                    }}
                  >
                    🚀
                  </Box>
                )}
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      mb: 1.5,
                      backgroundColor: 'rgba(41, 121, 255, 0.1)',
                      color: 'primary.main',
                      borderColor: 'rgba(41, 121, 255, 0.3)',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                    }}
                    variant="outlined"
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.65rem',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          color: 'text.secondary',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3, gap: 1 }}>
                  {project.projectUrl && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<OpenInNewIcon />}
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ borderColor: 'rgba(41,121,255,0.3)', fontSize: '0.75rem' }}
                    >
                      Ver proyecto
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                    >
                      GitHub
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
