import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/hooks/use-theme'
import { AuthProvider } from '@/hooks/use-auth'
import { ProtectedRoute } from '@/components/ProtectedRoute'

import Layout from '@/components/Layout'
import NotFound from '@/pages/NotFound'

// Lazy load pages for performance
const Index = lazy(() => import('@/pages/Index'))
const Login = lazy(() => import('@/pages/Login'))
const NovoAprendizado = lazy(() => import('@/pages/NovoAprendizado'))
const DetalheAprendizado = lazy(() => import('@/pages/DetalheAprendizado'))

const App = () => (
  <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/novo" element={<NovoAprendizado />} />
                <Route path="/aprendizado/:id" element={<DetalheAprendizado />} />
              </Route>
            </Route>

            <Route path="*" element={<Layout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
