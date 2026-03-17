import { Suspense, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { BookOpen, Loader2 } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { ErrorBoundary } from './ErrorBoundary'
import { useAuth } from '@/hooks/use-auth'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

function AuthForm() {
  const { signIn, signUp } = useAuth()
  const [email, setEmail] = useState('eliter@example.com')
  const [password, setPassword] = useState('SenhaForte123!')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleAuth = async (action: 'signin' | 'signup') => {
    setLoading(true)
    setError('')
    const { error: err } =
      action === 'signin' ? await signIn(email, password) : await signUp(email, password)

    if (err) setError(err.message)
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh] animate-fade-in-up">
      <Card className="w-full max-w-md border-border/50 shadow-elevation">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold tracking-tight">Acesso Restrito</CardTitle>
          <CardDescription>Faça login para acessar a Bíblia dos Eliters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card"
            />
          </div>
          <div className="space-y-2">
            <Label>Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-card"
            />
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 pt-2">
          <Button className="flex-1" onClick={() => handleAuth('signin')} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Entrar'}
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            onClick={() => handleAuth('signup')}
            disabled={loading}
          >
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function Layout() {
  const { user, loading, signOut } = useAuth()

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <BookOpen className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold text-primary tracking-tight hidden sm:inline-block">
                Bíblia dos Eliters
              </span>
            </Link>
            <div className="flex items-center gap-2">
              {user && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => signOut()}
                  className="mr-2 text-muted-foreground hover:text-foreground"
                >
                  Sair
                </Button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8 animate-fade-in">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : !user ? (
            <AuthForm />
          ) : (
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                </div>
              }
            >
              <Outlet />
            </Suspense>
          )}
        </main>
      </div>
    </ErrorBoundary>
  )
}
