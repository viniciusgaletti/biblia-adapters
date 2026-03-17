import { Navigate, Outlet } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useAdminAuth } from '@/hooks/use-admin-auth'

export default function AdminRoute() {
  const { session, loading } = useAdminAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}
