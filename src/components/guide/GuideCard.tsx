import type { Guide } from '../../types/guide'
import { Card } from '../ui/Card'

export interface GuideCardProps {
  guide: Pick<Guide, 'slug' | 'category' | 'title' | 'iconPokemonId' | 'summary'>
  iconSpriteUrl?: string
}

export function GuideCard({ guide, iconSpriteUrl }: GuideCardProps) {
  return (
    <Card className="flex gap-3 p-3">
      {iconSpriteUrl ? (
        <img src={iconSpriteUrl} alt="" width={48} height={48} className="h-12 w-12 shrink-0" />
      ) : (
        <div className="h-12 w-12 shrink-0 rounded-full bg-border" />
      )}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-brand-red">{guide.category}</span>
        <span className="text-sm font-bold text-ink">{guide.title}</span>
        {guide.summary && <span className="text-xs text-ink-muted">{guide.summary}</span>}
      </div>
    </Card>
  )
}
