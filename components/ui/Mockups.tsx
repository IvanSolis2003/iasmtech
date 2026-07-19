import Box from '@mui/material/Box'

type MockupProps = {
  /** Color de acento principal del mockup */
  color?: string
}

const baseSx = {
  width: '100%',
  height: 'auto',
  display: 'block',
} as const

/**
 * Ventana de navegador con una landing dentro.
 * Ilustra "Desarrollo a medida / sitios web".
 */
export function WebsiteMockup({ color = '#2979FF' }: MockupProps) {
  return (
    <Box component="svg" viewBox="0 0 400 280" fill="none" sx={baseSx} role="img" aria-label="Mockup de sitio web">
      {/* Marco ventana */}
      <rect x="8" y="8" width="384" height="264" rx="14" fill="#0E0E16" stroke={`${color}33`} />
      {/* Barra superior */}
      <path d="M8 22 Q8 8 22 8 H378 Q392 8 392 22 V44 H8 Z" fill="#15151F" />
      <circle cx="28" cy="26" r="4" fill="#FF5F57" />
      <circle cx="44" cy="26" r="4" fill="#FEBC2E" />
      <circle cx="60" cy="26" r="4" fill="#28C840" />
      <rect x="90" y="20" width="220" height="12" rx="6" fill="#0A0A0F" stroke={`${color}22`} />
      <circle cx="102" cy="26" r="2.5" fill={color} />
      {/* Hero interno */}
      <rect x="26" y="60" width="150" height="12" rx="6" fill={color} fillOpacity="0.9" />
      <rect x="26" y="80" width="200" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.18" />
      <rect x="26" y="94" width="170" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.12" />
      <rect x="26" y="116" width="70" height="22" rx="11" fill={color} />
      <rect x="104" y="116" width="70" height="22" rx="11" fill="none" stroke={`${color}66`} />
      {/* Panel visual derecho */}
      <rect x="250" y="60" width="124" height="84" rx="10" fill={`${color}1F`} stroke={`${color}44`} />
      <circle cx="312" cy="94" r="16" fill={color} fillOpacity="0.5" />
      <rect x="270" y="120" width="84" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.18" />
      {/* Grid de cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={26 + i * 118} y="166" width="106" height="84" rx="10" fill="#15151F" stroke={`${color}22`} />
          <circle cx={44 + i * 118} cy="186" r="8" fill={color} fillOpacity="0.55" />
          <rect x={26 + i * 118 + 14} y="204" width="70" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.16" />
          <rect x={26 + i * 118 + 14} y="216" width="50" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.1" />
          <rect x={26 + i * 118 + 14} y="232" width="40" height="8" rx="4" fill={color} fillOpacity="0.7" />
        </g>
      ))}
    </Box>
  )
}

/**
 * Canvas de nodos conectados (estilo n8n).
 * Ilustra "Automatización e IA".
 */
export function AutomationMockup({ color = '#00E5FF' }: MockupProps) {
  const node = (x: number, y: number, active = false) => (
    <g>
      <rect
        x={x}
        y={y}
        width="78"
        height="46"
        rx="12"
        fill={active ? `${color}26` : '#15151F'}
        stroke={active ? color : `${color}44`}
        strokeWidth={active ? 1.5 : 1}
      />
      <rect x={x + 12} y={y + 14} width="18" height="18" rx="6" fill={color} fillOpacity={active ? 0.9 : 0.5} />
      <rect x={x + 38} y={y + 16} width="28" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.25" />
      <rect x={x + 38} y={y + 26} width="20" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.15" />
    </g>
  )

  return (
    <Box component="svg" viewBox="0 0 400 280" fill="none" sx={baseSx} role="img" aria-label="Mockup de flujo de automatización">
      <rect x="8" y="8" width="384" height="264" rx="14" fill="#0E0E16" stroke={`${color}33`} />
      {/* Grilla de canvas */}
      <defs>
        <pattern id="autoGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke={`${color}12`} strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="8" y="8" width="384" height="264" rx="14" fill="url(#autoGrid)" />

      {/* Conexiones */}
      <path d="M96 74 C150 74 150 150 204 150" fill="none" stroke={color} strokeOpacity="0.7" strokeWidth="2" />
      <path d="M282 150 C320 150 320 96 344 96" fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
      <path d="M282 150 C320 150 320 210 344 210" fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
      {/* Punto de dato en movimiento (estático) */}
      <circle cx="150" cy="112" r="4" fill={color} />

      {/* Nodo disparador */}
      <circle cx="58" cy="74" r="22" fill={`${color}20`} stroke={color} strokeWidth="1.5" />
      <path d="M53 64 L67 74 L53 84 Z" fill={color} />

      {/* Nodos de proceso */}
      {node(204, 127, true)}
      {node(344 - 40, 73)}
      {node(344 - 40, 187)}

      {/* Etiqueta IA */}
      <rect x="150" y="228" width="100" height="26" rx="13" fill={`${color}18`} stroke={`${color}55`} />
      <circle cx="168" cy="241" r="5" fill={color} />
      <rect x="180" y="238" width="56" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.3" />
    </Box>
  )
}

/**
 * Dashboard de monitoreo con gráfico ascendente y tiles.
 * Ilustra "Soporte / monitoreo / confianza".
 */
export function DashboardMockup({ color = '#69F0AE' }: MockupProps) {
  return (
    <Box component="svg" viewBox="0 0 400 280" fill="none" sx={baseSx} role="img" aria-label="Mockup de panel de monitoreo">
      <rect x="8" y="8" width="384" height="264" rx="14" fill="#0E0E16" stroke={`${color}33`} />
      {/* Sidebar */}
      <rect x="8" y="8" width="64" height="264" rx="14" fill="#15151F" />
      <rect x="24" y="28" width="32" height="10" rx="5" fill={color} fillOpacity="0.8" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="24" y={58 + i * 26} width="32" height="8" rx="4" fill="#FFFFFF" fillOpacity={i === 0 ? 0.4 : 0.12} />
      ))}

      {/* Stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={88 + i * 100} y="28" width="86" height="52" rx="10" fill="#15151F" stroke={`${color}22`} />
          <rect x={100 + i * 100} y="40" width="34" height="12" rx="6" fill={color} fillOpacity="0.85" />
          <rect x={100 + i * 100} y="60" width="52" height="6" rx="3" fill="#FFFFFF" fillOpacity="0.16" />
        </g>
      ))}

      {/* Gráfico de área ascendente */}
      <rect x="88" y="96" width="286" height="120" rx="10" fill="#15151F" stroke={`${color}22`} />
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M100 190 L140 172 L180 178 L220 150 L260 158 L300 126 L360 110 L360 204 L100 204 Z"
        fill="url(#areaFill)"
      />
      <path
        d="M100 190 L140 172 L180 178 L220 150 L260 158 L300 126 L360 110"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="360" cy="110" r="4" fill={color} />

      {/* Barra de uptime */}
      <rect x="88" y="232" width="286" height="22" rx="11" fill="#15151F" stroke={`${color}22`} />
      <rect x="94" y="238" width="230" height="10" rx="5" fill={color} fillOpacity="0.8" />
      <rect x="332" y="236" width="36" height="14" rx="7" fill={`${color}22`} />
    </Box>
  )
}

/**
 * Teléfono con pantalla de app.
 * Ilustra "Apps móviles".
 */
export function MobileMockup({ color = '#2979FF' }: MockupProps) {
  return (
    <Box component="svg" viewBox="0 0 400 280" fill="none" sx={baseSx} role="img" aria-label="Mockup de app móvil">
      <rect x="150" y="16" width="100" height="248" rx="22" fill="#0E0E16" stroke={`${color}44`} strokeWidth="1.5" />
      <rect x="180" y="26" width="40" height="6" rx="3" fill="#15151F" />
      {/* Header app */}
      <rect x="160" y="44" width="80" height="40" rx="10" fill={`${color}22`} />
      <rect x="170" y="56" width="40" height="8" rx="4" fill={color} fillOpacity="0.9" />
      <rect x="170" y="70" width="28" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.2" />
      {/* Lista */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="160" y={96 + i * 42} width="80" height="34" rx="8" fill="#15151F" stroke={`${color}22`} />
          <circle cx="176" cy={113 + i * 42} r="8" fill={color} fillOpacity="0.5" />
          <rect x="190" y={108 + i * 42} width="42" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.2" />
          <rect x="190" y={118 + i * 42} width="28" height="5" rx="2.5" fill="#FFFFFF" fillOpacity="0.12" />
        </g>
      ))}
      {/* Nav inferior */}
      <rect x="160" y="230" width="80" height="24" rx="8" fill="#15151F" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={176 + i * 16} cy="242" r="4" fill={i === 0 ? color : '#FFFFFF'} fillOpacity={i === 0 ? 1 : 0.2} />
      ))}
    </Box>
  )
}
