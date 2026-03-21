import { medicines } from '../../../data/mockData'
import { Badge } from '../../../components/ui/Badge'
import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'

export function MedicinesPage() {
  return (
    <section>
      <Card>
        <CardHeader className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-900">All Medicines</h3>
          <Button type="button">Add Medicine</Button>
        </CardHeader>
        <CardContent className="overflow-auto">
          <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Name</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Category</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Strength</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Stock</th>
                <th className="border-b border-slate-100 px-3 py-2 text-left text-slate-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <strong className="text-slate-900">{medicine.name}</strong>
                    <div className="text-xs text-slate-500">{medicine.genericName}</div>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-2">{medicine.category}</td>
                  <td className="border-b border-slate-100 px-3 py-2">{medicine.strength}</td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Badge tone={medicine.stock <= medicine.refillThreshold ? 'warning' : 'success'}>
                      {medicine.stock} units
                    </Badge>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Button variant="outline" type="button">
                      View
                    </Button>
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
