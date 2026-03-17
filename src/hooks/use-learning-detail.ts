import { useState, useEffect, useCallback } from 'react'
import { fetchLearningById } from '@/services/learnings'
import { LearningRow } from '@/types'

export function useLearningDetail(id: string | undefined) {
  const [data, setData] = useState<LearningRow | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchDetail = useCallback(async () => {
    if (!id) {
      setLoading(false)
      return
    }
    try {
      setLoading(true)
      setError(null)
      const result = await fetchLearningById(id)
      setData(result)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    fetchDetail()
  }, [fetchDetail])

  return { data, loading, error, refetch: fetchDetail }
}
