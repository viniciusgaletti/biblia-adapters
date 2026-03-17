import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/hooks/use-toast'
import { fetchLearningById } from '@/services/learnings'
import { adminService } from '@/services/admin'
import { NewLearningSchema, type NewLearningFormValues } from '@/hooks/use-new-learning'
import { LearningRow } from '@/types'

export const useEditLearning = (id: string | undefined) => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [learning, setLearning] = useState<LearningRow | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<NewLearningFormValues>({
    resolver: zodResolver(NewLearningSchema),
    defaultValues: {
      author: '',
      date: '',
      title: '',
      context: '',
      learning: '',
      stepsArray: [{ value: '' }],
      observations: '',
    },
  })

  useEffect(() => {
    const loadLearning = async () => {
      if (!id) {
        setError('ID não fornecido')
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const data = await fetchLearningById(id)
        setLearning(data)

        let parsedSteps = [{ value: '' }]
        if (data.steps) {
          const splitSteps = data.steps
            .split('\n')
            .map((line) => ({ value: line.replace(/^\d+\.\s*/, '').trim() }))
            .filter((step) => step.value.length > 0)

          if (splitSteps.length > 0) {
            parsedSteps = splitSteps
          }
        }

        form.reset({
          author: data.author,
          date: data.date,
          category: data.category as any,
          level: data.level as any,
          title: data.title,
          context: data.context,
          learning: data.learning,
          stepsArray: parsedSteps,
          observations: data.observations || '',
        })
      } catch (err) {
        console.error(err)
        setError('Aprendizado nao encontrado.')
      } finally {
        setIsLoading(false)
      }
    }

    loadLearning()
  }, [id, form])

  const onSubmit = async (data: NewLearningFormValues) => {
    if (!id) return

    setIsSubmitting(true)
    try {
      const validSteps =
        data.stepsArray?.map((step) => step.value.trim()).filter((step) => step.length > 0) || []

      const formattedSteps =
        validSteps.length > 0
          ? validSteps.map((step, index) => `${index + 1}. ${step}`).join('\n')
          : null

      await adminService.updateLearning(id, {
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
        title: 'Aprendizado atualizado com sucesso!',
      })
      navigate('/admin')
    } catch (error: any) {
      console.error(error)
      toast({
        title: 'Nao foi possivel salvar. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    learning,
    isLoading,
    isSubmitting,
    error,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
