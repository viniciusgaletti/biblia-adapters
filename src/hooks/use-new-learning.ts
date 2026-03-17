import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useToast } from '@/hooks/use-toast'
import { createLearning } from '@/services/learnings'
import { format } from 'date-fns'

export const NewLearningSchema = z.object({
  author: z.string().min(2, 'Informe seu nome completo'),
  date: z.string().min(1, 'Informe a data'),
  category: z.enum(['IA', 'Vibecoding', 'Automacoes', 'Agentes de IA'], {
    errorMap: () => ({ message: 'Selecione uma categoria' }),
  }),
  level: z.enum(['Iniciante', 'Intermediario', 'Avancado'], {
    errorMap: () => ({ message: 'Selecione o nivel' }),
  }),
  title: z
    .string()
    .min(5, 'Titulo deve ter entre 5 e 100 caracteres')
    .max(100, 'Titulo deve ter entre 5 e 100 caracteres'),
  context: z.string().min(20, 'Descreva o contexto com pelo menos 20 caracteres'),
  learning: z.string().min(30, 'Descreva o aprendizado com pelo menos 30 caracteres'),
  stepsArray: z.array(z.object({ value: z.string() })).max(10),
  observations: z.string().optional().nullable(),
})

export type NewLearningFormValues = z.infer<typeof NewLearningSchema>

export const useNewLearning = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<NewLearningFormValues>({
    resolver: zodResolver(NewLearningSchema),
    defaultValues: {
      author: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      title: '',
      context: '',
      learning: '',
      stepsArray: [{ value: '' }],
      observations: '',
    },
  })

  const onSubmit = async (data: NewLearningFormValues) => {
    setIsSubmitting(true)
    try {
      const validSteps =
        data.stepsArray?.map((step) => step.value.trim()).filter((step) => step.length > 0) || []

      const formattedSteps =
        validSteps.length > 0
          ? validSteps.map((step, index) => `${index + 1}. ${step}`).join('\n')
          : null

      await createLearning({
        title: data.title,
        author: data.author,
        date: data.date,
        category: data.category,
        level: data.level,
        context: data.context,
        learning: data.learning,
        steps: formattedSteps,
        observations: data.observations || null,
      })

      toast({
        title: 'Aprendizado registrado com sucesso!',
      })
      navigate('/')
    } catch (error: any) {
      console.error(error)
      let message = 'Nao foi possivel salvar. Tente novamente.'

      if (error?.code === '23514') {
        message = 'Categoria ou nivel invalido'
      } else if (
        error?.message?.toLowerCase().includes('fetch') ||
        error?.message?.toLowerCase().includes('network') ||
        error?.message?.toLowerCase().includes('timeout') ||
        error?.message?.toLowerCase().includes('failed to fetch')
      ) {
        message = 'Conexao lenta. Verifique sua internet e tente novamente.'
      }

      toast({
        title: message,
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
