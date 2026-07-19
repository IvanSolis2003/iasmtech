import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArticleIcon from '@mui/icons-material/Article'
import { type BlogPost } from '@/types'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

interface BlogSectionProps {
  posts: BlogPost[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <Box
      component="section"
      id="blog"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-15%', left: '-10%', size: 420, color: 'rgba(41,121,255,0.12)', duration: 11 },
        { bottom: '-20%', right: '-5%', size: 360, color: 'rgba(105,240,174,0.09)', duration: 14, delay: 2 },
      ]} gridOpacity={0.04} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
              Blog
            </Typography>
            <Typography variant="h2" sx={{ mt: 1 }}>
              Últimos Artículos
            </Typography>
          </Box>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href="/blog"
            sx={{ borderColor: 'rgba(41, 121, 255, 0.5)', whiteSpace: 'nowrap' }}
          >
            Ver todos
          </Button>
        </Box>

        {posts.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              border: '1px dashed rgba(41, 121, 255, 0.2)',
              borderRadius: '24px',
            }}
          >
            <ArticleIcon sx={{ fontSize: 64, color: 'rgba(41,121,255,0.2)', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
              Próximamente — los primeros artículos sobre desarrollo, automatización y tecnología para PYMES.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <Card
                  component="a"
                  href={`/blog/${post.slug}`}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(41, 121, 255, 0.4)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 160,
                      background: 'linear-gradient(135deg, rgba(41,121,255,0.1) 0%, rgba(0,229,255,0.05) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: 48, color: 'rgba(41,121,255,0.4)' }} />
                  </Box>
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString('es-CL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  )
}
