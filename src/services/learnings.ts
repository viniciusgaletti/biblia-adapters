import { supabase } from '@/lib/supabase/client'
import { LearningRow, LearningInsert } from '@/types'

export const fetchLearnings = async () => {
  const { data, error } = await supabase
    .from('learnings')
    .select('*')
    .order('number', { ascending: true })

  if (error) throw error
  return data as LearningRow[]
}

export const searchLearnings = async (searchTerm: string, category: string, level: string) => {
  let query = supabase.from('learnings').select('*').order('number', { ascending: true })

  if (searchTerm) {
    query = query.or(
      `title.ilike.%${searchTerm}%,author.ilike.%${searchTerm}%,context.ilike.%${searchTerm}%,learning.ilike.%${searchTerm}%`,
    )
  }

  if (category && category !== 'Todos') {
    query = query.eq('category', category)
  }

  if (level && level !== 'Todos') {
    query = query.eq('level', level)
  }

  const { data, error } = await query

  if (error) throw error
  return data as LearningRow[]
}

export const fetchLearningById = async (id: string) => {
  const { data, error } = await supabase.from('learnings').select('*').eq('id', id).single()

  if (error) throw error
  return data as LearningRow
}

export const createLearning = async (
  payload: Omit<LearningInsert, 'id' | 'number' | 'created_at'>,
) => {
  const { data, error } = await supabase.from('learnings').insert([payload]).select().single()

  if (error) throw error
  return data as LearningRow
}
