import type { EvolutionStage } from '../../types/pokemon'
import { cn } from '../../lib/cn'

export interface EvolutionTreeProps {
  stages: EvolutionStage[]
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
}

function StageNode({
  stage,
  currentPokemonId,
  renderPokemon,
}: {
  stage: EvolutionStage
  currentPokemonId: number
  renderPokemon: (id: number) => { nameKo: string; spriteUrl?: string }
}) {
  const info = renderPokemon(stage.pokemonId)
  const isCurrent = stage.pokemonId === currentPokemonId

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-1">
        <div
          className={cn(
            'flex h-16 w-16 items-center justify-center rounded-full border-2',
            isCurrent ? 'border-brand-red' : 'border-border',
          )}
        >
          {info.spriteUrl ? (
            <img src={info.spriteUrl} alt={info.nameKo} width={56} height={56} />
          ) : null}
        </div>
        <span className={cn('text-xs font-bold', isCurrent ? 'text-brand-red' : 'text-ink')}>{info.nameKo}</span>
      </div>

      {stage.children && stage.children.length > 0 && (
        <div className="flex flex-col gap-3">
          {stage.children.map((child) => (
            <div key={child.pokemonId} className="flex items-center gap-3">
              <div className="flex flex-col items-center text-[10px] font-bold text-ink-faint">
                <span>→</span>
                {child.trigger && <span>{child.trigger}</span>}
              </div>
              <StageNode stage={child} currentPokemonId={currentPokemonId} renderPokemon={renderPokemon} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function EvolutionTree({ stages, currentPokemonId, renderPokemon }: EvolutionTreeProps) {
  return (
    <div className="flex flex-col gap-4 overflow-x-auto">
      {stages.map((stage) => (
        <StageNode key={stage.pokemonId} stage={stage} currentPokemonId={currentPokemonId} renderPokemon={renderPokemon} />
      ))}
    </div>
  )
}
