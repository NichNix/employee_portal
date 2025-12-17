import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center text-gray-100 max-w-2xl px-8">
        <h1 className="text-5xl font-bold mb-4">Employee Portal</h1>
        <p className="text-xl mb-8 text-gray-300">
          Selamat datang di Portal Karyawan. Aplikasi ini membantu Anda mengelola profil dan melihat pengumuman penting dari perusahaan.
        </p>
        
        <div className="space-y-4">
          <p className="text-lg mb-8 text-gray-400">Silakan login atau daftar untuk melanjutkan</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Daftar
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-2">🔐</div>
            <h3 className="text-xl font-bold mb-2 text-white">Aman</h3>
            <p className="text-gray-400">Perlindungan data dengan teknologi Supabase terbaru</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-white">Cepat</h3>
            <p className="text-gray-400">Performa optimal dengan Next.js 16 App Router</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="text-xl font-bold mb-2 text-white">Responsif</h3>
            <p className="text-gray-400">Akses dari perangkat apapun dengan mudah</p>
          </div>
        </div>
      </div>
    </div>
  )
}
