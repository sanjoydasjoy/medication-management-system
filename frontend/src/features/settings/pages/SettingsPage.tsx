import { Button } from '../../../components/ui/Button'
import { Card, CardContent, CardHeader } from '../../../components/ui/Card'
import { Input } from '../../../components/ui/Input'

export function SettingsPage() {
  return (
    <section>
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-slate-900">Profile Settings</h3>
        </CardHeader>
        <CardContent>
          <form className="grid max-w-xl gap-4">
            <label className="grid gap-2 text-sm text-slate-600">
              Full Name
              <Input type="text" defaultValue="John Doe" />
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Email
              <Input type="email" defaultValue="john@example.com" />
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Reminder Preference
              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800"
                defaultValue="Email + Push"
              >
              <option>Email + Push</option>
              <option>Email only</option>
              <option>Push only</option>
            </select>
            </label>
            <Button type="button" className="w-fit">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
