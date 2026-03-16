import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProjectForm from '@/components/admin/ProjectForm'

export default function NewProjectPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Nuevo Proyecto</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Completa los datos del proyecto
      </Typography>
      <ProjectForm />
    </Box>
  )
}
