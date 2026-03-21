import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-emerald-500 text-white hover:bg-emerald-600 border border-emerald-500 shadow-sm shadow-emerald-500/20',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-sm',
  outline: 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent',
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
