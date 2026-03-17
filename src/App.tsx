import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/hooks/use-theme'
import { AuthProvider } from '@/hooks/use-auth'

import Layout from '@/components/Layout'
import NotFound from '@/pages/NotFound'

// Lazy load public pages for performance
const Index = lazy(() => import('@/pages/Index'))
const NovoAprendizado = lazy(() => import('@/pages/NovoAprendizado'))
const DetalheAprendizado = lazy(() => import('@/pages/DetalheAprendizado'))

// Lazy load admin pages and components
const AdminLogin = lazy(() => import('@/pages/admin/Login'))
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'))
const AdminEditLearning = lazy(() => import('@/pages/admin/EditLearning'))
const AdminRoute = lazy(() => import('@/components/AdminRoute'))

const AdminLoader = () => (
  <div className="min-h-screen flex justify-center items-center bg-background">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
)

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Admin Routes */}
            <Route
              path="/admin/login"
              element={
                <Suspense fallback={<AdminLoader />}>
                  <AdminLogin />
                </Suspense>
              }
            />
            <Route
              element={
                <Suspense fallback={<AdminLoader />}>
                  <AdminRoute />
                </Suspense>
              }
            >
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/editar/:id" element={<AdminEditLearning />} />
            </Route>

            {/* Public Layout Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/novo" element={<NovoAprendizado />} />
              <Route path="/aprendizado/:id" element={<DetalheAprendizado />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
