import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 lg:grid lg:grid-cols-[260px_1fr]">
      <div className="lg:sticky lg:top-0 lg:h-screen">
        <Sidebar />
      </div>
      <main className="px-4 py-4 sm:px-6 lg:px-10">
        <Topbar />
        <Outlet />
      </main>
    </div>
  )
}
