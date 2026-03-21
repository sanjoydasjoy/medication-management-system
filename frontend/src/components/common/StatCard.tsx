import { cn } from '../../lib/cn'

interface StatCardProps {
  label: string
  value: string
  trend?: string
  tone?: 'info' | 'warning' | 'success'
}

export function StatCard({ label, value, trend, tone = 'info' }: StatCardProps) {
  const toneClass = {
    info: 'from-cyan-50 to-white border-cyan-100',
    success: 'from-emerald-50 to-white border-emerald-100',
    warning: 'from-amber-50 to-white border-amber-100',
  }

  return (
    <article className={cn('rounded-2xl border bg-gradient-to-br p-5 shadow-lg shadow-slate-100', toneClass[tone])}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-slate-900">{value}</p>
      {trend ? <p className="mt-1 text-sm text-slate-500">{trend}</p> : null}
    </article>
  )
}
