'use client'

import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import CodeIcon from '@mui/icons-material/Code'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 })
  const theme = useTheme()
  const navBg = theme.palette.mode === 'dark' ? 'rgba(10,10,15,0.92)' : 'rgba(245,247,255,0.92)'

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? navBg : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(41, 121, 255, 0.15)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon sx={{ color: 'primary.main', fontSize: 28 }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: '-0.5px' }}
            >
              iasm<Box component="span" sx={{ color: 'primary.main' }}>tech</Box>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary', backgroundColor: 'rgba(41, 121, 255, 0.08)' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
            <Button
              variant="contained"
              href="#contacto"
              sx={{ ml: 1, boxShadow: '0 0 20px rgba(41, 121, 255, 0.3)' }}
            >
              Cotizar proyecto
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <ThemeToggle />
          </Box>

          <IconButton
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.paper',
            borderLeft: '1px solid rgba(41, 121, 255, 0.15)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{ px: 3, py: 1.5 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 3, pt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              href="#contacto"
              onClick={() => setMobileOpen(false)}
            >
              Cotizar proyecto
            </Button>
          </ListItem>
        </List>
      </Drawer>

      <Toolbar />
    </>
  )
}
