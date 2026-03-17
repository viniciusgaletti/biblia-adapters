import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Loader2, Plus, X } from 'lucide-react'
import { useFieldArray } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEditLearning } from '@/hooks/use-edit-learning'
import { cn } from '@/lib/utils'

const ReqLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]">
    {children}{' '}
    <span className="text-primary ml-[2px]" aria-hidden="true">
      *
    </span>
    <span className="sr-only">(Obrigatório)</span>
  </FormLabel>
)

const OptLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]">
    {children}{' '}
    <span className="text-muted-foreground font-normal text-[12px] ml-1">(opcional)</span>
  </FormLabel>
)

export default function EditLearning() {
  const { id } = useParams()
  const { form, learning, isLoading, isSubmitting, error, onSubmit } = useEditLearning(id)

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'stepsArray',
  })

  useEffect(() => {
    document.title = 'Editar Aprendizado | Admin'
  }, [])

  if (isLoading) {
    return (
      <div className="max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans px-4 sm:px-0 pt-[32px]">
        <Skeleton className="w-32 h-4 mb-8" />
        <Skeleton className="w-48 h-8 mb-2" />
        <Skeleton className="w-64 h-4 mb-8" />
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    )
  }

  if (error || !learning) {
    return (
      <div className="max-w-[680px] mx-auto flex flex-col items-center justify-center min-h-[50vh] animate-fade-in-up font-sans px-4">
        <h2 className="text-xl font-bold mb-4">{error || 'Aprendizado nao encontrado.'}</h2>
        <Link to="/admin">
          <Button>Voltar ao painel</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans px-4 sm:px-0 pt-[32px]">
      <Link
        to="/admin"
        className="inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
        Voltar ao painel
      </Link>

      <section className="mb-[36px]">
        <h1 className="text-[1.25rem] font-bold tracking-[-0.02em] text-foreground">
          Editar Aprendizado
        </h1>
        <div className="flex items-center gap-[8px] mt-[8px]">
          <span className="font-sans text-[0.75rem] px-2 py-0.5 rounded-full border border-border bg-secondary text-secondary-foreground font-semibold">
            #{learning.number}
          </span>
          <span className="text-[0.75rem] text-muted-foreground">
            Editando aprendizado existente
          </span>
        </div>
      </section>

      <Form {...form}>
        <form onSubmit={onSubmit} noValidate>
          <section className="mb-[36px]">
            <h2 className="uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]">
              Identificação
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Autor</ReqLabel>
                    <FormControl>
                      <Input placeholder="Nome completo" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Data</ReqLabel>
                    <FormControl>
                      <Input type="date" disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Categoria</ReqLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            form.formState.errors.category &&
                              'border-destructive focus-visible:ring-destructive',
                          )}
                        >
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="IA">IA</SelectItem>
                        <SelectItem value="Vibecoding">Vibecoding</SelectItem>
                        <SelectItem value="Automacoes">Automacoes</SelectItem>
                        <SelectItem value="Agentes de IA">Agentes de IA</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Nível</ReqLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            form.formState.errors.level &&
                              'border-destructive focus-visible:ring-destructive',
                          )}
                        >
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Iniciante">Iniciante</SelectItem>
                        <SelectItem value="Intermediario">Intermediário</SelectItem>
                        <SelectItem value="Avancado">Avançado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <section>
            <h2 className="uppercase text-[11px] font-bold tracking-[0.08em] text-muted-foreground border-b border-border pb-[8px] mb-[20px]">
              Conteúdo
            </h2>
            <div className="flex flex-col gap-[20px]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Título</ReqLabel>
                    <FormControl>
                      <Input
                        placeholder="Titulo curto e direto do aprendizado"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <div className="text-[11px] text-muted-foreground text-right mt-1">
                      {field.value?.length || 0}/100
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="context"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Contexto</ReqLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva o problema ou situacao que gerou esse aprendizado."
                        rows={4}
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="learning"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <ReqLabel>Aprendizado</ReqLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva a solucao ou insight de forma clara e direta."
                        rows={5}
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-0 flex flex-col">
                <div>
                  <label className="text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]">
                    Passos{' '}
                    <span className="text-muted-foreground font-normal text-[12px] ml-1">
                      (opcional)
                    </span>
                  </label>
                  <p className="text-[12px] text-muted-foreground mb-[10px]">
                    Divida o aprendizado em etapas. Deixe em branco se nao se aplicar.
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex flex-row items-center gap-[8px]">
                      <span className="text-[13px] font-medium text-muted-foreground min-w-[24px] text-right">
                        {index + 1}.
                      </span>
                      <FormField
                        control={form.control}
                        name={`stepsArray.${index}.value`}
                        render={({ field: inputField }) => (
                          <FormItem className="flex-1 space-y-0">
                            <FormControl>
                              <Input
                                {...inputField}
                                className="text-[13px] py-[9px] px-[12px] h-auto shadow-none"
                                placeholder={`Passo ${index + 1}`}
                                disabled={isSubmitting}
                                aria-label={`Passo ${index + 1}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="w-[28px] h-[28px] shrink-0 text-muted-foreground hover:text-destructive hover:bg-transparent"
                          onClick={() => remove(index)}
                          aria-label={`Remover passo ${index + 1}`}
                          disabled={isSubmitting}
                        >
                          <X className="w-4 h-4" aria-hidden="true" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {fields.length < 10 && (
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-fit mt-[8px] text-[13px] text-primary hover:text-primary/90 hover:bg-transparent px-0 h-auto gap-[4px]"
                    onClick={() => append({ value: '' })}
                    disabled={isSubmitting}
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    Adicionar passo
                  </Button>
                )}
              </div>

              <FormField
                control={form.control}
                name="observations"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <OptLabel>Observações</OptLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Pontos de atencao, limitacoes ou informacoes extras para os colegas."
                        rows={3}
                        disabled={isSubmitting}
                        value={field.value || ''}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <div className="flex items-center justify-end gap-[12px] border-t border-border pt-[24px] mt-[40px]">
            <Link to="/admin">
              <Button
                type="button"
                variant="outline"
                disabled={isSubmitting}
                className="px-[20px] py-[10px] h-auto text-[13px] bg-transparent border-border hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
              >
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-[22px] py-[10px] h-auto text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" aria-hidden="true" />
                  Salvando...
                </>
              ) : (
                'Salvar alteracoes'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
