import Box from '@mui/material/Box'

interface Orb {
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number | string
  color: string
  duration: number
  delay?: number
}

interface AnimatedBackgroundProps {
  orbs: Orb[]
  gridOpacity?: number
}

export default function AnimatedBackground({ orbs, gridOpacity = 0.05 }: AnimatedBackgroundProps) {
  return (
    <>
      {orbs.map((orb, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
            animation: `orbFloat${i} ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay ?? 0}s`,
            [`@keyframes orbFloat${i}`]: {
              '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
              '33%': { transform: 'translate(30px, -25px) scale(1.06)' },
              '66%': { transform: 'translate(-20px, 15px) scale(0.96)' },
            },
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      {/* Grilla en movimiento */}
      <Box sx={{
        position: 'absolute',
        inset: '-60px',
        backgroundImage: `
          linear-gradient(rgba(41,121,255,${gridOpacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(41,121,255,${gridOpacity}) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridDrift 20s linear infinite',
        '@keyframes gridDrift': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
        },
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </>
  )
}
