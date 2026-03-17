import { supabase } from '@/lib/supabase/client'
import { Aprendizado } from '@/types'
import { Database } from '@/lib/supabase/types'

type InsertAprendizado = Database['public']['Tables']['aprendizados']['Insert']

export const getAprendizados = async () => {
  const { data, error } = await supabase
    .from('aprendizados')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Aprendizado[]
}

export const getAprendizado = async (id: string) => {
  const { data, error } = await supabase.from('aprendizados').select('*').eq('id', id).single()

  if (error) throw error
  return data as Aprendizado
}

export const createAprendizado = async (aprendizado: InsertAprendizado) => {
  const { data, error } = await supabase
    .from('aprendizados')
    .insert([aprendizado])
    .select()
    .single()

  if (error) throw error
  return data as Aprendizado
}

export const deleteAprendizado = async (id: string) => {
  const { error } = await supabase.from('aprendizados').delete().eq('id', id)

  if (error) throw error
}
