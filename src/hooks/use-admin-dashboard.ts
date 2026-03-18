import { useState, useEffect, useMemo, useCallback } from 'react'
import { adminService } from '@/services/admin'
import { LearningRow } from '@/types'
import { useToast } from '@/hooks/use-toast'

export function useAdminDashboard() {
  const [learnings, setLearnings] = useState<LearningRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Todos')
  const [level, setLevel] = useState('Todos')

  const { toast } = useToast()

  const fetchLearnings = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const data = await adminService.fetchAllLearnings()
      setLearnings(data)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLearnings()
  }, [fetchLearnings])

  const filteredLearnings = useMemo(() => {
    return learnings.filter((item) => {
      const q = searchTerm.toLowerCase()
      const matchSearch =
        searchTerm === '' ||
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.context.toLowerCase().includes(q) ||
        item.learning.toLowerCase().includes(q)

      const matchCategory = category === 'Todos' || item.category === category
      const matchLevel = level === 'Todos' || item.level === level

      return matchSearch && matchCategory && matchLevel
    })
  }, [learnings, searchTerm, category, level])

  const deleteLearning = async (id: string) => {
    const previous = [...learnings]
    setLearnings(learnings.filter((l) => l.id !== id))

    try {
      await adminService.deleteLearning(id)
      toast({ title: 'Aprendizado excluído com sucesso.' })
    } catch (e) {
      setLearnings(previous)
      toast({ title: 'Não foi possível excluir. Tente novamente.', variant: 'destructive' })
    }
  }

  return {
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
  }
}
