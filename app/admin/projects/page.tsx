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
import DeleteProjectButton from './DeleteProjectButton'

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { order: 'asc' } })

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>Proyectos</Typography>
          <Typography variant="body2" color="text.secondary">{projects.length} proyectos en total</Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} href="/admin/projects/new">
          Nuevo proyecto
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: 'background.paper', border: '1px solid rgba(41,121,255,0.15)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { fontWeight: 700, color: 'text.secondary', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: 1 } }}>
              <TableCell>Título</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Stack</TableCell>
              <TableCell>Destacado</TableCell>
              <TableCell>Orden</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} sx={{ '&:hover': { backgroundColor: 'rgba(41,121,255,0.04)' } }}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{project.title}</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {project.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip label={project.category} size="small" sx={{ backgroundColor: 'rgba(41,121,255,0.1)', color: 'primary.main', fontSize: '0.7rem' }} />
                </TableCell>
                <TableCell>
                  <Typography variant="caption" color="text.secondary">
                    {project.techStack.slice(0, 3).join(', ')}{project.techStack.length > 3 ? '...' : ''}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={project.featured ? 'Sí' : 'No'}
                    size="small"
                    color={project.featured ? 'success' : 'default'}
                    sx={{ fontSize: '0.7rem' }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{project.order}</Typography>
                </TableCell>
                <TableCell align="right">
                  <IconButton href={`/admin/projects/${project.id}`} size="small" sx={{ color: 'text.secondary', mr: 0.5 }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <DeleteProjectButton id={project.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
