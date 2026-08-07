import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { ColorModeProvider } from '@/lib/ColorModeContext'
import './globals.css'

const BASE_URL = 'https://iasmtech.cl'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'iasmtech — Soluciones Digitales para tu Negocio',
    template: '%s — iasmtech',
  },
  description:
    'Desarrollo web, apps móviles y automatización para PYMES y emprendedores. Full Stack Developer — Iván Solís.',
  keywords: [
    'desarrollo web Talca',
    'apps móviles Chile',
    'programador freelance Chile',
    'Next.js',
    'React',
    'PYMES',
    'automatización n8n',
  ],
  authors: [{ name: 'Iván Solís Manqueo', url: BASE_URL }],
  creator: 'Iván Solís Manqueo',
  openGraph: {
    title: 'iasmtech — Soluciones Digitales para tu Negocio',
    description:
      'Desarrollo web, apps móviles y automatización para PYMES y emprendedores.',
    url: BASE_URL,
    siteName: 'iasmtech',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iasmtech — Soluciones Digitales para tu Negocio',
    description: 'Desarrollo web, apps móviles y automatización para PYMES y emprendedores.',
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
          <ColorModeProvider>
            {children}
            <Analytics />
          </ColorModeProvider>
        </AppRouterCacheProvider>
        <Script
          src="https://iasm-pulse.vercel.app/track.js"
          data-site="iasmtech.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
