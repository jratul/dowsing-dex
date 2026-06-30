import { useMemo, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import type { Generation, Learnset, Move } from '../../types/move'
import { TypeBadge } from './TypeBadge'
import { cn } from '../../lib/cn'

const GENERATION_ORDER: Generation[] = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대', '9세대']

export interface MoveListProps {
  learnsets: Learnset[]
  findMove: (id: number) => Move | undefined
  recommendedMoveIds?: number[]
}

function MoveRow({ leading, move }: { leading: string; move: Move }) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr_3.5rem_3rem_2.5rem_2.5rem_2rem] items-center gap-2 py-1.5 text-xs">
      <span className="font-bold text-ink-faint">{leading}</span>
      <span className="font-bold text-ink">{move.nameKo}</span>
      <TypeBadge type={move.type} size="sm" />
      <span className="text-ink-muted">{move.category}</span>
      <span className="text-right text-ink-muted">{move.power ?? '-'}</span>
      <span className="text-right text-ink-muted">{move.accuracy ?? '-'}</span>
      <span className="text-right text-ink-muted">{move.pp}</span>
    </div>
  )
}

function MoveTableHeader() {
  return (
    <div className="grid grid-cols-[2.5rem_1fr_3.5rem_3rem_2.5rem_2.5rem_2rem] gap-2 border-b border-border pb-1.5 text-xxs font-bold text-ink-faint">
      <span>Lv/No</span>
      <span>기술</span>
      <span>타입</span>
      <span>분류</span>
      <span className="text-right">위력</span>
      <span className="text-right">명중</span>
      <span className="text-right">PP</span>
    </div>
  )
}

export function MoveList({ learnsets, findMove, recommendedMoveIds }: MoveListProps) {
  const generations = useMemo(
    () => GENERATION_ORDER.filter((gen) => learnsets.some((ls) => ls.generation === gen)),
    [learnsets],
  )
  const [generation, setGeneration] = useState<Generation>(generations[0])
  const [versionIndex, setVersionIndex] = useState(0)

  const activeGeneration = generations.includes(generation) ? generation : generations[0]
  const learnsetsForGeneration = learnsets.filter((ls) => ls.generation === activeGeneration)
  const learnset = learnsetsForGeneration[versionIndex] ?? learnsetsForGeneration[0]

  function handleGenerationChange(value: string) {
    setGeneration(value as Generation)
    setVersionIndex(0)
  }

  if (!learnset) return null

  return (
    <Tabs.Root value={activeGeneration} onValueChange={handleGenerationChange}>
      <Tabs.List className="mb-4 flex gap-2 overflow-x-auto">
        {generations.map((gen) => (
          <Tabs.Trigger
            key={gen}
            value={gen}
            className={cn(
              'shrink-0 rounded-chip border border-border-strong px-3 py-1.5 text-xs font-bold text-ink',
              'data-[state=active]:border-brand-red data-[state=active]:bg-brand-red data-[state=active]:text-white',
            )}
          >
            {gen}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Tabs.Content value={activeGeneration} className="flex flex-col gap-4">
        {recommendedMoveIds && recommendedMoveIds.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-black text-ink-faint">추천 기술 배치</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {recommendedMoveIds.map((moveId) => {
                const move = findMove(moveId)
                if (!move) return null
                return (
                  <div key={moveId} className="flex flex-col gap-1 rounded-card border border-border-strong bg-surface-hover p-2">
                    <span className="text-xs font-bold text-ink">{move.nameKo}</span>
                    <div className="flex items-center justify-between">
                      <TypeBadge type={move.type} size="sm" />
                      <span className="text-xxs font-bold text-ink-faint">{move.category}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {learnsetsForGeneration.length > 1 && (
          <div className="flex gap-2">
            {learnsetsForGeneration.map((ls, i) => (
              <button
                key={ls.version}
                type="button"
                onClick={() => setVersionIndex(i)}
                className={cn(
                  'rounded-chip px-3 py-1 text-xs font-bold',
                  i === versionIndex ? 'bg-brand-red text-white' : 'bg-surface-hover text-ink-muted',
                )}
              >
                {ls.version}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-black text-ink-faint">레벨업으로 배우는 기술</h3>
          <MoveTableHeader />
          <div className="flex flex-col">
            {learnset.levelUp
              .slice()
              .sort((a, b) => a.level - b.level)
              .map(({ moveId, level }) => {
                const move = findMove(moveId)
                return move ? <MoveRow key={moveId} leading={`Lv${level}`} move={move} /> : null
              })}
          </div>
        </div>

        {learnset.machines.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-black text-ink-faint">기술머신으로 배우는 기술</h3>
            <MoveTableHeader />
            <div className="flex flex-col">
              {learnset.machines.map(({ moveId, machine, number }) => {
                const move = findMove(moveId)
                return move ? (
                  <MoveRow key={moveId} leading={`${machine}${number.toString().padStart(2, '0')}`} move={move} />
                ) : null
              })}
            </div>
          </div>
        )}

        {learnset.tutor.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-black text-ink-faint">가르침으로 배우는 기술</h3>
            <MoveTableHeader />
            <div className="flex flex-col">
              {learnset.tutor.map(({ moveId }) => {
                const move = findMove(moveId)
                return move ? <MoveRow key={moveId} leading="-" move={move} /> : null
              })}
            </div>
          </div>
        )}
      </Tabs.Content>
    </Tabs.Root>
  )
}
