import { useState, useEffect, useCallback } from 'react'
import { getAprendizado } from '@/services/aprendizados'
import { Database } from '@/lib/supabase/types'

type AprendizadoRow = Database['public']['Tables']['aprendizados']['Row']

export function useLearningDetail(id: string | undefined) {
  const [data, setData] = useState<AprendizadoRow | null>(null)
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
      const result = await getAprendizado(id)
      setData(result as unknown as AprendizadoRow)
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
