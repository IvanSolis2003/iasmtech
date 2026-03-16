import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BlogPostForm from '@/components/admin/BlogPostForm'

export default function NewBlogPostPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Nuevo Post</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>Escribe tu artículo</Typography>
      <BlogPostForm />
    </Box>
  )
}
