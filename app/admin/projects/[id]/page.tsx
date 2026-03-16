import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ProjectForm from '@/components/admin/ProjectForm'

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await prisma.project.findUnique({ where: { id } })

  if (!project) notFound()

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Editar Proyecto</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        {project.title}
      </Typography>
      <ProjectForm project={project} />
    </Box>
  )
}
