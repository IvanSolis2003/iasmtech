'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { type Category, type Project } from '@/types'

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'WEB', label: 'Web' },
  { value: 'ECOMMERCE', label: 'E-commerce' },
  { value: 'APP_MOVIL', label: 'App Móvil' },
  { value: 'SISTEMA', label: 'Sistema' },
  { value: 'AUTOMATIZACION', label: 'Automatización' },
]

interface ProjectFormProps {
  project?: Project
}

export default function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter()
  const isEdit = !!project

  const [form, setForm] = useState({
    title: project?.title ?? '',
    description: project?.description ?? '',
    longDesc: project?.longDesc ?? '',
    techStack: project?.techStack.join(', ') ?? '',
    imageUrl: project?.imageUrl ?? '',
    projectUrl: project?.projectUrl ?? '',
    githubUrl: project?.githubUrl ?? '',
    category: project?.category ?? 'WEB' as Category,
    featured: project?.featured ?? false,
    testUser: project?.testUser ?? '',
    testPassword: project?.testPassword ?? '',
    testRole: project?.testRole ?? '',
    order: project?.order ?? 0,
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const body = {
      ...form,
      techStack: form.techStack.split(',').map((t) => t.trim()).filter(Boolean),
      order: Number(form.order),
    }

    const url = isEdit ? `/api/admin/projects/${project.id}` : '/api/admin/projects'
    const method = isEdit ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) throw new Error('Error al guardar')

      router.push('/admin/projects')
      router.refresh()
    } catch {
      setStatus('error')
      setError('Error al guardar el proyecto')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {status === 'error' && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField fullWidth label="Título" required value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Descripción corta" required multiline rows={2}
            value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Descripción larga (opcional)" multiline rows={4}
            value={form.longDesc} onChange={(e) => setForm({ ...form, longDesc: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Stack tecnológico (separado por comas)"
            helperText="Ej: Next.js, TypeScript, PostgreSQL"
            required value={form.techStack} onChange={(e) => setForm({ ...form, techStack: e.target.value })} sx={{ mb: 3 }} />

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
            Credenciales de prueba (opcional)
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <TextField fullWidth label="Usuario" value={form.testUser}
              helperText="Se muestran en la tarjeta del proyecto"
              onChange={(e) => setForm({ ...form, testUser: e.target.value })} />
            <TextField fullWidth label="Contraseña" value={form.testPassword}
              onChange={(e) => setForm({ ...form, testPassword: e.target.value })} />
            <TextField fullWidth label="Rol" value={form.testRole}
              helperText="Ej: Administrador"
              onChange={(e) => setForm({ ...form, testRole: e.target.value })} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Categoría</InputLabel>
            <Select value={form.category} label="Categoría"
              onChange={(e) => setForm({ ...form, category: e.target.value as Category })}>
              {CATEGORIES.map((c) => <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>)}
            </Select>
          </FormControl>

          <TextField fullWidth label="URL del proyecto" value={form.projectUrl}
            onChange={(e) => setForm({ ...form, projectUrl: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="URL de GitHub" value={form.githubUrl}
            onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="URL imagen (Cloudinary)" value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Orden" type="number" value={form.order}
            onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} sx={{ mb: 2 }} />

          <FormControlLabel
            control={<Switch checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />}
            label={<Typography variant="body2">Destacado en portafolio</Typography>}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" disabled={status === 'loading'}
              endIcon={status === 'loading' ? <CircularProgress size={16} color="inherit" /> : null}>
              {status === 'loading' ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear proyecto'}
            </Button>
            <Button variant="outlined" href="/admin/projects"
              sx={{ borderColor: 'rgba(41,121,255,0.3)' }}>
              Cancelar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
