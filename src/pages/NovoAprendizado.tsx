import { Link } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
import { useNewLearning } from '@/hooks/use-new-learning'
import { cn } from '@/lib/utils'

const ReqLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]">
    {children} <span className="text-primary ml-[2px]">*</span>
  </FormLabel>
)

const OptLabel = ({ children }: { children: React.ReactNode }) => (
  <FormLabel className="text-[13px] font-medium text-foreground inline-flex items-baseline mb-[5px]">
    {children}{' '}
    <span className="text-muted-foreground font-normal text-[12px] ml-1">(opcional)</span>
  </FormLabel>
)

export default function NovoAprendizado() {
  const { form, isSubmitting, onSubmit } = useNewLearning()

  return (
    <div className="max-w-[680px] mx-auto animate-fade-in-up pb-12 font-sans">
      <Link
        to="/"
        className="inline-flex items-center text-[12px] tracking-[0.02em] text-muted-foreground hover:text-primary mb-[28px] transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
        Voltar para lista
      </Link>

      <div className="mb-[36px]">
        <h1 className="text-[24px] font-bold tracking-[-0.02em] text-foreground">
          Registrar Aprendizado
        </h1>
        <p className="text-[13px] text-muted-foreground mt-1 leading-[1.6]">
          Compartilhe com a equipe o que voce aprendeu na pratica.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={onSubmit}>
          <div className="mb-[36px]">
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
                      <Input placeholder="Seu nome completo" disabled={isSubmitting} {...field} />
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
                              'border-destructive focus:ring-destructive/15',
                          )}
                        >
                          <SelectValue placeholder="Selecione uma categoria" />
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
                              'border-destructive focus:ring-destructive/15',
                          )}
                        >
                          <SelectValue placeholder="Selecione o nivel" />
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
          </div>

          <div>
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
              <FormField
                control={form.control}
                name="steps"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex flex-col">
                    <OptLabel>Passos</OptLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Se o aprendizado tem uma sequencia, liste os passos. Deixe em branco se nao se aplicar."
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
          </div>

          <div className="flex items-center justify-end gap-[12px] border-t border-border pt-[24px] mt-[40px]">
            <Link to="/">
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
              className="px-[22px] py-[10px] h-auto text-[13px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" />
                  Registrando...
                </>
              ) : (
                'Registrar Aprendizado'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
