import { StatCard } from '../../../components/common/StatCard'
import { Badge } from '../../../components/ui/Badge'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'
import { doseLogs, medicines, plans } from '../../../data/mockData'
import { motion } from 'framer-motion'

export function DashboardPage() {
  const adherence = Math.round(
    (doseLogs.filter((log) => log.status === 'Taken').length / doseLogs.length) * 100,
  )
  const lowStockCount = medicines.filter((medicine) => medicine.stock <= medicine.refillThreshold).length

  return (
    <section className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Active Medication Plans" value={`${plans.length}`} trend="+2 this week" />
        <StatCard
          label="Dose Adherence"
          value={`${adherence}%`}
          trend="Stable in last 7 days"
          tone="success"
        />
        <StatCard label="Low Stock Alerts" value={`${lowStockCount}`} trend="Review refills" tone="warning" />
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-slate-900">Today Timeline</h3>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3">
          {plans.map((plan) => (
              <li
                key={plan.id}
                className="grid gap-1 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:grid-cols-[100px_1fr_140px]"
              >
                <strong className="text-slate-900">{plan.nextDoseAt}</strong>
                <span className="font-medium text-slate-700">{plan.medicineName}</span>
                <span className="text-slate-600">{plan.dosage}</span>
              </li>
          ))}
        </ul>
          </CardContent>
        </Card>
      </motion.div>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Recent Dose Logs</h3>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Medicine</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Time</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {doseLogs.map((log) => (
              <tr key={log.id}>
                  <td className="border-b border-slate-100 px-3 py-2">{log.medicineName}</td>
                  <td className="border-b border-slate-100 px-3 py-2">{log.plannedAt}</td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Badge
                      tone={
                        log.status === 'Taken' ? 'success' : log.status === 'Missed' ? 'danger' : 'warning'
                      }
                    >
                      {log.status}
                    </Badge>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </CardContent>
      </Card>
    </section>
  )
}
