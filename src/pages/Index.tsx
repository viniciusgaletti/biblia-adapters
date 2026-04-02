import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, BookX, AlertCircle, X, ArrowRight } from 'lucide-react'
import { useLearnings, CATEGORIES, LEVELS } from '@/hooks/use-learnings'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { StarRating } from '@/components/ui/star-rating'
import { cn } from '@/lib/utils'

const getLevelColors = (level: string) => {
  switch (level.toLowerCase()) {
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

export default function Index() {
  const {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    levelFilter,
    setLevelFilter,
    sortBy,
    setSortBy,
    clearFilters,
    refetch,
    hasActiveFilters,
    totalCount,
  } = useLearnings()

  useEffect(() => {
    document.title = 'Biblia dos Adapters'
  }, [])

  return (
    <div className="w-full animate-fade-in-up pb-8">
      {/* Section 1: Page Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[36px] gap-4">
        <div>
          <h1 className="text-[1.875rem] font-bold text-foreground tracking-[-0.02em]">
            Biblia dos Renata
          </h1>
          <p className="text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6]">
            Repositório vivo de aprendizados sobre IA, Vibecoding, Automações e Agentes de IA
          </p>
        </div>
        <Link to="/novo" className="w-full md:w-auto shrink-0">
          <Button className="w-full bg-primary text-primary-foreground rounded-[var(--radius)] px-[18px] py-[10px] text-[0.8125rem] font-medium hover:opacity-90 transition-opacity h-auto">
            <Plus className="w-4 h-4 mr-2" />
            Registrar Aprendizado
          </Button>
        </Link>
      </section>

      {/* Section 2: Search and Filter Bar */}
      <section className="mb-[14px]">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[8px] sm:gap-[10px]">
          <div className="relative flex-1 h-[40px] w-full">
            <Search
              className="absolute left-[14px] top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              aria-label="Buscar aprendizados"
              placeholder="Buscar por palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full pl-[38px] pr-[14px]"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger
              aria-label="Filtrar por categoria"
              className="h-[40px] w-full sm:w-[148px] shrink-0 px-[14px]"
            >
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger
              aria-label="Filtrar por dificuldade"
              className="h-[40px] w-full sm:w-[148px] shrink-0 px-[14px]"
            >
              <SelectValue placeholder="Dificuldade" />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl === 'Intermediario'
                    ? 'Intermediário'
                    : lvl === 'Avancado'
                      ? 'Avançado'
                      : lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <label htmlFor="sort-select" className="sr-only">
            Ordenar por
          </label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger
              id="sort-select"
              className="h-[40px] w-full sm:w-[160px] shrink-0 px-[14px]"
            >
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recentes">Mais recentes</SelectItem>
              <SelectItem value="relevancia">Mais relevantes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {hasActiveFilters && (
          <div className="flex justify-end mt-[8px]">
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="h-[40px] px-[14px] text-[0.8125rem] text-muted-foreground hover:text-foreground hover:bg-transparent"
              aria-label="Limpar filtros"
            >
              <X className="h-4 w-4 mr-2" aria-hidden="true" />
              Limpar
            </Button>
          </div>
        )}
      </section>

      {/* Section 3: Results Counter */}
      <section
        className="text-[0.75rem] text-muted-foreground tracking-[0.03em] mb-[20px]"
        aria-live="polite"
      >
        {totalCount} {totalCount === 1 ? 'aprendizado encontrado' : 'aprendizados encontrados'}
      </section>

      {/* States and Grid */}
      {loading ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]" aria-busy="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[20px] flex flex-col min-h-[260px]"
            >
              <div className="flex gap-[6px] mb-[14px]">
                <Skeleton className="h-[20px] w-[30px] rounded-[3px]" />
                <Skeleton className="h-[20px] w-[80px] rounded-[3px]" />
                <Skeleton className="h-[20px] w-[70px] rounded-[3px]" />
              </div>
              <Skeleton className="h-[1.4rem] w-[60%] mb-[6px]" />
              <div className="flex justify-between items-center mb-[10px]">
                <Skeleton className="h-[12px] w-[30%]" />
                <Skeleton className="h-[12px] w-[20%]" />
              </div>
              <div className="space-y-[8px] mt-[10px] flex-1">
                <Skeleton className="h-[12px] w-full" />
                <Skeleton className="h-[12px] w-[95%]" />
                <Skeleton className="h-[12px] w-[80%]" />
              </div>
              <div className="mt-[12px] pt-[12px] border-t border-border">
                <Skeleton className="h-[14px] w-[120px] rounded-[4px]" />
              </div>
            </div>
          ))}
        </section>
      ) : error ? (
        <section className="py-[60px] flex flex-col items-center justify-center text-center border border-dashed border-destructive/20 bg-destructive/5 rounded-[calc(var(--radius)*1.5)]">
          <AlertCircle className="w-[44px] h-[44px] text-destructive" aria-hidden="true" />
          <h3 className="text-[1rem] font-semibold mt-[16px] text-foreground">Algo deu errado</h3>
          <p className="text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6] max-w-md px-4">
            Não foi possível carregar os aprendizados.
          </p>
          <Button
            onClick={refetch}
            variant="outline"
            className="mt-[20px] h-auto px-[18px] py-[10px] text-[0.8125rem] font-medium"
          >
            Tentar novamente
          </Button>
        </section>
      ) : data.length === 0 ? (
        <section className="py-[60px] flex flex-col items-center justify-center text-center border border-dashed border-border bg-card/50 rounded-[calc(var(--radius)*1.5)]">
          <BookX className="w-[44px] h-[44px] text-muted-foreground" aria-hidden="true" />
          <h3 className="text-[1rem] font-semibold mt-[16px] text-foreground">
            Nenhum aprendizado encontrado
          </h3>
          <p className="text-[0.8125rem] text-muted-foreground mt-[6px] leading-[1.6] max-w-md px-4">
            Não encontramos nenhum resultado com os filtros atuais. Que tal registrar um novo
            aprendizado?
          </p>
          <Link to="/novo">
            <Button className="mt-[20px] bg-primary text-primary-foreground rounded-[var(--radius)] px-[18px] py-[10px] text-[0.8125rem] font-medium hover:opacity-90 transition-opacity h-auto">
              <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
              Registrar Aprendizado
            </Button>
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
          {data.map((item) => (
            <article
              key={item.id}
              className="bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[20px] hover:border-ring hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-200 ease-in-out flex flex-col focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background min-h-[260px]"
            >
              <div className="flex gap-[6px] items-center flex-wrap">
                <span className="bg-muted text-muted-foreground text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]">
                  #{item.number}
                </span>
                <span className="bg-accent text-accent-foreground text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]">
                  {item.category}
                </span>
                <span
                  className={cn(
                    'text-[0.6875rem] font-bold tracking-[0.04em] rounded-[3px] px-[7px] py-[2px]',
                    getLevelColors(item.level),
                  )}
                >
                  {item.level === 'Intermediario'
                    ? 'Intermediário'
                    : item.level === 'Avancado'
                      ? 'Avançado'
                      : item.level}
                </span>
              </div>
              <h3 className="text-[0.9375rem] font-semibold text-foreground mt-[14px] mb-[6px] leading-[1.4] line-clamp-2">
                <Link
                  to={`/aprendizado/${item.id}`}
                  className="hover:underline focus:outline-none focus:underline"
                >
                  {item.title}
                </Link>
              </h3>
              <div className="text-[0.75rem] text-muted-foreground flex justify-between items-center">
                <span>{item.author}</span>
                <span>{item.date}</span>
              </div>
              <p className="text-[0.8125rem] text-muted-foreground mt-[10px] leading-[1.75] line-clamp-3 flex-1">
                {item.learning}
              </p>

              <div className="mt-[12px] pt-[12px] border-t border-border flex items-center gap-[6px]">
                <StarRating rating={Number(item.rating_avg || 0)} size="sm" />
                {item.rating_count ? (
                  <div className="flex items-center gap-[4px] font-mono">
                    <span className="text-[0.75rem] font-semibold text-foreground">
                      {Number(item.rating_avg).toFixed(1)}
                    </span>
                    <span className="text-[0.75rem] text-muted-foreground">
                      ({item.rating_count})
                    </span>
                  </div>
                ) : (
                  <span className="text-[0.75rem] text-muted-foreground italic font-mono">
                    Sem avaliações ainda
                  </span>
                )}
              </div>

              <Link
                to={`/aprendizado/${item.id}`}
                className="text-primary text-[0.75rem] font-medium mt-[16px] tracking-[0.02em] hover:underline inline-flex items-center w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                aria-label={`Ver aprendizado completo sobre ${item.title}`}
              >
                Ver aprendizado completo <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>
      )}
    </div>
  )
}
