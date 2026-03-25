'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SendIcon from '@mui/icons-material/Send'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions = [
  { value: 'Sitio Web', label: 'Sitio Web' },
  { value: 'Tienda Online', label: 'Tienda Online' },
  { value: 'App Móvil', label: 'App Móvil' },
  { value: 'Sistema a Medida', label: 'Sistema a Medida' },
  { value: 'Automatización', label: 'Automatización' },
  { value: 'Otro', label: 'Otro' },
]

const contactInfo = [
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '+56 9 9045 7931',
    href: 'https://wa.me/56990457931',
    color: '#4caf50',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'contacto@iasmtech.com',
    href: 'mailto:contacto@iasmtech.com',
    color: '#2979FF',
  },
  {
    icon: <EmailIcon />,
    label: 'Email personal',
    value: 'ivanss@iasmtech.com',
    href: 'mailto:ivanss@iasmtech.com',
    color: '#2979FF',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Ubicación',
    value: 'Talca, Chile',
    href: null,
    color: '#00E5FF',
  },
]

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ''

const initialForm = { name: '', email: '', phone: '', service: 'Sitio Web', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <Box
      component="section"
      id="contacto"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#0A0D18',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AnimatedBackground orbs={[
        { top: '-20%', right: '-10%', size: 500, color: 'rgba(0,229,255,0.13)', duration: 11 },
        { bottom: '-20%', left: '-8%', size: 400, color: 'rgba(41,121,255,0.14)', duration: 9, delay: 4 },
      ]} gridOpacity={0.04} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3 }}>
            Contacto
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Hablemos de tu proyecto
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: 'auto' }}>
            Cuéntame en qué puedo ayudarte. Respondo en menos de 24 horas.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info) => (
                <Box key={info.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: `${info.color}15`,
                      border: `1px solid ${info.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: info.color,
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {info.label}
                    </Typography>
                    {info.href ? (
                      <Typography
                        component="a"
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {info.value}
                      </Typography>
                    ) : (
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{info.value}</Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid rgba(41, 121, 255, 0.15)',
                borderRadius: 3,
                p: { xs: 3, md: 4 },
              }}
            >
              {status === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  ¡Mensaje enviado! Te contactaré pronto.
                </Alert>
              )}
              {status === 'error' && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  Error al enviar el mensaje. Inténtalo de nuevo.
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Nombre" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    disabled={status === 'loading'} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Email" type="email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    disabled={status === 'loading'} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth label="Teléfono (opcional)" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    disabled={status === 'loading'} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Tipo de servicio</InputLabel>
                    <Select value={form.service} label="Tipo de servicio"
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      disabled={status === 'loading'}>
                      {serviceOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Mensaje" multiline rows={4} required
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    disabled={status === 'loading'} inputProps={{ minLength: 10 }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button type="submit" variant="contained" size="large" fullWidth
                    disabled={status === 'loading'}
                    endIcon={status === 'loading' ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    sx={{ py: 1.5, boxShadow: '0 0 20px rgba(41, 121, 255, 0.3)' }}>
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
