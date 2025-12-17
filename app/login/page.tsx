import { login } from './actions'

export default function LoginPage() {
  return (
    <form action={login} className="p-8 space-y-4">
      <h1 className="text-xl font-bold">Login</h1>

      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />

      <button type="submit">Login</button>
    </form>
  )
}
