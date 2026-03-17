import { Database } from '@/lib/supabase/types'

export type LearningRow = Database['public']['Tables']['learnings']['Row'] & {
  rating_avg?: number
  rating_count?: number
}
export type LearningInsert = Database['public']['Tables']['learnings']['Insert']
