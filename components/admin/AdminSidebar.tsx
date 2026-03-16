'use client'

import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FolderIcon from '@mui/icons-material/Folder'
import MailIcon from '@mui/icons-material/Mail'
import ArticleIcon from '@mui/icons-material/Article'
import LogoutIcon from '@mui/icons-material/Logout'
import CodeIcon from '@mui/icons-material/Code'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: <DashboardIcon fontSize="small" /> },
  { label: 'Proyectos', href: '/admin/projects', icon: <FolderIcon fontSize="small" /> },
  { label: 'Mensajes', href: '/admin/messages', icon: <MailIcon fontSize="small" /> },
  { label: 'Blog', href: '/admin/blog', icon: <ArticleIcon fontSize="small" /> },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'background.paper',
        borderRight: '1px solid rgba(41, 121, 255, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 100,
      }}
    >
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CodeIcon sx={{ color: 'primary.main' }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
          iasm<Box component="span" sx={{ color: 'primary.main' }}>tech</Box>
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'rgba(41, 121, 255, 0.1)' }} />

      <List sx={{ px: 1.5, py: 2, flex: 1 }}>
        {navItems.map((item) => {
          const isActive =
            item.href === '/admin'
              ? pathname === '/admin'
              : pathname.startsWith(item.href)

          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                href={item.href}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(41, 121, 255, 0.12)',
                    color: 'primary.main',
                    '& .MuiListItemIcon-root': { color: 'primary.main' },
                  },
                  '&:hover': { backgroundColor: 'rgba(41, 121, 255, 0.06)' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: 'text.secondary' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: isActive ? 600 : 400 }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      <Divider sx={{ borderColor: 'rgba(41, 121, 255, 0.1)' }} />

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          startIcon={<LogoutIcon />}
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          sx={{
            color: 'text.secondary',
            justifyContent: 'flex-start',
            px: 2,
            '&:hover': { color: 'error.main', backgroundColor: 'rgba(244, 67, 54, 0.06)' },
          }}
        >
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  )
}
