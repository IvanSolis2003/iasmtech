'use client'

import { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { useRouter } from 'next/navigation'
import { type ContactStatus } from '@/types'

const STATUS_OPTIONS: ContactStatus[] = ['NUEVO', 'LEIDO', 'RESPONDIDO', 'ARCHIVADO']

export default function MessageStatusUpdater({ id, currentStatus }: { id: string; currentStatus: ContactStatus }) {
  const router = useRouter()
  const [status, setStatus] = useState<ContactStatus>(currentStatus)

  const handleChange = async (newStatus: ContactStatus) => {
    setStatus(newStatus)
    await fetch(`/api/admin/messages/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
    router.refresh()
  }

  return (
    <FormControl size="small">
      <Select value={status} onChange={(e) => handleChange(e.target.value as ContactStatus)} sx={{ fontSize: '0.875rem' }}>
        {STATUS_OPTIONS.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
      </Select>
    </FormControl>
  )
}
