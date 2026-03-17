import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookOpen, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, signUp, user } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  if (user) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = isSignUp ? await signUp(email, password) : await signIn(email, password)

      if (error) throw error

      if (isSignUp) {
        toast({
          title: 'Conta criada com sucesso',
          description: 'Você já pode acessar seus aprendizados.',
        })
      }
      navigate('/')
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Erro na autenticação',
        description: err.message || 'Verifique suas credenciais e tente novamente.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 animate-fade-in-up">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Bíblia dos Eliters</h1>
        <p className="text-muted-foreground mt-2 text-center max-w-sm">
          Seu repositório pessoal de conhecimento e evolução contínua.
        </p>
      </div>

      <Card className="w-full max-w-md shadow-elevation border-border">
        <CardHeader>
          <CardTitle>{isSignUp ? 'Criar Conta' : 'Acessar'}</CardTitle>
          <CardDescription>
            {isSignUp
              ? 'Preencha os dados abaixo para criar sua bíblia.'
              : 'Entre com seu e-mail e senha para continuar.'}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSignUp ? 'Cadastrar' : 'Entrar'}
            </Button>
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-primary hover:underline"
            >
              {isSignUp ? 'Já tem uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}
            </button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
