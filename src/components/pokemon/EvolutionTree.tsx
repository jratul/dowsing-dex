import { Link } from 'react-router-dom'
import type { EvolutionStage } from '../../types/pokemon'
import { cn } from '../../lib/cn'
import { SpriteImage } from './SpriteImage'

export interface EvolutionTreeProps {
  stages: EvolutionStage[]
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
  linkState?: object
}

function StageNode({
  stage,
  currentPokemonId,
  renderPokemon,
  linkState,
}: {
  stage: EvolutionStage
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
  linkState?: object
}) {
  const info = renderPokemon(stage.pokemonId)
  const isCurrent = stage.pokemonId === currentPokemonId

  return (
    <div className="flex items-center gap-3">
      <Link
        to={`/pokemon/${stage.pokemonId}`}
        state={linkState}
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
      </Link>

      {stage.children && stage.children.length > 0 && (
        <div className="flex flex-col gap-3">
          {stage.children.map((child) => (
            <div key={child.pokemonId} className="flex items-center gap-3">
              <div className="flex shrink-0 flex-col items-center whitespace-nowrap text-xxs font-bold text-ink-faint">
                <span>→</span>
                {child.triggerIconUrl && (
                  <img src={child.triggerIconUrl} alt={child.trigger ?? ''} width={24} height={24} />
                )}
                {child.trigger && <span>{child.trigger}</span>}
              </div>
              <StageNode stage={child} currentPokemonId={currentPokemonId} renderPokemon={renderPokemon} linkState={linkState} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function EvolutionTree({ stages, currentPokemonId, renderPokemon, linkState }: EvolutionTreeProps) {
  return (
    <div className="scrollbar-hide overflow-x-auto">
      <div className="flex flex-col gap-4 py-1">
        {stages.map((stage) => (
          <StageNode
            key={stage.pokemonId}
            stage={stage}
            currentPokemonId={currentPokemonId}
            renderPokemon={renderPokemon}
            linkState={linkState}
          />
        ))}
      </div>
    </div>
  )
}
