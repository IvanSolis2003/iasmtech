import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'
import './globals.css'

const BASE_URL = 'https://iasmtech.cl'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'iasmtech — Soluciones Digitales para el Maule',
    template: '%s — iasmtech',
  },
  description:
    'Desarrollo web, apps móviles y automatización para PYMES y emprendedores en Talca y la Región del Maule. Full Stack Developer — Iván Solís Manqueo.',
  keywords: [
    'desarrollo web Talca',
    'apps móviles Maule',
    'programador freelance Chile',
    'Next.js',
    'React',
    'PYMES',
    'automatización n8n',
  ],
  authors: [{ name: 'Iván Solís Manqueo', url: BASE_URL }],
  creator: 'Iván Solís Manqueo',
  openGraph: {
    title: 'iasmtech — Soluciones Digitales para el Maule',
    description:
      'Desarrollo web, apps móviles y automatización para PYMES y emprendedores de la Región del Maule.',
    url: BASE_URL,
    siteName: 'iasmtech',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iasmtech — Soluciones Digitales para el Maule',
    description: 'Desarrollo web, apps móviles y automatización para PYMES del Maule.',
    creator: '@ivansolisdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
