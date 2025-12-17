import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (!user || error) {
    redirect('/login')
  }

  const { data: announcements } = await supabase
    .from('announcements')
    .select()
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Employee Portal</h1>
          <form action="/logout" method="post">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition">
              Logout
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-xl font-bold mb-2 text-white">Informasi Pengguna</h2>
          <p className="text-gray-300">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Pengumuman</h2>
          {announcements && announcements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {announcements.map((announcement: any) => (
                <div key={announcement.id} className="bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-500 border border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-white">{announcement.title}</h3>
                  <p className="text-gray-300 mb-4">{announcement.content}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(announcement.created_at).toLocaleDateString('id-ID')}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center text-gray-400 border border-gray-700">
              Tidak ada pengumuman saat ini
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
