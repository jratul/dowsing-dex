import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Hero, type HeroProps } from './Hero'
import { cn } from '../../lib/cn'

export interface HeroCarouselProps {
  slides: HeroProps[]
  autoplayMs?: number
}

export function HeroCarousel({ slides, autoplayMs = 6000 }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: autoplayMs })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  if (slides.length === 0) return null

  if (slides.length === 1) {
    return <Hero {...slides[0]} />
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <Hero {...slide} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="이전 배너"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-chip bg-white text-ink shadow-card hover:bg-surface-hover sm:flex"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="다음 배너"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-chip bg-white text-ink shadow-card hover:bg-surface-hover sm:flex"
      >
        →
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}번째 배너로 이동`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn('h-1.5 rounded-chip transition-all', i === selectedIndex ? 'w-6 bg-brand-red' : 'w-1.5 bg-ink/20')}
          />
        ))}
      </div>
    </div>
  )
}
