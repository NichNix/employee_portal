import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
      <div className="text-center text-white max-w-2xl px-8">
        <h1 className="text-5xl font-bold mb-4">Employee Portal</h1>
        <p className="text-xl mb-8">
          Selamat datang di Portal Karyawan. Aplikasi ini membantu Anda mengelola profil dan melihat pengumuman penting dari perusahaan.
        </p>
        
        <div className="space-y-4">
          <p className="text-lg mb-8">Silakan login atau daftar untuk melanjutkan</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/login" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Daftar
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <div className="text-3xl mb-2">🔐</div>
            <h3 className="text-xl font-bold mb-2">Aman</h3>
            <p>Perlindungan data dengan teknologi Supabase terbaru</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-xl font-bold mb-2">Cepat</h3>
            <p>Performa optimal dengan Next.js 16 App Router</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="text-xl font-bold mb-2">Responsif</h3>
            <p>Akses dari perangkat apapun dengan mudah</p>
          </div>
        </div>
      </div>
    </div>
  )
}
