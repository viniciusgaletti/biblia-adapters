import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MapPinOff } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in-up">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
        <MapPinOff className="w-10 h-10 text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-bold mb-3 text-foreground tracking-tight">
        Página não encontrada
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Parece que você tentou acessar um conhecimento que ainda não foi registrado na sua Bíblia.
      </p>
      <Link to="/">
        <Button size="lg">Retornar ao Início</Button>
      </Link>
    </div>
  )
}

export default NotFound
