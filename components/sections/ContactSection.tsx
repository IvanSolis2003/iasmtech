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
import { type ContactFormData, type ServiceType } from '@/types'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions: { value: ServiceType; label: string }[] = [
  { value: 'SITIO_WEB', label: 'Sitio Web' },
  { value: 'ECOMMERCE', label: 'Tienda Online' },
  { value: 'APP_MOVIL', label: 'App Móvil' },
  { value: 'SISTEMA_MEDIDA', label: 'Sistema a Medida' },
  { value: 'AUTOMATIZACION', label: 'Automatización' },
  { value: 'OTRO', label: 'Otro' },
]

const contactInfo = [
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '+56 9 1234 5678',
    href: 'https://wa.me/56912345678',
    color: '#4caf50',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'contacto@iasmtech.cl',
    href: 'mailto:contacto@iasmtech.cl',
    color: '#2979FF',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Ubicación',
    value: 'Talca, Región del Maule, Chile',
    href: null,
    color: '#00E5FF',
  },
]

const initialForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  serviceType: 'SITIO_WEB',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? 'Error al enviar el mensaje')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error inesperado')
    }
  }

  return (
    <Box
      component="section"
      id="contacto"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)',
      }}
    >
      <Container maxWidth="lg">
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
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {info.value}
                      </Typography>
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
                  {errorMsg}
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Teléfono (opcional)"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    disabled={status === 'loading'}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth required>
                    <InputLabel>Tipo de servicio</InputLabel>
                    <Select
                      value={form.serviceType}
                      label="Tipo de servicio"
                      onChange={(e) => handleChange('serviceType', e.target.value)}
                      disabled={status === 'loading'}
                    >
                      {serviceOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Mensaje"
                    multiline
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    disabled={status === 'loading'}
                    inputProps={{ minLength: 10 }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={status === 'loading'}
                    endIcon={status === 'loading' ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    sx={{ py: 1.5, boxShadow: '0 0 20px rgba(41, 121, 255, 0.3)' }}
                  >
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
