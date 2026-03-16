'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { type BlogPost } from '@/types'

interface BlogPostFormProps {
  post?: BlogPost
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter()
  const isEdit = !!post

  const [form, setForm] = useState({
    title: post?.title ?? '',
    slug: post?.slug ?? '',
    excerpt: post?.excerpt ?? '',
    content: post?.content ?? '',
    imageUrl: post?.imageUrl ?? '',
    published: post?.published ?? false,
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: isEdit ? prev.slug : slugify(title),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const url = isEdit ? `/api/admin/blog/${post.id}` : '/api/admin/blog'
    const method = isEdit ? 'PUT' : 'POST'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Error al guardar')
      }

      router.push('/admin/blog')
      router.refresh()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Error inesperado')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {status === 'error' && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TextField fullWidth label="Título" required value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)} sx={{ mb: 3 }} />
          <TextField fullWidth label="Slug (URL)" required value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            helperText={`/blog/${form.slug}`} sx={{ mb: 3 }} />
          <TextField fullWidth label="Extracto / Resumen" required multiline rows={2}
            value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Contenido" required multiline rows={12}
            value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
            helperText="Soporta texto plano o Markdown" />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <TextField fullWidth label="URL imagen (Cloudinary)" value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} sx={{ mb: 3 }} />

          <FormControlLabel
            control={<Switch checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />}
            label={<Typography variant="body2">{form.published ? 'Publicado' : 'Borrador'}</Typography>}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" disabled={status === 'loading'}
              endIcon={status === 'loading' ? <CircularProgress size={16} color="inherit" /> : null}>
              {status === 'loading' ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear post'}
            </Button>
            <Button variant="outlined" href="/admin/blog" sx={{ borderColor: 'rgba(41,121,255,0.3)' }}>
              Cancelar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
