import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Calendar, Tag, BookX } from 'lucide-react'
import { getAprendizados } from '@/services/aprendizados'
import { Aprendizado } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/hooks/use-toast'

export default function Index() {
  const [aprendizados, setAprendizados] = useState<Aprendizado[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchAprendizados = async () => {
      try {
        const data = await getAprendizados()
        setAprendizados(data)
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Erro ao carregar',
          description: 'Não foi possível carregar seus aprendizados.',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchAprendizados()
  }, [toast])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lista de Aprendizados</h1>
          <p className="text-muted-foreground mt-1">Sua jornada de conhecimento documentada.</p>
        </div>
        <Link to="/novo">
          <Button className="shadow-sm transition-transform active:scale-95 group">
            <Plus className="w-5 h-5 mr-2 transition-transform group-hover:rotate-90" />
            Novo Aprendizado
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden border-border">
              <CardHeader className="pb-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/3" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : aprendizados.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-12 text-center mt-8 border-dashed bg-card/50">
          <BookX className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nenhum aprendizado encontrado</h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Você ainda não registrou nada. Comece a construir sua bíblia anotando o que você
            aprendeu hoje!
          </p>
          <Link to="/novo">
            <Button variant="outline">Comece a escrever</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {aprendizados.map((item) => (
            <Link key={item.id} to={`/aprendizado/${item.id}`} className="group block h-full">
              <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                      {item.titulo}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(item.created_at)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.conteudo}</p>
                  {item.categoria && (
                    <Badge
                      variant="secondary"
                      className="font-normal text-xs flex items-center w-fit"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {item.categoria}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
