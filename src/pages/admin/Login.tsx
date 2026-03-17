import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'
import { useAdminAuth } from '@/hooks/use-admin-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdminLogin() {
  const navigate = useNavigate()
  const { session, loading: authLoading } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!authLoading && session) {
      navigate('/admin', { replace: true })
    }
  }, [session, authLoading, navigate])

  if (authLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError('E-mail ou senha incorretos. Tente novamente.')
      setLoading(false)
    } else {
      navigate('/admin')
    }
  }

  return (
    <div className="flex justify-center items-start px-4 font-sans bg-background min-h-screen">
      <div className="w-full max-w-[400px] h-fit bg-card border border-border rounded-[calc(var(--radius)*2)] p-[40px] shadow-sm animate-fade-in-up mt-[80px]">
        <div className="text-center mb-[32px]">
          <h1 className="text-[1.125rem] font-bold text-primary mb-[4px]">Biblia dos Eliters</h1>
          <p className="text-[0.75rem] text-muted-foreground tracking-[0.04em] uppercase">
            Acesso restrito
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-[20px]">
          <div className="space-y-[8px] flex flex-col">
            <Label htmlFor="email" className="text-[13px] font-medium text-foreground">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-[8px] flex flex-col">
            <Label htmlFor="password" className="text-[13px] font-medium text-foreground">
              Senha
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          {error && (
            <p className="text-[0.8125rem] font-medium text-destructive mt-[16px] text-center">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-[11px] text-[0.875rem] font-medium h-auto hover:bg-primary/90 transition-colors"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" aria-hidden="true" />
            ) : null}
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </div>
    </div>
  )
}
