import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
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
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper', position: 'relative', overflow: 'hidden' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
              Trabajos
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Te muestro algunos de mis trabajos
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
      sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper', position: 'relative', overflow: 'hidden' }}
    >
      <AnimatedBackground orbs={[
        { top: '-15%', right: '-10%', size: 500, color: 'rgba(41,121,255,0.14)', duration: 11 },
        { bottom: '-20%', left: '-10%', size: 420, color: 'rgba(105,240,174,0.1)', duration: 9, delay: 3 },
      ]} gridOpacity={0.04} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
            Trabajos
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Te muestro algunos de mis trabajos
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
                  backgroundColor: 'background.default',
                  border: '1px solid rgba(41,121,255,0.12)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(41,121,255,0.4)',
                    borderColor: 'rgba(41, 121, 255, 0.4)',
                    '& .project-overlay': { opacity: 1 },
                    '& .project-img': { transform: 'scale(1.05)' },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  {project.imageUrl ? (
                    <Box
                      component="img"
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-img"
                      sx={{
                        width: '100%',
                        height: 210,
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  ) : (
                    <Box sx={{
                      height: 210,
                      background: 'linear-gradient(135deg, rgba(41,121,255,0.12) 0%, rgba(0,229,255,0.06) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '52px',
                    }}>
                      🚀
                    </Box>
                  )}
                  {/* Overlay hover con botón */}
                  {project.projectUrl && (
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(41,121,255,0.85) 0%, rgba(0,70,203,0.9) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<OpenInNewIcon />}
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'white',
                          color: '#2979FF',
                          fontWeight: 700,
                          '&:hover': { backgroundColor: '#f0f0f0' },
                        }}
                      >
                        Ver proyecto
                      </Button>
                    </Box>
                  )}
                </Box>
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
