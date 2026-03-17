import { supabase } from '@/lib/supabase/client'
import { LearningRow } from '@/types'

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
}
