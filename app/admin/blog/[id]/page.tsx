import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import BlogPostForm from '@/components/admin/BlogPostForm'

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await prisma.blogPost.findUnique({ where: { id } })

  if (!post) notFound()

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Editar Post</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>{post.title}</Typography>
      <BlogPostForm post={post} />
    </Box>
  )
}
