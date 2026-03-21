import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'
import { Input } from '../../../components/ui/Input'
import { useAuth } from '../AuthContext'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const from = (location.state as { from?: string } | null)?.from || '/dashboard'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = login(email, password)

    if (!result.ok) {
      setError(result.message ?? 'Login failed')
      return
    }

    setError('')
    navigate(from, { replace: true })
  }

  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg">
        <Card className="border-slate-800 bg-slate-900 text-slate-100">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Welcome Back</p>
            <h1 className="mt-2 text-3xl font-semibold">Sign in to MediGuide</h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2 text-sm text-slate-300">
                Email
                <Input
                  className="border-slate-700 bg-slate-800 text-slate-100"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                Password
                <Input
                  className="border-slate-700 bg-slate-800 text-slate-100"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
              </label>
              {error ? <p className="text-sm text-rose-300">{error}</p> : null}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-300">
              New user?{' '}
              <Link className="font-semibold text-emerald-300 hover:text-emerald-200" to="/register">
                Create an account
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
