import { NavLink } from 'react-router-dom'
import {
  Activity,
  BookHeart,
  CalendarClock,
  ClipboardCheck,
  LayoutDashboard,
  Stethoscope,
  Syringe,
  UserRoundCog,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/medicines', label: 'Medicine Catalog', icon: Syringe },
  { to: '/schedule', label: 'Schedule', icon: CalendarClock },
  { to: '/adherence', label: 'Adherence', icon: ClipboardCheck },
  { to: '/interactions', label: 'Interactions', icon: Activity },
  { to: '/doctors', label: 'Doctors', icon: Stethoscope },
  { to: '/reports', label: 'Reports', icon: BookHeart },
  { to: '/settings', label: 'Settings', icon: UserRoundCog },
]

export function Sidebar() {
  return (
    <aside className="h-full rounded-b-3xl bg-slate-900 p-6 text-slate-100 lg:rounded-none lg:rounded-r-3xl">
      <h1 className="text-3xl font-bold tracking-tight">MediGuide</h1>
      <p className="mt-1 text-sm text-slate-300">Medication Intelligence</p>
      <nav className="mt-8 grid gap-2" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-3 rounded-xl bg-emerald-500/20 px-3 py-2 text-emerald-100'
                : 'flex items-center gap-3 rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white'
            }
          >
            <item.icon size={17} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
