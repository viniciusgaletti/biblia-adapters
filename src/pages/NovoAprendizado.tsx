import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { createAprendizado } from '@/services/aprendizados'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'

export default function NovoAprendizado() {
  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!titulo.trim() || !conteudo.trim()) return

    setIsSubmitting(true)
    try {
      await createAprendizado({
        titulo: titulo.trim(),
        conteudo: conteudo.trim(),
        categoria: categoria.trim() || null,
      })
      toast({
        title: 'Sucesso!',
        description: 'Aprendizado registrado na sua bíblia.',
      })
      navigate('/')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar',
        description: 'Tente novamente mais tarde.',
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <div className="mb-6 flex items-center gap-4">
        <Link to="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Novo Aprendizado</h1>
          <p className="text-muted-foreground">O que você descobriu hoje?</p>
        </div>
      </div>

      <Card className="border-border shadow-sm">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="titulo" className="text-base font-medium">
                Título
              </Label>
              <Input
                id="titulo"
                placeholder="Ex: Como centralizar uma div"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                className="text-lg py-6"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria" className="text-base font-medium">
                Categoria (Opcional)
              </Label>
              <Input
                id="categoria"
                placeholder="Ex: CSS, Filosofia, Finanças..."
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conteudo" className="text-base font-medium">
                Conteúdo
              </Label>
              <Textarea
                id="conteudo"
                placeholder="Descreva detalhadamente o que você aprendeu..."
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                required
                className="min-h-[300px] resize-y text-base p-4"
              />
            </div>
          </CardContent>
          <div className="flex items-center justify-end gap-3 p-6 pt-0 border-t border-border mt-6">
            <Link to="/">
              <Button type="button" variant="ghost">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" disabled={isSubmitting || !titulo.trim() || !conteudo.trim()}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
