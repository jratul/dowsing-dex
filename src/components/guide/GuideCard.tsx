import type { Guide } from '../../types/guide'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { Card } from '../ui/Card'
import { cn } from '../../lib/cn'

export interface GuideCardProps {
  guide: Pick<Guide, 'slug' | 'category' | 'title' | 'iconPokemonId' | 'summary'>
  iconSpriteUrl?: string
  variant?: 'banner' | 'row'
}

export function GuideCard({ guide, iconSpriteUrl, variant = 'banner' }: GuideCardProps) {
  const style = CATEGORY_STYLE[guide.category]

  if (variant === 'row') {
    return (
      <Card className="flex gap-3 p-3">
        <div className={cn('relative flex h-24 w-24 shrink-0 items-center justify-center rounded-button', style.bannerClass)}>
          <span className={cn('absolute top-1 left-1 rounded-chip bg-white px-2 py-0.5 text-xxs font-bold', style.pillClass)}>
            {guide.category}
          </span>
          {iconSpriteUrl && (
            <img src={iconSpriteUrl} alt="" width={80} height={80} style={{ imageRendering: 'pixelated' }} />
          )}
        </div>
        <div className="flex flex-col justify-center gap-1">
          <span className="text-sm font-bold text-ink">{guide.title}</span>
          <span className="text-xs text-ink-faint">{guide.summary ?? '자세한 공략을 확인해보세요···'}</span>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className={cn('relative flex h-36 items-center justify-end px-4', style.bannerClass)}>
        <span className={cn('absolute top-3 left-3 rounded-chip bg-white px-2.5 py-1 text-xs font-bold', style.pillClass)}>
          {guide.category}
        </span>
        {iconSpriteUrl && (
          <img src={iconSpriteUrl} alt="" width={112} height={112} style={{ imageRendering: 'pixelated' }} />
        )}
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="text-sm font-bold text-ink">{guide.title}</span>
        {guide.summary && <span className="line-clamp-2 text-xs text-ink-muted">{guide.summary}</span>}
      </div>
    </Card>
  )
}
