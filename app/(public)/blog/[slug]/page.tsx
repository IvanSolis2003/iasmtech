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
import MarkdownContent from '@/components/ui/MarkdownContent'
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
          backgroundColor: 'background.default',
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

          {post.imageUrl && (
            <Box
              component="img"
              src={post.imageUrl}
              alt={post.title}
              sx={{
                width: '100%',
                maxHeight: 440,
                objectFit: 'cover',
                borderRadius: '24px',
                mb: 5,
                border: '1px solid rgba(41,121,255,0.2)',
                display: 'block',
              }}
            />
          )}

          <Divider sx={{ borderColor: 'rgba(41,121,255,0.15)', mb: 5 }} />

          <MarkdownContent content={post.content} />

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
