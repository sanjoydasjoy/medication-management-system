import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { ProtectedRoute } from './components/routing/ProtectedRoute'
import { PublicOnlyRoute } from './components/routing/PublicOnlyRoute'
import { LoginPage } from './features/auth/pages/LoginPage'
import { RegisterPage } from './features/auth/pages/RegisterPage'
import { AdherencePage } from './features/tracking/pages/AdherencePage'
import { DashboardPage } from './features/dashboard/pages/DashboardPage'
import { DoctorsPage } from './features/doctors/pages/DoctorsPage'
import { HomePage } from './features/home/pages/HomePage'
import { InteractionsPage } from './features/interactions/pages/InteractionsPage'
import { MedicinesPage } from './features/medicines/pages/MedicinesPage'
import { ReportsPage } from './features/reports/pages/ReportsPage'
import { SchedulePage } from './features/schedule/pages/SchedulePage'
import { SettingsPage } from './features/settings/pages/SettingsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/medicines" element={<MedicinesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/adherence" element={<AdherencePage />} />
          <Route path="/interactions" element={<InteractionsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
