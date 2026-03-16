'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2979FF',
      light: '#75A7FF',
      dark: '#0046CB',
    },
    secondary: {
      main: '#00E5FF',
    },
    background: {
      default: '#0A0A0F',
      paper: '#12121A',
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem' },
    h2: { fontWeight: 700, fontSize: '2.5rem' },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(41, 121, 255, 0.15)',
        },
      },
    },
  },
})

export default theme
