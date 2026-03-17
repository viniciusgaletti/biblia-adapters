import { Link } from 'react-router-dom'
import { Plus, Search, BookX, AlertCircle, X } from 'lucide-react'
import { useLearnings, CATEGORIES, LEVELS } from '@/hooks/use-learnings'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
    clearFilters,
    refetch,
    hasActiveFilters,
    totalCount,
  } = useLearnings()

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Biblia dos Eliters</h1>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Repositorio vivo de aprendizados sobre IA, Vibecoding, Automacoes e Agentes de IA
          </p>
        </div>
        <Link to="/novo" className="w-full sm:w-auto shrink-0">
          <Button className="w-full shadow-sm transition-transform active:scale-95 group">
            <Plus className="w-5 h-5 mr-2 transition-transform group-hover:rotate-90" />
            Registrar Aprendizado
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[160px] bg-card">
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
            <SelectTrigger className="w-full sm:w-[160px] bg-card">
              <SelectValue placeholder="Dificuldade" />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((lvl) => (
                <SelectItem key={lvl} value={lvl}>
                  {lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="px-3 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-2" />
              Limpar filtros
            </Button>
          )}
        </div>
      </div>

      <div className="text-sm text-muted-foreground font-medium">
        {totalCount} {totalCount === 1 ? 'aprendizado encontrado' : 'aprendizados encontrados'}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="flex flex-col h-[280px]">
              <CardHeader className="pb-3">
                <div className="flex gap-2 mb-2">
                  <Skeleton className="h-5 w-10" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardHeader>
              <CardContent className="flex-1">
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center border-destructive/20 bg-destructive/5">
          <AlertCircle className="w-12 h-12 text-destructive mb-4" />
          <h3 className="text-xl font-semibold mb-2">Algo deu errado</h3>
          <p className="text-muted-foreground mb-6">Nao foi possivel carregar os aprendizados.</p>
          <Button
            onClick={refetch}
            variant="outline"
            className="border-destructive/20 text-destructive hover:bg-destructive/10"
          >
            Tentar novamente
          </Button>
        </Card>
      ) : data.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center border-dashed bg-card/50">
          <BookX className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nenhum aprendizado encontrado</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Não encontramos nenhum resultado com os filtros atuais. Que tal registrar um novo
            aprendizado?
          </p>
          <Link to="/novo">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Registrar Aprendizado
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col h-full hover:shadow-md transition-all hover:border-primary/50 group"
            >
              <CardHeader className="pb-3">
                <div className="flex gap-2 mb-3 flex-wrap">
                  <Badge variant="secondary" className="bg-secondary/50">
                    #{item.number}
                  </Badge>
                  <Badge variant="outline">{item.category}</Badge>
                  <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                    {item.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground mt-2">
                  {item.author} • {item.date}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">{item.learning}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link to={`/aprendizado/${item.id}`} className="w-full">
                  <Button variant="secondary" className="w-full bg-secondary/30 hover:bg-secondary">
                    Ver aprendizado completo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
