import { useState } from 'react'
import { cn } from '../../lib/cn'

export interface SpriteImageProps {
  src?: string
  alt: string
  width: number
  height: number
  loading?: 'lazy' | 'eager'
  pixelated?: boolean
  rounded?: 'full' | 'card' | 'none'
  /** 실제 표시 크기를 정하는 너비/높이 유틸리티 클래스(예: "h-32 w-32")를 반드시 포함해야 한다. */
  className?: string
}

const ROUNDED_CLASS = { full: 'rounded-full', card: 'rounded-card', none: '' }

/** 로드되기 전까지 스켈레톤(펄스)을 보여주고, 로드되면 페이드인하는 스프라이트 이미지. */
export function SpriteImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  pixelated = true,
  rounded = 'card',
  className,
}: SpriteImageProps) {
  const [loaded, setLoaded] = useState(false)
  const roundedClass = ROUNDED_CLASS[rounded]

  if (!src) {
    return <span className={cn('inline-block bg-surface-hover', roundedClass, className)} />
  }

  return (
    <span className={cn('relative inline-block', className)}>
      {!loaded && <span className={cn('absolute inset-0 skeleton-shimmer', roundedClass)} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn('absolute inset-0 h-full w-full transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')}
        style={pixelated ? { imageRendering: 'pixelated' } : undefined}
      />
    </span>
  )
}
