import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { prisma } from '@/lib/prisma'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug, published: true } })

  if (!post) return { title: 'Post no encontrado — iasmtech' }

  return {
    title: `${post.title} — iasmtech`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      ...(post.imageUrl && { images: [{ url: post.imageUrl }] }),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({ where: { slug, published: true } })

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Button
            href="/blog"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            Volver al blog
          </Button>

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('es-CL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : ''}
          </Typography>

          <Typography
            variant="h2"
            sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.2 }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 400, lineHeight: 1.6 }}
          >
            {post.excerpt}
          </Typography>

          <Divider sx={{ borderColor: 'rgba(41,121,255,0.15)', mb: 5 }} />

          <Box
            sx={{
              '& p': { mb: 3, lineHeight: 1.9, color: 'text.secondary' },
              '& h2': { mt: 5, mb: 2, fontWeight: 700, fontSize: '1.5rem' },
              '& h3': { mt: 4, mb: 2, fontWeight: 600 },
              '& ul, & ol': { pl: 3, mb: 3, '& li': { mb: 1, color: 'text.secondary', lineHeight: 1.8 } },
              '& pre': {
                backgroundColor: 'background.paper',
                border: '1px solid rgba(41,121,255,0.2)',
                borderRadius: 2,
                p: 3,
                mb: 3,
                overflow: 'auto',
                fontSize: '0.875rem',
              },
              '& code': {
                backgroundColor: 'rgba(41,121,255,0.1)',
                px: 0.75,
                py: 0.25,
                borderRadius: 1,
                fontSize: '0.875rem',
                color: 'primary.light',
              },
              '& blockquote': {
                borderLeft: '3px solid',
                borderColor: 'primary.main',
                pl: 3,
                ml: 0,
                mb: 3,
                '& p': { color: 'text.secondary', fontStyle: 'italic' },
              },
            }}
          >
            {post.content.split('\n').map((line, i) => (
              <Typography key={i} variant="body1" sx={{ mb: line === '' ? 2 : 0 }}>
                {line}
              </Typography>
            ))}
          </Box>

          <Divider sx={{ borderColor: 'rgba(41,121,255,0.15)', mt: 6, mb: 4 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button href="/blog" startIcon={<ArrowBackIcon />} variant="outlined"
              sx={{ borderColor: 'rgba(41,121,255,0.3)' }}>
              Ver más artículos
            </Button>
            <Typography variant="caption" color="text.secondary">
              Por Iván Solís Manqueo — iasmtech
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
