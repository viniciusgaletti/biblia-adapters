import { useState, useEffect, useMemo } from 'react'
import { getAprendizados } from '@/services/aprendizados'

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
}

export const CATEGORIES = ['Todos', 'IA', 'Vibecoding', 'Automacoes', 'Agentes de IA']
export const LEVELS = ['Todos', 'Iniciante', 'Intermediario', 'Avancado']

export function useLearnings() {
  const [data, setData] = useState<Learning[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Todos')
  const [levelFilter, setLevelFilter] = useState('Todos')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 300)
    return () => clearTimeout(handler)
  }, [searchTerm])

  const fetchLearnings = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await getAprendizados()
      const formatted: Learning[] = res.map((item) => ({
        id: item.id,
        number: item.number || 0,
        title: item.titulo,
        author: item.author || 'Desconhecido',
        date: new Date(item.created_at).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
        category: item.categoria || 'Sem categoria',
        level: item.level || 'Iniciante',
        context: item.context || '',
        learning: item.conteudo,
        steps: item.steps,
        observations: item.observations,
        created_at: item.created_at,
      }))
      setData(formatted)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLearnings()
  }, [])

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const lowerSearch = debouncedSearch.toLowerCase()
      const matchSearch =
        debouncedSearch === '' ||
        item.title.toLowerCase().includes(lowerSearch) ||
        item.author.toLowerCase().includes(lowerSearch) ||
        item.context.toLowerCase().includes(lowerSearch) ||
        item.learning.toLowerCase().includes(lowerSearch)

      const matchCategory = categoryFilter === 'Todos' || item.category === categoryFilter
      const matchLevel = levelFilter === 'Todos' || item.level === levelFilter

      return matchSearch && matchCategory && matchLevel
    })
  }, [data, debouncedSearch, categoryFilter, levelFilter])

  const clearFilters = () => {
    setSearchTerm('')
    setCategoryFilter('Todos')
    setLevelFilter('Todos')
  }

  return {
    data: filteredData,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    levelFilter,
    setLevelFilter,
    clearFilters,
    refetch: fetchLearnings,
    hasActiveFilters: searchTerm !== '' || categoryFilter !== 'Todos' || levelFilter !== 'Todos',
    totalCount: filteredData.length,
  }
}
