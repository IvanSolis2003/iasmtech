import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { prisma } from '@/lib/prisma'
import DeleteBlogButton from './DeleteBlogButton'

export default async function BlogAdminPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>Blog</Typography>
          <Typography variant="body2" color="text.secondary">{posts.length} posts en total</Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} href="/admin/blog/new">
          Nuevo post
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper', border: '1px solid rgba(41,121,255,0.15)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { fontWeight: 700, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 } }}>
              <TableCell>Título</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} sx={{ '&:hover': { backgroundColor: 'rgba(41,121,255,0.04)' } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{post.title}</Typography>
                  <Typography variant="caption" color="text.secondary"
                    sx={{ display: 'block', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {post.excerpt}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">{post.slug}</Typography>
                </TableCell>
                <TableCell>
                  <Chip label={post.published ? 'Publicado' : 'Borrador'} size="small"
                    color={post.published ? 'success' : 'default'} sx={{ fontSize: '0.7rem' }} />
                </TableCell>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.createdAt).toLocaleDateString('es-CL')}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <IconButton href={`/admin/blog/${post.id}`} size="small" sx={{ color: 'text.secondary', mr: 0.5 }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <DeleteBlogButton id={post.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
