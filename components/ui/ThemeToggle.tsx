'use client'

import { useContext } from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { ColorModeContext } from '@/lib/ColorModeContext'

export default function ThemeToggle() {
  const { mode, toggleMode } = useContext(ColorModeContext)

  return (
    <Tooltip title={mode === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
      <IconButton
        onClick={toggleMode}
        size="small"
        sx={{
          color: 'text.secondary',
          '&:hover': { color: 'text.primary', backgroundColor: 'rgba(41,121,255,0.08)' },
        }}
      >
        {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  )
}
