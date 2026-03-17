import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { useLearningDetail } from '@/hooks/use-learning-detail'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function formatDateLong(dateString: string) {
  if (!dateString) return ''
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

export default function DetalheAprendizado() {
  const { id } = useParams<{ id: string }>()
  const { data: ap, loading, error, refetch } = useLearningDetail(id)

  if (loading) {
    return (
      <div className="max-w-[680px] mx-auto animate-fade-in font-mono">
        <Skeleton className="h-4 w-32 mb-8" />
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-5 w-8" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-4 w-48 mb-8" />
        <div className="space-y-8">
          <div>
            <Skeleton className="h-4 w-48 mb-3" />
            <Skeleton className="h-24 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-48 mb-3" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-[680px] mx-auto text-center py-12 font-mono animate-fade-in-up">
        <p className="text-destructive mb-4">Não foi possível carregar o aprendizado.</p>
        <Button onClick={refetch} variant="outline" className="font-mono">
          <RefreshCw className="w-4 h-4 mr-2" />
          Tentar novamente
        </Button>
      </div>
    )
  }

  if (!ap) {
    return (
      <div className="max-w-[680px] mx-auto text-center py-12 font-mono animate-fade-in-up">
        <p className="text-muted-foreground mb-6">Aprendizado não encontrado.</p>
        <Link to="/">
          <Button variant="outline" className="font-mono">
            Voltar para lista
          </Button>
        </Link>
      </div>
    )
  }

  const getLevelColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case 'iniciante':
        return 'bg-[#d1fae5] text-[#065f46] dark:bg-[#064e3b] dark:text-[#a7f3d0]'
      case 'intermediario':
      case 'intermediário':
        return 'bg-[#fef3c7] text-[#92400e] dark:bg-[#78350f] dark:text-[#fde68a]'
      case 'avancado':
      case 'avançado':
        return 'bg-[#fee2e2] text-[#991b1b] dark:bg-[#7f1d1d] dark:text-[#fecaca]'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const Section = ({ title, content }: { title: string; content?: string | null }) =>
    content ? (
      <section>
        <h2 className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-muted-foreground mb-[10px]">
          {title}
        </h2>
        <div className="text-[0.875rem] leading-[1.85] text-foreground whitespace-pre-line">
          {content}
        </div>
      </section>
    ) : null

  return (
    <div className="max-w-[680px] mx-auto animate-fade-in font-mono pb-12">
      <Link
        to="/"
        className="inline-flex items-center text-[0.75rem] tracking-[0.02em] text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline"
      >
        <ArrowLeft className="w-3 h-3 mr-1.5" /> Voltar para lista
      </Link>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {ap.number != null && (
          <span className="bg-muted text-muted-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]">
            #{ap.number}
          </span>
        )}
        {ap.categoria && (
          <span className="bg-accent text-accent-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]">
            {ap.categoria}
          </span>
        )}
        {ap.level && (
          <span
            className={cn(
              'text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]',
              getLevelColor(ap.level),
            )}
          >
            {ap.level}
          </span>
        )}
      </div>

      <h1 className="text-[1.625rem] font-bold tracking-[-0.02em] leading-[1.3] text-foreground mb-3">
        {ap.titulo}
      </h1>

      <div className="flex items-center gap-[12px] text-[0.75rem] text-muted-foreground">
        <span>{ap.author || 'Autor desconhecido'}</span>
        <span>&bull;</span>
        <span>{formatDateLong(ap.created_at)}</span>
      </div>

      <hr className="border-t border-border mt-[16px] mb-[28px]" />

      <div className="space-y-[32px]">
        <Section title="Contexto / Problema que Resolve" content={ap.context} />
        <Section title="O Aprendizado" content={ap.conteudo} />
        <Section title="Passo a Passo" content={ap.steps} />
        <Section title="Observações / Dicas Extras" content={ap.observations} />
      </div>

      <div className="mt-[44px]">
        <Link to="/">
          <Button
            variant="ghost"
            className="text-[0.8125rem] text-muted-foreground font-mono hover:bg-muted/50 h-auto py-2 px-3 -ml-3"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Voltar para lista
          </Button>
        </Link>
      </div>
    </div>
  )
}
