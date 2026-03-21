import { interactions } from '../../../data/mockData'
import { Badge } from '../../../components/ui/Badge'
import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function InteractionsPage() {
  return (
    <section>
      <Card>
        <CardHeader className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-900">Drug Interaction Checker</h3>
          <Button type="button">Run Check</Button>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Medicine A</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Medicine B</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Severity</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Clinical Note</th>
            </tr>
          </thead>
          <tbody>
            {interactions.map((item) => (
              <tr key={item.id}>
                  <td className="border-b border-slate-100 px-3 py-2">{item.medicineA}</td>
                  <td className="border-b border-slate-100 px-3 py-2">{item.medicineB}</td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Badge
                      tone={
                        item.severity === 'High'
                          ? 'danger'
                          : item.severity === 'Moderate'
                            ? 'warning'
                            : 'info'
                      }
                    >
                      {item.severity}
                    </Badge>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-2 text-slate-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </CardContent>
      </Card>
    </section>
  )
}
