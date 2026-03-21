import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, ChevronDown, Pill, ShieldCheck, Stethoscope } from 'lucide-react'
import { Badge } from '../../../components/ui/Badge'
import { Card, CardContent } from '../../../components/ui/Card'
import { cn } from '../../../lib/cn'

const workflows = {
  Patients: {
    title: 'Patient-friendly reminders and progress',
    description:
      'Patients receive clear dose timelines, refill nudges, and adherence tracking without medical jargon.',
  },
  Caregivers: {
    title: 'Shared medication oversight',
    description:
      'Caregivers monitor multiple plans, missed doses, and high-risk interactions from one dashboard.',
  },
  Clinics: {
    title: 'Clinic-level medication visibility',
    description:
      'Clinical teams can review adherence trends, side-effect notes, and weekly summaries for follow-up.',
  },
}

const faqItems = [
  {
    q: 'Can I use MediGuide before creating an account?',
    a: 'You can explore the landing page, but dashboard features require sign up and login.',
  },
  {
    q: 'Will reminders and schedules sync across devices?',
    a: 'Yes, once backend API integration is enabled, schedules are linked to your account.',
  },
  {
    q: 'Does the system support interaction checks?',
    a: 'Yes, MediGuide includes a dedicated interaction checker for known medicine combinations.',
  },
]

export function HomePage() {
  const [activeWorkflow, setActiveWorkflow] = useState<keyof typeof workflows>('Patients')
  const [openFaq, setOpenFaq] = useState<number>(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20">
          <nav className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Pill className="text-emerald-300" size={20} />
              MediGuide
            </div>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#features" className="hover:text-white">
                Features
              </a>
              <a href="#workflows" className="hover:text-white">
                Workflows
              </a>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-slate-300 sm:block">
                Guest Profile
              </div>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-500 bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </header>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8"
          >
            <Badge tone="success" className="mb-4">
              Smart Medication Management
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Build healthy routines with a modern medication command center
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Track doses, monitor adherence, detect interactions, and keep clinicians in the
              loop with a clean sign-up to dashboard workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-500 bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Start For Free
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                Go To Login
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="h-full border-slate-800 bg-slate-900">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-semibold">Live Snapshot</h3>
                <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Next Dose</p>
                  <p className="mt-1 font-semibold text-white">08:00 PM - Metformin XR</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Adherence</p>
                  <p className="mt-1 font-semibold text-emerald-300">91% this week</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-800/70 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Alerts</p>
                  <p className="mt-1 font-semibold text-amber-300">2 moderate interactions</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="features" className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Standard features for real medication workflows</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Medicine Catalog', desc: 'Track medicine metadata, stock, and refill limits.', icon: Pill },
              { title: 'Interaction Guard', desc: 'Detect risky medicine combinations early.', icon: ShieldCheck },
              { title: 'Adherence Analytics', desc: 'Visualize missed and taken doses by trend.', icon: Activity },
              { title: 'Doctor Connect', desc: 'Keep care-team details and contacts in one place.', icon: Stethoscope },
            ].map((item) => (
              <Card key={item.title} className="border-slate-800 bg-slate-950">
                <CardContent className="space-y-2 p-4">
                  <item.icon className="text-emerald-300" size={18} />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="workflows" className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Interactive workflow previews</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.keys(workflows).map((item) => {
              const key = item as keyof typeof workflows
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveWorkflow(key)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                    activeWorkflow === key
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white',
                  )}
                >
                  {key}
                </button>
              )
            })}
          </div>
          <motion.article
            key={activeWorkflow}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 rounded-2xl border border-slate-700 bg-slate-800/60 p-5"
          >
          <h3>{workflows[activeWorkflow].title}</h3>
            <p className="mt-2 text-slate-300">{workflows[activeWorkflow].description}</p>
          </motion.article>
        </section>

        <section id="faq" className="mt-8 mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
          <div className="mt-4 space-y-3">
          {faqItems.map((item, index) => (
              <Card key={item.q} className="border-slate-800 bg-slate-950">
              <button
                type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={cn('transition-transform', openFaq === index ? 'rotate-180' : '')}
                  />
              </button>
                {openFaq === index ? <p className="px-4 pb-4 text-sm text-slate-400">{item.a}</p> : null}
              </Card>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}
