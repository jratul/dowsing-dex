import type { ReactNode } from 'react'

export interface HeroProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="flex flex-col items-center gap-3 px-4 py-12 text-center">
      <h1 className="text-3xl font-black text-ink">{title}</h1>
      {subtitle && <p className="text-ink-muted">{subtitle}</p>}
      {children}
    </section>
  )
}
