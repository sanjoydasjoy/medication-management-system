import { plans } from '../../../data/mockData'
import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function SchedulePage() {
  return (
    <section>
      <Card>
        <CardHeader className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-900">Medication Plans</h3>
          <Button type="button">Create Plan</Button>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-lg font-semibold text-slate-900">{plan.medicineName}</h4>
              <p className="mt-2 text-sm text-slate-700">{plan.dosage}</p>
              <p className="text-sm text-slate-600">{plan.frequency}</p>
              <p className="mt-1 text-sm text-slate-600">Next Dose: {plan.nextDoseAt}</p>
              <p className="text-sm text-slate-600">Duration: {plan.durationDays} days</p>
            </article>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
