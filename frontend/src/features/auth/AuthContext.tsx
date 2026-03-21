import { createContext, useContext, useMemo, useState } from 'react'
import {
  clearActiveUser,
  getActiveUser,
  getUsers,
  saveUsers,
  setActiveUser,
  type StoredUser,
} from './authStorage'

interface PublicUser {
  fullName: string
  email: string
}

interface AuthContextValue {
  user: PublicUser | null
  isAuthenticated: boolean
  login: (email: string, password: string) => { ok: boolean; message?: string }
  register: (payload: StoredUser) => { ok: boolean; message?: string }
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PublicUser | null>(() => getActiveUser())

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: (email, password) => {
        const users = getUsers()
        const found = users.find((item) => item.email.toLowerCase() === email.toLowerCase())

        if (!found || found.password !== password) {
          return { ok: false, message: 'Invalid email or password' }
        }

        const active = { fullName: found.fullName, email: found.email }
        setActiveUser(active)
        setUser(active)
        return { ok: true }
      },
      register: (payload) => {
        const users = getUsers()
        const exists = users.some((item) => item.email.toLowerCase() === payload.email.toLowerCase())

        if (exists) {
          return { ok: false, message: 'Account already exists for this email' }
        }

        const nextUsers = [...users, payload]
        saveUsers(nextUsers)
        return { ok: true }
      },
      logout: () => {
        clearActiveUser()
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
