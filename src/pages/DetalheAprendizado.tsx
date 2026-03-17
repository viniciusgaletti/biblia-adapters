import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, Trash2, Loader2 } from 'lucide-react'
import { getAprendizado, deleteAprendizado } from '@/services/aprendizados'
import { Aprendizado } from '@/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/hooks/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function DetalheAprendizado() {
  const { id } = useParams<{ id: string }>()
  const [aprendizado, setAprendizado] = useState<Aprendizado | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    if (!id) return

    const fetchDados = async () => {
      try {
        const data = await getAprendizado(id)
        setAprendizado(data)
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Erro ao carregar',
          description: 'Aprendizado não encontrado.',
        })
        navigate('/')
      } finally {
        setLoading(false)
      }
    }

    fetchDados()
  }, [id, navigate, toast])

  const handleDelete = async () => {
    if (!id) return
    setIsDeleting(true)
    try {
      await deleteAprendizado(id)
      toast({ title: 'Aprendizado excluído.' })
      navigate('/')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao excluir',
        description: 'Não foi possível excluir o aprendizado.',
      })
      setIsDeleting(false)
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <Skeleton className="h-10 w-24 mb-8" />
        <Skeleton className="h-12 w-3/4" />
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (!aprendizado) return null

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8 flex items-center justify-between">
        <Link to="/">
          <Button variant="ghost" className="hover:bg-accent -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. O aprendizado será permanentemente removido da sua
                bíblia.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <article className="prose prose-stone dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground leading-tight">
          {aprendizado.titulo}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(aprendizado.created_at)}
          </div>
          {aprendizado.categoria && (
            <Badge variant="secondary" className="font-normal text-sm">
              <Tag className="w-3 h-3 mr-1.5" />
              {aprendizado.categoria}
            </Badge>
          )}
        </div>

        <div className="whitespace-pre-wrap text-foreground leading-relaxed text-lg">
          {aprendizado.conteudo}
        </div>
      </article>
    </div>
  )
}
