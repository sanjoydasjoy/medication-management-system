import { doctors } from '../../../data/mockData'
import { Badge } from '../../../components/ui/Badge'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function DoctorsPage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Nearby Doctors</h3>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.id} className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-lg font-semibold text-slate-900">{doctor.fullName}</h4>
              <p className="text-sm text-slate-700">{doctor.speciality}</p>
              <p className="text-sm text-slate-600">{doctor.hospital}</p>
              <p className="text-sm text-slate-600">{doctor.distanceKm} km away</p>
              <p className="text-sm text-slate-600">Rating: {doctor.rating}</p>
              <Badge tone={doctor.availableToday ? 'success' : 'warning'}>
                {doctor.availableToday ? 'Available Today' : 'Next Available Tomorrow'}
              </Badge>
            </article>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
