import { Link, useNavigate } from 'react-router-dom'
import { useAdminAuth } from '@/hooks/use-admin-auth'
import { Button } from '@/components/ui/button'
import { useAdminDashboard } from '@/hooks/use-admin-dashboard'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
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
import { Pencil, Trash2, ExternalLink, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function AdminDashboard() {
  const { signOut } = useAdminAuth()
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const {
    learnings,
    filteredLearnings,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    level,
    setLevel,
    deleteLearning,
    fetchLearnings,
  } = useAdminDashboard()

  const CATEGORIES = ['Todos', 'IA', 'Vibecoding', 'Automacoes', 'Agentes de IA']
  const LEVELS = ['Todos', 'Iniciante', 'Intermediario', 'Avancado']
  const stats = [
    { label: 'Total', val: learnings.length },
    { label: 'IA', val: learnings.filter((l) => l.category === 'IA').length },
    { label: 'Vibecoding', val: learnings.filter((l) => l.category === 'Vibecoding').length },
    {
      label: 'Automacoes e Agentes',
      val: learnings.filter((l) => ['Automacoes', 'Agentes de IA'].includes(l.category)).length,
    },
  ]

  const dateFmt = (d: string) => (d ? d.split('-').reverse().join('/') : '')
  const getLvlColor = (lvl: string) => {
    switch (lvl) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Intermediario':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Avancado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return ''
    }
  }

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: '"Roboto Mono", monospace' }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap');`}</style>
      <header className="border-b bg-card px-4 py-4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center w-full">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Painel Admin</h1>
          <p className="text-muted-foreground text-sm">
            {learnings.length} aprendizados no repositorio
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            target="_blank"
            className="text-sm font-medium hover:underline flex items-center gap-1"
          >
            Ver repositorio <ExternalLink className="w-4 h-4" />
          </Link>
          <Button
            variant="ghost"
            onClick={async () => {
              await signOut()
              navigate('/admin/login')
            }}
          >
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                <div className="text-3xl font-bold mt-2">{s.val}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Buscar aprendizados"
            aria-label="Buscar aprendizados"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-1/3"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="md:w-[200px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="md:w-[200px]">
              <SelectValue placeholder="Nivel" />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => (
                <SelectItem key={l} value={l}>
                  {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {(searchTerm !== '' || category !== 'Todos' || level !== 'Todos') && (
            <Button
              variant="ghost"
              onClick={() => {
                setSearchTerm('')
                setCategory('Todos')
                setLevel('Todos')
              }}
            >
              <X className="w-4 h-4 mr-2" /> Limpar filtros
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {filteredLearnings.length} aprendizados encontrados
        </p>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="mb-4">Nao foi possivel carregar.</p>
            <Button onClick={fetchLearnings}>Tentar novamente</Button>
          </div>
        ) : filteredLearnings.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum aprendizado encontrado.
          </div>
        ) : isMobile ? (
          <div className="space-y-4">
            {filteredLearnings.map((l) => (
              <Card key={l.id}>
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">#{l.number}</Badge>
                    <h3 className="font-bold">{l.title}</h3>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{l.author}</span>
                    <span>{dateFmt(l.date)}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{l.category}</Badge>
                    <Badge variant="outline" className={getLvlColor(l.level)}>
                      {l.level}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/admin/editar/${l.id}`}>Editar</Link>
                    </Button>
                    <DelDialog onConfirm={() => deleteLearning(l.id)}>
                      <Button variant="destructive" className="flex-1">
                        Excluir
                      </Button>
                    </DelDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60px]">Num (#)</TableHead>
                  <TableHead>Titulo</TableHead>
                  <TableHead className="w-[140px]">Autor</TableHead>
                  <TableHead className="w-[120px]">Categoria</TableHead>
                  <TableHead className="w-[110px]">Nivel</TableHead>
                  <TableHead className="w-[100px]">Data</TableHead>
                  <TableHead className="w-[100px]">Acoes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLearnings.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell>
                      <Badge variant="outline">#{l.number}</Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate font-bold" title={l.title}>
                      {l.title}
                    </TableCell>
                    <TableCell>{l.author}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{l.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getLvlColor(l.level)}>
                        {l.level}
                      </Badge>
                    </TableCell>
                    <TableCell>{dateFmt(l.date)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild aria-label="Editar aprendizado">
                          <Link to={`/admin/editar/${l.id}`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <DelDialog onConfirm={() => deleteLearning(l.id)}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:bg-destructive/10"
                            aria-label="Excluir aprendizado"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </DelDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  )
}

function DelDialog({ children, onConfirm }: { children: React.ReactNode; onConfirm: () => void }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir aprendizado?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa acao nao pode ser desfeita. O aprendizado sera removido permanentemente do
            repositorio.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Sim, excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
