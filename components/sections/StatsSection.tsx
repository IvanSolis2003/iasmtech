import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

const stats = [
  { value: '+10', label: 'Proyectos entregados' },
  { value: '+5', label: 'Clientes satisfechos' },
  { value: '2+', label: 'Años de experiencia' },
  { value: '100%', label: 'Proyectos en plazo' },
]

export default function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        borderTop: '1px solid rgba(41, 121, 255, 0.1)',
        borderBottom: '1px solid rgba(41, 121, 255, 0.1)',
        background: 'rgba(41, 121, 255, 0.03)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((stat, index) => (
            <Grid
              key={stat.label}
              size={{ xs: 6, md: 3 }}
              sx={{ position: 'relative' }}
            >
              {index < stats.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '10%',
                    height: '80%',
                    borderColor: 'rgba(41, 121, 255, 0.15)',
                    display: { xs: index === 1 ? 'none' : 'block', md: 'block' },
                  }}
                />
              )}
              <Box sx={{ textAlign: 'center', py: { xs: 2, md: 0 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    background: 'linear-gradient(135deg, #F0F0F0 0%, #75A7FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
