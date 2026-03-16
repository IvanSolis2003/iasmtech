import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FolderIcon from '@mui/icons-material/Folder'
import MailIcon from '@mui/icons-material/Mail'
import ArticleIcon from '@mui/icons-material/Article'
import { prisma } from '@/lib/prisma'

async function getStats() {
  const [projects, messages, posts, newMessages] = await Promise.all([
    prisma.project.count(),
    prisma.contact.count(),
    prisma.blogPost.count(),
    prisma.contact.count({ where: { status: 'NUEVO' } }),
  ])
  return { projects, messages, posts, newMessages }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { label: 'Proyectos', value: stats.projects, icon: <FolderIcon />, color: '#2979FF', href: '/admin/projects' },
    { label: 'Mensajes', value: stats.messages, icon: <MailIcon />, color: '#00E5FF', href: '/admin/messages', badge: stats.newMessages },
    { label: 'Posts del Blog', value: stats.posts, icon: <ArticleIcon />, color: '#69F0AE', href: '/admin/blog' },
  ]

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Resumen general del sitio
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.label}>
            <Card
              component="a"
              href={card.href}
              sx={{
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': { transform: 'translateY(-4px)', borderColor: `${card.color}40` },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {card.label}
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 700 }}>
                      {card.value}
                    </Typography>
                    {card.badge != null && card.badge > 0 && (
                      <Typography variant="caption" sx={{ color: '#FF6E40', fontWeight: 600 }}>
                        {card.badge} nuevos sin leer
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: `${card.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
