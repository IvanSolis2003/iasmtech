import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'iasmtech — Soluciones Digitales para tu Negocio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0F',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(41,121,255,0.18) 0%, transparent 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: 'rgba(41,121,255,0.15)',
              border: '2px solid rgba(41,121,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
            }}
          >
            {'</>'}
          </div>
          <span style={{ color: '#F0F0F0', fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            iasm<span style={{ color: '#2979FF' }}>tech</span>
          </span>
        </div>

        <div
          style={{
            color: '#F0F0F0',
            fontSize: 56,
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Tu negocio merece tecnología de verdad
        </div>

        <div
          style={{
            color: '#9E9E9E',
            fontSize: 26,
            textAlign: 'center',
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          Desarrollo web, apps y automatización a medida
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['Next.js', 'React', 'TypeScript', 'Node.js', 'React Native'].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: 'rgba(41,121,255,0.12)',
                border: '1px solid rgba(41,121,255,0.3)',
                borderRadius: 8,
                padding: '8px 16px',
                color: '#75A7FF',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: '#9E9E9E',
            fontSize: 18,
          }}
        >
          iasmtech.cl · Iván Solís · Full Stack Developer
        </div>
      </div>
    ),
    { ...size },
  )
}
