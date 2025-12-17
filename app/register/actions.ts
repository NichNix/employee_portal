'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function register(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    throw new Error('Email dan password harus diisi')
  }

  if (password.length < 6) {
    throw new Error('Password minimal 6 karakter')
  }

  const supabase = await createClient()

  const { error, data } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data.user) {
    try {
      await supabase.auth.admin.updateUserById(data.user.id, {
        email_confirm: true,
      }).catch(() => {
      })
    } catch (err) {
    }
  }

  redirect('/login')
}
