import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'
import { Input } from '../../../components/ui/Input'
import { useAuth } from '../AuthContext'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const result = register({ fullName, email, password })
    if (!result.ok) {
      setError(result.message ?? 'Registration failed')
      return
    }

    setError('')
    navigate('/login')
  }

  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg">
        <Card className="border-slate-800 bg-slate-900 text-slate-100">
          <CardHeader>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Create Account</p>
            <h1 className="mt-2 text-3xl font-semibold">Start managing medications smarter</h1>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2 text-sm text-slate-300">
                Full Name
                <Input
                  className="border-slate-700 bg-slate-800 text-slate-100"
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
              </label>
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
              placeholder="At least 8 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={8}
            />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                Confirm Password
                <Input
                  className="border-slate-700 bg-slate-800 text-slate-100"
              type="password"
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={8}
            />
              </label>
              {error ? <p className="text-sm text-rose-300">{error}</p> : null}
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-300">
              Already have an account?{' '}
              <Link className="font-semibold text-emerald-300 hover:text-emerald-200" to="/login">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
