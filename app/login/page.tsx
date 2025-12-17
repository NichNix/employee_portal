'use client'

import { login } from './actions'
import { useState } from "react"

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(formData: FormData) {
    setError(null)
    setLoading(true)
    try {
      await login(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form action={handleLogin} className="space-y-4">
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Belum punya akun? <a href="/register" className="text-blue-500 hover:underline">Daftar di sini</a>
        </p>
      </div>
    </div>
  )
}
