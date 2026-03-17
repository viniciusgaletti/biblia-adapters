import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw, Star } from 'lucide-react'
import { useLearningDetail } from '@/hooks/use-learning-detail'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { submitRating } from '@/services/learnings'
import { toast } from 'sonner'

function formatDateLong(dateString: string) {
  if (!dateString) return ''
  const d = dateString.includes('T') ? new Date(dateString) : new Date(dateString + 'T12:00:00Z')
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

export default function DetalheAprendizado() {
  const { id } = useParams<{ id: string }>()
  const { data: ap, loading, error, refetch } = useLearningDetail(id)

  const [userRating, setUserRating] = useState<number>(0)
  const [ratingId, setRatingId] = useState<string | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoverRating, setHoverRating] = useState(0)

  useEffect(() => {
    if (ap?.title) {
      document.title = `${ap.title} | Biblia dos Adapters`
    } else if (!loading) {
      document.title = 'Detalhe do Aprendizado | Biblia dos Adapters'
    }

    if (ap) {
      const stored = localStorage.getItem(`rating_${ap.id}`)
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          setUserRating(parsed.rating)
          setRatingId(parsed.id)
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }, [ap, loading])

  const handleRate = async (value: number) => {
    if (!ap || isSubmitting) return
    try {
      setIsSubmitting(true)
      const result = await submitRating(ap.id, value, ratingId)
      setUserRating(value)
      setRatingId(result.id)
      localStorage.setItem(`rating_${ap.id}`, JSON.stringify({ rating: value, id: result.id }))
      toast.success('Avaliação enviada com sucesso!')
      refetch()
    } catch (err) {
      console.error(err)
      toast.error('Erro ao enviar avaliação. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-[680px] mx-auto animate-fade-in font-sans" aria-busy="true">
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
      <div className="max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up">
        <p className="text-destructive mb-4" role="alert">
          Não foi possível carregar o aprendizado.
        </p>
        <Button onClick={refetch} variant="outline" className="font-sans">
          <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
          Tentar novamente
        </Button>
      </div>
    )
  }

  if (!ap) {
    return (
      <div className="max-w-[680px] mx-auto text-center py-12 font-sans animate-fade-in-up">
        <p className="text-muted-foreground mb-6" role="alert">
          Aprendizado não encontrado.
        </p>
        <Link to="/">
          <Button variant="outline" className="font-sans">
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
    <article className="max-w-[680px] mx-auto animate-fade-in font-sans pb-12">
      <Link
        to="/"
        className="inline-flex items-center text-[0.75rem] tracking-[0.02em] text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
      >
        <ArrowLeft className="w-3 h-3 mr-1.5" aria-hidden="true" /> Voltar para lista
      </Link>

      <header>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {ap.number != null && (
            <span className="bg-muted text-muted-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]">
              #{ap.number}
            </span>
          )}
          {ap.category && (
            <span className="bg-accent text-accent-foreground text-[0.6875rem] font-bold py-[2px] px-[7px] rounded-[3px]">
              {ap.category}
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
          {ap.title}
        </h1>

        <div className="flex items-center gap-[12px] text-[0.75rem] text-muted-foreground">
          <span>{ap.author || 'Autor desconhecido'}</span>
          <span aria-hidden="true">&bull;</span>
          <span>{formatDateLong(ap.date)}</span>
        </div>
      </header>

      <hr className="border-t border-border mt-[16px] mb-[28px]" />

      <div className="space-y-[32px]">
        <Section title="Contexto / Problema que Resolve" content={ap.context} />
        <Section title="O Aprendizado" content={ap.learning} />
        <Section title="Passo a Passo" content={ap.steps} />
        <Section title="Observações / Dicas Extras" content={ap.observations} />
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-sm font-bold text-foreground mb-4">Avalie este aprendizado</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                disabled={isSubmitting}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRate(star)}
                className="p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors"
                aria-label={`Avaliar com ${star} estrelas`}
              >
                <Star
                  className={cn(
                    'w-6 h-6 transition-all',
                    (hoverRating || userRating) >= star
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground/30 hover:text-muted-foreground',
                  )}
                />
              </button>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            {ap.rating_avg && ap.rating_count ? (
              <span>
                <strong className="text-foreground">{Number(ap.rating_avg).toFixed(1)}</strong> / 5
                ({ap.rating_count} {ap.rating_count === 1 ? 'avaliação' : 'avaliações'})
              </span>
            ) : (
              <span>Seja o primeiro a avaliar!</span>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-[44px]">
        <Link to="/" tabIndex={-1}>
          <Button
            variant="ghost"
            className="text-[0.8125rem] text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3 -ml-3"
          >
            <ArrowLeft className="w-3 h-3 mr-2" aria-hidden="true" /> Voltar para lista
          </Button>
        </Link>
      </footer>
    </article>
  )
}
