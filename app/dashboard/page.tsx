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

  return (
    <div className="p-8">
      <h1 className="text-xl">Welcome, {user.email}</h1>

      <ul className="mt-4 space-y-2">
        {announcements?.map((a) => (
          <li key={a.id} className="border p-2">
            <h2 className="font-bold">{a.title}</h2>
            <p>{a.content}</p>
          </li>
        ))}
      </ul>

      <form action="/logout" method="post">
        <button className="mt-6">Logout</button>
      </form>
    </div>
  )
}
