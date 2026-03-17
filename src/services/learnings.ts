import { supabase } from '@/lib/supabase/client'
import { LearningRow, LearningInsert } from '@/types'

export const fetchLearnings = async () => {
  const { data, error } = await supabase
    .from('learnings')
    .select('*')
    .order('number', { ascending: false })

  if (error) throw error
  return data as LearningRow[]
}

export const searchLearnings = async (
  searchTerm: string,
  category: string,
  level: string,
  sortBy: string = 'recentes',
) => {
  let query = supabase.from('learnings').select('*')

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

  if (sortBy === 'relevancia') {
    query = query
      .order('rating_avg', { ascending: false })
      .order('rating_count', { ascending: false })
      .order('number', { ascending: true })
  } else {
    query = query.order('number', { ascending: false })
  }

  const { data, error } = await query

  if (error) throw error
  return data as LearningRow[]
}

export const fetchLearningById = async (id: string) => {
  let query = supabase.from('learnings').select('*')

  if (/^\d+$/.test(id)) {
    query = query.eq('number', parseInt(id, 10))
  } else {
    query = query.eq('id', id)
  }

  const { data, error } = await query.single()

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

export const deleteRating = async (ratingId: string) => {
  // @ts-expect-error - Table is dynamically added via migration
  const { error } = await supabase.from('learning_ratings').delete().eq('id', ratingId)
  if (error) throw error
}

export const submitRating = async (learningId: string, rating: number) => {
  const { data, error } = await supabase
    // @ts-expect-error - Table is dynamically added via migration
    .from('learning_ratings')
    .insert([{ learning_id: learningId, rating }])
    .select('id')
    .single()

  if (error) throw error
  return data.id as string
}
