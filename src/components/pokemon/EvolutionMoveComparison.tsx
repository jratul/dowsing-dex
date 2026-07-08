import { useMemo, useState } from 'react'
import type { Generation, Learnset } from '../../types/move'
import type { Move } from '../../types/move'
import { TypeBadge } from './TypeBadge'
import { SpriteImage } from './SpriteImage'
import { cn } from '../../lib/cn'

const GENERATION_ORDER: Generation[] = ['1세대', '2세대', '3세대', '4세대', '5세대', '6세대', '7세대', '8세대', '9세대']

interface FamilyMember {
  id: number
  nameKo: string
  spriteUrl?: string
}

interface Props {
  familyMembers: FamilyMember[]
  familyLearnsets: Map<number, { learnsets: Learnset[]; recommended: number[] }>
  findMove: (id: number) => Move | undefined
}

export function EvolutionMoveComparison({ familyMembers, familyLearnsets, findMove }: Props) {
  const generations = useMemo(() => {
    const genSet = new Set<Generation>()
    familyLearnsets.forEach(({ learnsets }) => learnsets.forEach((ls) => genSet.add(ls.generation)))
    return GENERATION_ORDER.filter((g) => genSet.has(g))
  }, [familyLearnsets])

  const [selectedGen, setSelectedGen] = useState<Generation | null>(null)
  const [versionIndex, setVersionIndex] = useState(0)

  const activeGen = selectedGen ?? generations[0]

  const versionsForGen = useMemo(() => {
    let best: string[] = []
    familyLearnsets.forEach(({ learnsets }) => {
      const forGen = learnsets.filter((ls) => ls.generation === activeGen).map((ls) => ls.version)
      if (forGen.length > best.length) best = forGen
    })
    return best
  }, [familyLearnsets, activeGen])

  const activeVersion = versionsForGen[versionIndex] ?? versionsForGen[0]

  const memberLearnsets = useMemo(() => {
    return familyMembers.map((m) => {
      const data = familyLearnsets.get(m.id)
      if (!data) return null
      return (
        data.learnsets.find((ls) => ls.generation === activeGen && ls.version === activeVersion) ??
        data.learnsets.find((ls) => ls.generation === activeGen) ??
        null
      )
    })
  }, [familyMembers, familyLearnsets, activeGen, activeVersion])

  const { levelUpMoves, machineMoves, tutorMoves } = useMemo(() => {
    const levelUpMap = new Map<number, number>()
    const machineMap = new Map<number, string>()
    const tutorSet = new Set<number>()

    memberLearnsets.forEach((ls) => {
      if (!ls) return
      ls.levelUp.forEach(({ moveId, level }) => {
        const cur = levelUpMap.get(moveId)
        if (cur === undefined || level < cur) levelUpMap.set(moveId, level)
      })
      ls.machines.forEach(({ moveId, machine, number }) => {
        if (!machineMap.has(moveId))
          machineMap.set(moveId, `${machine}${String(number).padStart(3, '0')}`)
      })
      ls.tutor.forEach(({ moveId }) => tutorSet.add(moveId))
    })

    return {
      levelUpMoves: Array.from(levelUpMap.entries())
        .sort((a, b) => a[1] - b[1])
        .map(([id]) => id),
      machineMoves: Array.from(machineMap.entries())
        .sort((a, b) => a[1].localeCompare(b[1]))
        .map(([id]) => id),
      tutorMoves: Array.from(tutorSet),
    }
  }, [memberLearnsets])

  const allLoaded = familyMembers.every((m) => familyLearnsets.has(m.id))

  if (!allLoaded) {
    return <p className="text-xs text-ink-faint">기술 데이터 불러오는 중…</p>
  }

  if (generations.length === 0) {
    return <p className="text-xs text-ink-faint">기술 데이터가 없습니다.</p>
  }

  const colCount = 5 + familyMembers.length

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-1.5">
          {generations.map((gen) => (
            <button
              key={gen}
              type="button"
              onClick={() => {
                setSelectedGen(gen)
                setVersionIndex(0)
              }}
              className={cn(
                'rounded-chip border px-3 py-1.5 text-xs font-bold transition-colors',
                activeGen === gen
                  ? 'border-brand-red bg-brand-red text-white'
                  : 'border-border-strong text-ink hover:border-brand-red hover:text-brand-red',
              )}
            >
              {gen}
            </button>
          ))}
        </div>
        {versionsForGen.length > 1 && (
          <div className="flex gap-1.5">
            {versionsForGen.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setVersionIndex(i)}
                className={cn(
                  'rounded-chip px-3 py-1.5 text-xs font-bold transition-colors',
                  versionIndex === i
                    ? 'bg-brand-red/10 text-brand-red'
                    : 'bg-surface-hover text-ink-muted hover:text-ink',
                )}
              >
                {v}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-3 text-left text-xxs font-bold text-ink-faint">기술명</th>
              <th className="py-2 pr-3 text-left text-xxs font-bold text-ink-faint">타입</th>
              <th className="py-2 pr-3 text-left text-xxs font-bold text-ink-faint">분류</th>
              <th className="py-2 pr-3 text-right text-xxs font-bold text-ink-faint">위력</th>
              <th className="py-2 pr-4 text-right text-xxs font-bold text-ink-faint">명중</th>
              {familyMembers.map((m) => (
                <th key={m.id} className="min-w-20 px-2 py-2 text-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <SpriteImage src={m.spriteUrl} alt={m.nameKo} width={32} height={32} className="h-8 w-8" />
                    <span className="text-xxs font-bold text-ink-faint">{m.nameKo}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {levelUpMoves.length > 0 && (
              <>
                <tr className="bg-surface-hover">
                  <td colSpan={colCount} className="px-1 py-1.5 text-xxs font-black tracking-wide text-ink-faint">
                    레벨업
                  </td>
                </tr>
                {levelUpMoves.map((moveId) => {
                  const move = findMove(moveId)
                  if (!move) return null
                  return (
                    <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                      <td className="py-1.5 pr-3 font-bold text-ink">{move.nameKo}</td>
                      <td className="py-1.5 pr-3">
                        <TypeBadge type={move.type} size="sm" />
                      </td>
                      <td className="py-1.5 pr-3 text-ink-muted">{move.category}</td>
                      <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                      <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                      {memberLearnsets.map((ls, i) => {
                        const lm = ls?.levelUp.find((m) => m.moveId === moveId)
                        return (
                          <td key={familyMembers[i].id} className="px-2 py-1.5 text-center font-bold text-ink">
                            {lm ? `Lv.${lm.level}` : <span className="text-ink-faint">—</span>}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </>
            )}

            {machineMoves.length > 0 && (
              <>
                <tr className="bg-surface-hover">
                  <td colSpan={colCount} className="px-1 py-1.5 text-xxs font-black tracking-wide text-ink-faint">
                    기술머신·비전머신
                  </td>
                </tr>
                {machineMoves.map((moveId) => {
                  const move = findMove(moveId)
                  if (!move) return null
                  return (
                    <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                      <td className="py-1.5 pr-3 font-bold text-ink">{move.nameKo}</td>
                      <td className="py-1.5 pr-3">
                        <TypeBadge type={move.type} size="sm" />
                      </td>
                      <td className="py-1.5 pr-3 text-ink-muted">{move.category}</td>
                      <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                      <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                      {memberLearnsets.map((ls, i) => {
                        const mm = ls?.machines.find((m) => m.moveId === moveId)
                        return (
                          <td key={familyMembers[i].id} className="px-2 py-1.5 text-center font-bold text-ink">
                            {mm ? (
                              `${mm.machine}${String(mm.number).padStart(2, '0')}`
                            ) : (
                              <span className="text-ink-faint">—</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </>
            )}

            {tutorMoves.length > 0 && (
              <>
                <tr className="bg-surface-hover">
                  <td colSpan={colCount} className="px-1 py-1.5 text-xxs font-black tracking-wide text-ink-faint">
                    가르침
                  </td>
                </tr>
                {tutorMoves.map((moveId) => {
                  const move = findMove(moveId)
                  if (!move) return null
                  return (
                    <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                      <td className="py-1.5 pr-3 font-bold text-ink">{move.nameKo}</td>
                      <td className="py-1.5 pr-3">
                        <TypeBadge type={move.type} size="sm" />
                      </td>
                      <td className="py-1.5 pr-3 text-ink-muted">{move.category}</td>
                      <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                      <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                      {memberLearnsets.map((ls, i) => {
                        const has = ls?.tutor.some((m) => m.moveId === moveId)
                        return (
                          <td key={familyMembers[i].id} className="px-2 py-1.5 text-center font-bold text-ink">
                            {has ? '●' : <span className="text-ink-faint">—</span>}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
