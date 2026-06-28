import type { EvolutionStage } from '../../types/pokemon'
import { cn } from '../../lib/cn'
import { SpriteImage } from './SpriteImage'

export interface EvolutionTreeProps {
  stages: EvolutionStage[]
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
  onSelect?: (id: number) => void
}

function StageNode({
  stage,
  currentPokemonId,
  renderPokemon,
  onSelect,
}: {
  stage: EvolutionStage
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
  onSelect?: (id: number) => void
}) {
  const info = renderPokemon(stage.pokemonId)
  const isCurrent = stage.pokemonId === currentPokemonId

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onSelect ? () => onSelect(stage.pokemonId) : undefined}
        disabled={!onSelect}
        className="flex flex-col items-center gap-1"
      >
        <div
          className={cn(
            'flex h-24 w-24 items-center justify-center rounded-full border-2',
            isCurrent ? 'border-brand-red bg-brand-red/10' : 'border-border hover:bg-surface-hover',
          )}
        >
          <SpriteImage src={info.spriteUrl} alt={info.nameKo} width={80} height={80} rounded="full" className="h-20 w-20" />
        </div>
        <span className={cn('text-xs font-bold', isCurrent ? 'text-brand-red' : 'text-ink')}>{info.nameKo}</span>
      </button>

      {stage.children && stage.children.length > 0 && (
        <div className="flex flex-col gap-3">
          {stage.children.map((child) => (
            <div key={child.pokemonId} className="flex items-center gap-3">
              <div className="flex shrink-0 flex-col items-center whitespace-nowrap text-[10px] font-bold text-ink-faint">
                <span>→</span>
                {child.triggerIconUrl && (
                  <img src={child.triggerIconUrl} alt={child.trigger ?? ''} width={24} height={24} />
                )}
                {child.trigger && <span>{child.trigger}</span>}
              </div>
              <StageNode stage={child} currentPokemonId={currentPokemonId} renderPokemon={renderPokemon} onSelect={onSelect} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function EvolutionTree({ stages, currentPokemonId, renderPokemon, onSelect }: EvolutionTreeProps) {
  return (
    <div className="scrollbar-hide flex flex-col gap-4 overflow-x-auto">
      {stages.map((stage) => (
        <StageNode
          key={stage.pokemonId}
          stage={stage}
          currentPokemonId={currentPokemonId}
          renderPokemon={renderPokemon}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
