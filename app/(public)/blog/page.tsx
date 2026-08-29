import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ArticleIcon from '@mui/icons-material/Article'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Blog — iasmtech',
  description: 'Artículos sobre desarrollo web, apps móviles y automatización para PYMES.',
}

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: 'desc' },
  })

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
              Blog
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Todos los artículos
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {posts.length} artículo{posts.length !== 1 ? 's' : ''} publicado{posts.length !== 1 ? 's' : ''}
            </Typography>
          </Box>

          {posts.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 10,
                border: '1px dashed rgba(41,121,255,0.2)',
                borderRadius: 3,
              }}
            >
              <ArticleIcon sx={{ fontSize: 64, color: 'rgba(41,121,255,0.2)', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                Próximamente — los primeros artículos están en camino.
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
                        borderColor: 'rgba(41,121,255,0.4)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                      {post.imageUrl ? (
                        <Box
                          component="img"
                          src={post.imageUrl}
                          alt={post.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.4s ease',
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: '100%',
                            background: 'linear-gradient(135deg, rgba(41,121,255,0.1) 0%, rgba(0,229,255,0.05) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ArticleIcon sx={{ fontSize: 48, color: 'rgba(41,121,255,0.3)' }} />
                        </Box>
                      )}
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
      <Footer />
    </>
  )
}
