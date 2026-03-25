'use client'

import Box from '@mui/material/Box'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type Direction = 'up' | 'left' | 'right'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
}

function getInitialTransform(direction: Direction): string {
  if (direction === 'left') return 'translateX(-32px)'
  if (direction === 'right') return 'translateX(32px)'
  return 'translateY(32px)'
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTransform(direction),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  )
}
