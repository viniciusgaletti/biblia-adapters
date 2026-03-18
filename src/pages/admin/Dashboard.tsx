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

  const CATEGORIES = ['Todos', 'IA', 'Vibecoding', 'Automações', 'Agentes de IA']
  const LEVELS = ['Todos', 'Iniciante', 'Intermediario', 'Avancado']
  const stats = [
    { label: 'Total', val: learnings.length },
    { label: 'IA', val: learnings.filter((l) => l.category === 'IA').length },
    { label: 'Vibecoding', val: learnings.filter((l) => l.category === 'Vibecoding').length },
    {
      label: 'Automações e Agentes',
      val: learnings.filter((l) => ['Automações', 'Agentes de IA'].includes(l.category)).length,
    },
  ]

  const dateFmt = (d: string) => (d ? d.split('-').reverse().join('/') : '')
  const getLvlColor = (lvl: string) => {
    switch (lvl) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800'
      case 'Intermediario':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800'
      case 'Avancado':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
      default:
        return 'border-transparent'
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-[28px]">
          <div>
            <h1 className="text-[1.5rem] font-bold tracking-[-0.02em] text-foreground">
              Painel Admin
            </h1>
            <p className="text-[0.8125rem] text-muted-foreground mt-[2px]">
              {learnings.length} aprendizados no repositório
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <Link
              to="/"
              target="_blank"
              className="text-[0.8125rem] text-primary hover:underline flex items-center gap-1 font-medium"
            >
              Ver repositório <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={async () => {
                await signOut()
                navigate('/admin/login')
              }}
              className="border border-border px-[16px] py-[8px] rounded-[var(--radius)] text-[0.8125rem] text-foreground hover:bg-accent transition-colors font-medium"
            >
              Sair
            </button>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] mb-[28px]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-[calc(var(--radius)*1.5)] py-[16px] px-[20px]"
            >
              <div className="text-[1.75rem] font-bold text-primary leading-none">{s.val}</div>
              <div className="text-[0.6875rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground mt-[4px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
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
              <SelectValue placeholder="Nível" />
            </SelectTrigger>
            <SelectContent>
              {LEVELS.map((l) => (
                <SelectItem key={l} value={l}>
                  {l === 'Intermediario' ? 'Intermediário' : l === 'Avancado' ? 'Avançado' : l}
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

        <p className="text-[0.8125rem] text-muted-foreground mb-4">
          {filteredLearnings.length} aprendizados encontrados
        </p>

        {loading ? (
          <div className="w-full border border-border rounded-[calc(var(--radius)*1.5)] overflow-hidden">
            <div className="bg-muted h-[35px] w-full border-b border-border"></div>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-[52px] w-full border-b border-border bg-card flex items-center px-[14px]"
              >
                <Skeleton className="h-4 w-full bg-muted-foreground/10" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="mb-4 text-[0.875rem]">Não foi possível carregar.</p>
            <Button onClick={fetchLearnings}>Tentar novamente</Button>
          </div>
        ) : filteredLearnings.length === 0 ? (
          <div className="text-center py-12 text-[0.875rem] text-muted-foreground">
            Nenhum aprendizado encontrado.
          </div>
        ) : isMobile ? (
          <div className="space-y-0">
            {filteredLearnings.map((l) => (
              <div
                key={l.id}
                className="bg-card border border-border rounded-[calc(var(--radius)*1.5)] p-[16px] mb-[12px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[0.75rem] bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                    #{l.number}
                  </span>
                  <h3 className="font-bold text-[0.875rem] text-foreground">{l.title}</h3>
                </div>
                <div className="flex justify-between text-[0.8125rem] text-muted-foreground mb-3">
                  <span>{l.author}</span>
                  <span>{dateFmt(l.date)}</span>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="text-[0.6875rem] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-transparent">
                    {l.category}
                  </span>
                  <span
                    className={`text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border ${getLvlColor(l.level)}`}
                  >
                    {l.level === 'Intermediario'
                      ? 'Intermediário'
                      : l.level === 'Avancado'
                        ? 'Avançado'
                        : l.level}
                  </span>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <Link
                    to={`/admin/editar/${l.id}`}
                    className="flex-1 border border-border rounded-[var(--radius)] text-[0.8125rem] py-2 text-center text-foreground hover:bg-accent transition-colors font-medium"
                  >
                    Editar
                  </Link>
                  <DelDialog onConfirm={() => deleteLearning(l.id)}>
                    <button className="flex-1 border border-destructive/30 text-destructive rounded-[var(--radius)] text-[0.8125rem] py-2 text-center hover:bg-destructive/10 transition-colors font-medium">
                      Excluir
                    </button>
                  </DelDialog>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-[calc(var(--radius)*1.5)] border border-border overflow-hidden">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[60px]">
                    #
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                    Título
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[140px]">
                    Autor
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[120px]">
                    Categoria
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[110px]">
                    Nível
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[100px]">
                    Data
                  </th>
                  <th className="px-[14px] py-[10px] text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-muted-foreground w-[100px] text-right">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLearnings.map((l) => (
                  <tr
                    key={l.id}
                    className="border-b border-border hover:bg-accent/50 transition-colors last:border-0"
                  >
                    <td className="px-[14px] py-[12px] text-[0.8125rem] text-foreground">
                      <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-border text-[0.6875rem] font-medium">
                        {l.number}
                      </span>
                    </td>
                    <td
                      className="px-[14px] py-[12px] text-[0.8125rem] text-foreground font-medium max-w-[220px] truncate whitespace-nowrap"
                      title={l.title}
                    >
                      {l.title}
                    </td>
                    <td className="px-[14px] py-[12px] text-[0.8125rem] text-muted-foreground truncate">
                      {l.author}
                    </td>
                    <td className="px-[14px] py-[12px]">
                      <span className="text-[0.6875rem] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-transparent">
                        {l.category}
                      </span>
                    </td>
                    <td className="px-[14px] py-[12px]">
                      <span
                        className={`text-[0.6875rem] font-medium px-2 py-0.5 rounded-full border ${getLvlColor(
                          l.level,
                        )}`}
                      >
                        {l.level === 'Intermediario'
                          ? 'Intermediário'
                          : l.level === 'Avancado'
                            ? 'Avançado'
                            : l.level}
                      </span>
                    </td>
                    <td className="px-[14px] py-[12px] text-[0.8125rem] text-muted-foreground">
                      {dateFmt(l.date)}
                    </td>
                    <td className="px-[14px] py-[12px] text-[0.8125rem] text-foreground text-right">
                      <div className="flex items-center justify-end gap-[4px]">
                        <Link
                          to={`/admin/editar/${l.id}`}
                          className="w-[32px] h-[32px] rounded-[var(--radius)] flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          aria-label="Editar"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <DelDialog onConfirm={() => deleteLearning(l.id)}>
                          <button
                            className="w-[32px] h-[32px] rounded-[var(--radius)] flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                            aria-label="Excluir"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </DelDialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      <AlertDialogContent className="font-sans">
        <AlertDialogHeader>
          <AlertDialogTitle>Excluir aprendizado?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. O aprendizado será removido permanentemente do
            repositório.
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
