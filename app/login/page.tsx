'use client'

import { login } from './actions'
import { useState } from "react"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button 
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition"
    >
      {pending ? 'Memproses...' : 'Login'}
    </button>
  )
}

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)
    try {
      await login(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-700">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-900 border border-red-700 text-red-200 rounded">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <SubmitButton />
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Belum punya akun? <a href="/register" className="text-blue-400 hover:text-blue-300 transition">Daftar di sini</a>
        </p>
      </div>
    </div>
  )
}
