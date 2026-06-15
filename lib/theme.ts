'use client'

import { createTheme, type PaletteMode } from '@mui/material/styles'

export function buildTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#2979FF',
        light: '#75A7FF',
        dark: '#0046CB',
      },
      secondary: {
        main: '#00E5FF',
      },
      background: {
        default: mode === 'dark' ? '#0A0A0F' : '#F5F7FF',
        paper: mode === 'dark' ? '#12121A' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#F0F0F0' : '#0A0A0F',
        secondary: mode === 'dark' ? '#9E9E9E' : '#555577',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      h1: { fontWeight: 800, fontSize: '3.5rem', letterSpacing: '-0.03em' },
      h2: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-0.02em' },
      h3: { fontWeight: 600, letterSpacing: '-0.01em' },
    },
    shape: {
      borderRadius: 24,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 50,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            borderRadius: 24,
            border: '1px solid rgba(41, 121, 255, 0.15)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 50,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 50,
            '&.MuiInputBase-multiline': {
              borderRadius: 24,
            },
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: '24px !important',
          },
        },
      },
    },
  })
}
