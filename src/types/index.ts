import { Database } from '@/lib/supabase/types'

export type Aprendizado = Database['public']['Tables']['aprendizados']['Row']
