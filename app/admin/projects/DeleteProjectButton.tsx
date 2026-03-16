'use client'

import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRouter } from 'next/navigation'

export default function DeleteProjectButton({ id }: { id: string }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' })
    setOpen(false)
    router.refresh()
  }

  return (
    <>
      <IconButton size="small" onClick={() => setOpen(true)} sx={{ color: 'error.main' }}>
        <DeleteIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Eliminar proyecto</DialogTitle>
        <DialogContent>
          <DialogContentText>Esta acción no se puede deshacer. ¿Confirmas?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>Cancelar</Button>
          <Button onClick={handleDelete} color="error" variant="contained" disabled={loading}>
            {loading ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
