export interface StoredUser {
  fullName: string
  email: string
  password: string
}

const USERS_KEY = 'mediguide_users'
const ACTIVE_USER_KEY = 'mediguide_active_user'

export function getUsers(): StoredUser[] {
  const raw = localStorage.getItem(USERS_KEY)
  if (!raw) return []

  try {
    return JSON.parse(raw) as StoredUser[]
  } catch {
    return []
  }
}

export function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getActiveUser(): Omit<StoredUser, 'password'> | null {
  const raw = localStorage.getItem(ACTIVE_USER_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as Omit<StoredUser, 'password'>
  } catch {
    return null
  }
}

export function setActiveUser(user: Omit<StoredUser, 'password'>) {
  localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user))
}

export function clearActiveUser() {
  localStorage.removeItem(ACTIVE_USER_KEY)
}
