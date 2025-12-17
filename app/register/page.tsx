import { register } from "./actions"


export default function RegisterPage() {
  return (
    <form action={register} className="p-8 space-y-4">
      <h1 className="text-xl font-bold">Register</h1>

      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />

      <button type="submit">Register</button>
    </form>
  )
}
