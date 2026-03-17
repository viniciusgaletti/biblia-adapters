import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function EditLearning() {
  const { id } = useParams()

  return (
    <div className="p-8 max-w-5xl mx-auto font-sans animate-fade-in-up">
      <Link
        to="/admin"
        className="inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
        Voltar para o Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Editar Aprendizado</h1>
      <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <p className="text-muted-foreground">
          Interface de edição para o aprendizado com ID:{' '}
          <span className="font-mono text-foreground">{id}</span>
        </p>
      </div>
    </div>
  )
}
