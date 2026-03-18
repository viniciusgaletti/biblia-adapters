import { useState, useEffect } from 'react'
import { submitRating, deleteRating } from '@/services/learnings'
import { StoredRating } from '@/types'
import { toast } from 'sonner'

export function useRating(learningId: string | undefined) {
  const [userRating, setUserRating] = useState<StoredRating | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!learningId) return
    const stored = localStorage.getItem(`biblia-rating-${learningId}`)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (parsed.ratingId && typeof parsed.value === 'number') {
          setUserRating(parsed)
        }
      } catch (e) {
        // ignore
      }
    }
  }, [learningId])

  const handleRate = async (value: number, onSuccess?: () => void) => {
    if (!learningId || submitting) return
    if (userRating?.value === value) return

    setSubmitting(true)
    try {
      if (userRating?.ratingId) {
        await deleteRating(userRating.ratingId)
      }

      const newRatingId = await submitRating(learningId, value)

      const newRating: StoredRating = { ratingId: newRatingId, value }
      setUserRating(newRating)
      localStorage.setItem(`biblia-rating-${learningId}`, JSON.stringify(newRating))

      toast.success('Avaliação enviada com sucesso!')
      onSuccess?.()
    } catch (err) {
      console.error(err)
      toast.error('Não foi possível registrar sua avaliação.')
    } finally {
      setSubmitting(false)
    }
  }

  return { userRating, submitting, handleRate }
}
