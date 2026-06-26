import type { ReactNode } from 'react'

export function ShowcaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-b border-border py-6">
      <h2 className="text-sm font-black tracking-wide text-ink-faint uppercase">{title}</h2>
      {children}
    </section>
  )
}
