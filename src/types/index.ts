export interface Aprendizado {
  id: string
  created_at: string
  user_id: string
  titulo: string
  conteudo: string
  categoria: string | null
  number: number
  author: string
  level: string
  context: string
  steps: string | null
  observations: string | null
}
