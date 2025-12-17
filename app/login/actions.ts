'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const supabase = await createClient()

  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    // Jika email belum confirmed, auto-confirm dan login
    if (error.message.includes('Email not confirmed')) {
      try {
        // Try to confirm email
        const { error: updateError } = await supabase.from('auth.users')
          .update({ email_confirmed_at: new Date().toISOString() })
          .eq('email', email)
        
        if (!updateError) {
          // Retry login
          const { error: retryError } = await supabase.auth.signInWithPassword({
            email,
            password,
          })
          
          if (retryError) {
            throw new Error(retryError.message)
          }
          
          redirect('/dashboard')
        }
      } catch (err) {
        throw new Error('Email belum dikonfirmasi. Silakan cek email Anda.')
      }
    }
    
    throw new Error(error.message)
  }

  redirect('/dashboard')
}
