import { doseLogs } from '../../../data/mockData'
import { Badge } from '../../../components/ui/Badge'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function AdherencePage() {
  const taken = doseLogs.filter((log) => log.status === 'Taken').length
  const adherenceScore = Math.round((taken / doseLogs.length) * 100)

  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Adherence Snapshot</h3>
        </CardHeader>
        <CardContent>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${adherenceScore}%` }} />
          </div>
          <p className="mt-2 text-sm text-slate-500">Current adherence score: {adherenceScore}%</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Dose History</h3>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Medicine</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Planned Time</th>
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
