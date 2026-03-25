'use client'

import { createContext, useState, useMemo, useEffect, type ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { type PaletteMode } from '@mui/material'
import { buildTheme } from './theme'

interface ColorModeContextType {
  mode: PaletteMode
  toggleMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'dark',
  toggleMode: () => {},
})

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme-mode') as PaletteMode | null
    if (saved) setMode(saved)
  }, [])

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme-mode', next)
      return next
    })
  }

  const theme = useMemo(() => buildTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
