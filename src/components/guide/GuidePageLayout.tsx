import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

interface TocItem {
  id: string
  label: string
}

function makeId(text: string, index: number): string {
  return `s${index}-${text.replace(/\s+/g, '-').replace(/[^\w가-힣-]/g, '').slice(0, 32)}`
}

export function GuidePageLayout({
  children,
  refreshKey,
}: {
  children: ReactNode
  refreshKey?: unknown
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const root = contentRef.current
    if (!root) return

    const headings = Array.from(root.querySelectorAll('h2'))
    const newItems: TocItem[] = headings.map((h, i) => {
      const id = makeId(h.textContent ?? '', i)
      h.id = id
      return { id, label: h.textContent ?? '' }
    })
    setItems(newItems)
    if (newItems.length > 0) setActiveId(newItems[0].id)

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting)
        if (hit.length > 0) setActiveId(hit[0].target.id)
      },
      { rootMargin: '-8% 0px -60% 0px', threshold: 0 },
    )
    headings.forEach((h) => io.observe(h))
    return () => io.disconnect()
  }, [refreshKey]) // refreshKey가 바뀔 때(탭 전환 등) 재감지

  return (
    <div className="mx-auto w-full lg:w-4/5 px-4 py-6">
      <div className="flex gap-8">
        <div ref={contentRef} className="min-w-0 flex-1">
          {children}
        </div>

        {items.length > 1 && (
          <aside className="hidden xl:block w-52 shrink-0">
            <nav className="sticky top-18 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-card border border-border bg-white p-3 shadow-card">
              <p className="mb-2 text-xxs font-bold uppercase tracking-widest text-ink-faint">목차</p>
              <ul className="space-y-0.5">
                {items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const el = document.getElementById(item.id)
                        if (!el) return
                        const top = el.getBoundingClientRect().top + window.scrollY - 72
                        window.scrollTo({ top, behavior: 'smooth' })
                      }}
                      className={cn(
                        'block cursor-pointer rounded px-2 py-1 text-xs leading-snug transition-colors',
                        activeId === item.id
                          ? 'bg-brand-red/10 font-semibold text-brand-red'
                          : 'text-ink-muted hover:bg-surface-hover hover:text-ink',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </div>
  )
}
