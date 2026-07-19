'use client'

import Box from '@mui/material/Box'

/**
 * Fondo tecnológico fijo para todo el Home.
 * Se monta una sola vez detrás del contenido (zIndex 0). Las secciones con
 * fondo transparente dejan verlo; las secciones "panel" opacas lo tapan,
 * creando el ritmo visual. Mantener opacidades bajas para no afectar la lectura.
 */
export default function TechBackground() {
  // Nodos de la red (coordenadas en un viewBox 1440x900)
  const nodes = [
    { x: 120, y: 140 }, { x: 340, y: 90 }, { x: 520, y: 240 },
    { x: 760, y: 130 }, { x: 980, y: 300 }, { x: 1180, y: 160 },
    { x: 1320, y: 360 }, { x: 220, y: 420 }, { x: 620, y: 480 },
    { x: 900, y: 560 }, { x: 1120, y: 640 }, { x: 400, y: 700 },
    { x: 720, y: 780 }, { x: 1020, y: 820 }, { x: 1300, y: 760 },
  ]
  const links: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [0, 7], [7, 8], [2, 8], [8, 9], [9, 10], [4, 9],
    [7, 11], [11, 12], [8, 12], [12, 13], [13, 14], [10, 14], [6, 14],
  ]

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      {/* Grilla en movimiento lento */}
      <Box sx={{
        position: 'absolute',
        inset: '-60px',
        backgroundImage: `
          linear-gradient(rgba(41,121,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(41,121,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        animation: 'techGridDrift 28s linear infinite',
        '@keyframes techGridDrift': {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(64px,64px)' },
        },
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black 40%, transparent 100%)',
      }} />

      {/* Glows suaves flotantes */}
      <Box sx={{
        position: 'absolute', top: '8%', left: '-8%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(41,121,255,0.12) 0%, transparent 65%)',
        animation: 'techFloatA 16s ease-in-out infinite',
        '@keyframes techFloatA': {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(60px,40px)' },
        },
      }} />
      <Box sx={{
        position: 'absolute', bottom: '4%', right: '-8%',
        width: 560, height: 560, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, transparent 65%)',
        animation: 'techFloatB 20s ease-in-out infinite',
        '@keyframes techFloatB': {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-50px,-40px)' },
        },
      }} />

      {/* Red de nodos / circuito */}
      <Box
        component="svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 95%)',
        }}
      >
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#2979FF"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="10" fill="#00E5FF" opacity="0.06" />
            <Box
              component="circle"
              cx={n.x}
              cy={n.y}
              r="2.5"
              sx={{
                fill: i % 3 === 0 ? '#00E5FF' : '#2979FF',
                animation: `techPulse 3.5s ease-in-out ${(i % 5) * 0.4}s infinite`,
                '@keyframes techPulse': {
                  '0%,100%': { opacity: 0.35 },
                  '50%': { opacity: 1 },
                },
              }}
            />
          </g>
        ))}
      </Box>
    </Box>
  )
}
