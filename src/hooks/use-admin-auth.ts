import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

export function useAdminAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (mounted) {
        setSession(session)
        setLoading(false)
      }
    }

    fetchSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return { session, loading, signOut }
}
