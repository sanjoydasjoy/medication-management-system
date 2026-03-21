import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/AuthContext'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

const pageName: Record<string, string> = {
  '/dashboard': 'Overview Dashboard',
  '/medicines': 'Medicine Catalog',
  '/schedule': 'Medication Schedule',
  '/adherence': 'Dose Adherence',
  '/interactions': 'Interaction Checker',
  '/doctors': 'Doctor Discovery',
  '/reports': 'Health Reports',
  '/settings': 'Profile & Settings',
}

export function Topbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="mb-5 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Standard Medication Management System
        </p>
        <h2 className="text-2xl font-semibold text-slate-900">{pageName[location.pathname] ?? 'MediGuide'}</h2>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        <Input className="w-full sm:w-80" placeholder="Search medicines, doctors, schedules" />
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          {user?.fullName ?? 'User'}
        </div>
        <Button type="button" variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  )
}
