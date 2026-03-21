import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function ReportsPage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Weekly Health Summary</h3>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-semibold text-slate-800">Total Doses</h4>
            <p className="mt-1 text-2xl font-bold text-slate-900">42</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-semibold text-slate-800">Taken On Time</h4>
            <p className="mt-1 text-2xl font-bold text-emerald-600">36</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-semibold text-slate-800">Missed Doses</h4>
            <p className="mt-1 text-2xl font-bold text-rose-600">4</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="font-semibold text-slate-800">Skipped Doses</h4>
            <p className="mt-1 text-2xl font-bold text-amber-600">2</p>
          </article>
        </CardContent>
      </Card>
    </section>
  )
}
