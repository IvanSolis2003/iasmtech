import Box from '@mui/material/Box'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AdminSidebar />
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: '240px',
          p: { xs: 2, md: 4 },
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
