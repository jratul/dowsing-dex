import type { ReactNode } from 'react'

export interface HeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  imageUrl?: string
  children?: ReactNode
}

export function Hero({ eyebrow, title, subtitle, imageUrl, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-card bg-linear-to-br from-brand-red/8 via-brand-red/3 to-white px-6 py-10 sm:px-10">
      <div className="flex flex-col items-start gap-4 sm:max-w-md">
        {eyebrow && (
          <span className="rounded-chip bg-white px-3 py-1 text-xs font-bold text-ink-muted">{eyebrow}</span>
        )}
        <h1 className="text-3xl leading-tight font-black text-ink whitespace-pre-line">{title}</h1>
        {subtitle && <p className="text-sm text-ink-muted whitespace-pre-line">{subtitle}</p>}
        {children && <div className="flex gap-2">{children}</div>}
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="pointer-events-none relative mx-auto mt-4 h-28 w-28 object-contain sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:h-56 sm:w-56"
        />
      )}
    </section>
  )
}
