import { supabase } from '@/lib/supabase/client'
import { LearningRow, LearningInsert } from '@/types'

export const adminService = {
  fetchAllLearnings: async () => {
    const { data, error } = await supabase
      .from('learnings')
      .select('*')
      .order('number', { ascending: false })

    if (error) throw error
    return data as LearningRow[]
  },

  deleteLearning: async (id: string) => {
    const { error } = await supabase.from('learnings').delete().eq('id', id)

    if (error) throw error
    return true
  },

  updateLearning: async (
    id: string,
    payload: Partial<Omit<LearningInsert, 'id' | 'number' | 'created_at'>>,
  ) => {
    const { data, error } = await supabase
      .from('learnings')
      .update(payload)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data as LearningRow
  },
}
