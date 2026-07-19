'use client'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const techs = [
  { icon: 'nextjs/nextjs-original', name: 'Next.js', invert: true },
  { icon: 'react/react-original', name: 'React', invert: false },
  { icon: 'typescript/typescript-original', name: 'TypeScript', invert: false },
  { icon: 'nodejs/nodejs-original', name: 'Node.js', invert: false },
  { icon: 'postgresql/postgresql-original', name: 'PostgreSQL', invert: false },
  { icon: 'prisma/prisma-original', name: 'Prisma', invert: true },
  { icon: 'materialui/materialui-original', name: 'MUI', invert: false },
  { icon: 'react/react-original', name: 'React Native', invert: false },
  { icon: 'express/express-original', name: 'Express', invert: true },
  { icon: 'docker/docker-original', name: 'Docker', invert: false },
  { icon: 'git/git-original', name: 'Git', invert: false },
  { icon: 'vercel/vercel-original', name: 'Vercel', invert: true },
  { icon: 'javascript/javascript-original', name: 'JavaScript', invert: false },
]

export default function TechMarquee() {
  const isDark = useTheme().palette.mode === 'dark'
  // Duplicamos la lista para lograr el loop continuo sin cortes
  const loop = [...techs, ...techs]

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(41, 121, 255, 0.08)',
        borderBottom: '1px solid rgba(41, 121, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            color: 'text.secondary',
            fontWeight: 700,
            letterSpacing: 3,
            mb: { xs: 4, md: 5 },
          }}
        >
          Tecnologías con las que trabajo
        </Typography>
      </Container>

      {/* Pista del carrusel con máscara de degradado en los bordes */}
      <Box
        sx={{
          position: 'relative',
          maskImage:
            'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            gap: 2,
            animation: 'marquee 40s linear infinite',
            '&:hover': { animationPlayState: 'paused' },
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {loop.map((tech, i) => (
            <Box
              key={`${tech.name}-${i}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                flexShrink: 0,
                backgroundColor: 'rgba(41,121,255,0.05)',
                border: '1px solid rgba(41,121,255,0.15)',
                borderRadius: '50px',
                px: '20px',
                py: '12px',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: 'rgba(41,121,255,0.5)',
                  backgroundColor: 'rgba(41,121,255,0.1)',
                },
              }}
            >
              <Box
                component="img"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}.svg`}
                alt={tech.name}
                width={28}
                height={28}
                sx={{
                  display: 'block',
                  flexShrink: 0,
                  ...(tech.invert && isDark && { filter: 'invert(1)' }),
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: 'text.secondary',
                  whiteSpace: 'nowrap',
                }}
              >
                {tech.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
