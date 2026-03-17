import { Link } from 'react-router-dom'
import { useAdminAuth } from '@/hooks/use-admin-auth'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  const { signOut } = useAdminAuth()

  return (
    <div className="p-8 max-w-5xl mx-auto font-sans animate-fade-in-up">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Admin Dashboard</h1>
        <Button variant="outline" onClick={signOut}>
          Sair
        </Button>
      </div>
      <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <p className="text-muted-foreground mb-4">Bem-vindo ao painel de administração.</p>
        <Link
          to="/admin/editar/exemplo-id"
          className="text-primary text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Ir para Exemplo de Edição de Aprendizado
        </Link>
      </div>
    </div>
  )
}
