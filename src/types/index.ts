import { Database } from '@/lib/supabase/types'

export type LearningRow = Database['public']['Tables']['learnings']['Row']
export type LearningInsert = Database['public']['Tables']['learnings']['Insert']

export interface StoredRating {
  ratingId: string
  value: number
}
