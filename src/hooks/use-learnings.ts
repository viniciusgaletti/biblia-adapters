import { useState, useEffect, useCallback } from 'react'
import { searchLearnings } from '@/services/learnings'

export interface Learning {
  id: string
  number: number
  title: string
  author: string
  date: string
  category: string
  level: string
  context: string
  learning: string
  steps: string | null
  observations: string | null
  created_at: string
  rating_avg: number
  rating_count: number
}

export const CATEGORIES = ['Todos', 'IA', 'Vibecoding', 'Automações', 'Agentes de IA']
export const LEVELS = ['Todos', 'Iniciante', 'Intermediario', 'Avancado']

export function useLearnings() {
  const [data, setData] = useState<Learning[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Todos')
  const [levelFilter, setLevelFilter] = useState('Todos')
  const [sortBy, setSortBy] = useState('recentes')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 300)
    return () => clearTimeout(handler)
  }, [searchTerm])

  const fetchFilteredLearnings = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await searchLearnings(debouncedSearch, categoryFilter, levelFilter, sortBy)

      const formatted: Learning[] = res.map((item) => {
        // Parse as UTC to prevent timezone shifts changing the day
        const dateObj = new Date(item.date + 'T12:00:00Z')
        return {
          id: item.id,
          number: item.number,
          title: item.title,
          author: item.author,
          date: dateObj.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
          category: item.category,
          level: item.level,
          context: item.context,
          learning: item.learning,
          steps: item.steps,
          observations: item.observations,
          created_at: item.created_at,
          rating_avg: item.rating_avg,
          rating_count: item.rating_count,
        }
      })

      setData(formatted)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [debouncedSearch, categoryFilter, levelFilter, sortBy])

  useEffect(() => {
    fetchFilteredLearnings()
  }, [fetchFilteredLearnings])

  const clearFilters = () => {
    setSearchTerm('')
    setCategoryFilter('Todos')
    setLevelFilter('Todos')
    setSortBy('recentes')
  }

  return {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    levelFilter,
    setLevelFilter,
    sortBy,
    setSortBy,
    clearFilters,
    refetch: fetchFilteredLearnings,
    hasActiveFilters:
      searchTerm !== '' ||
      categoryFilter !== 'Todos' ||
      levelFilter !== 'Todos' ||
      sortBy !== 'recentes',
    totalCount: data.length,
  }
}
