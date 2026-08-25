import { useMemo, useState } from 'react'
import type { Generation, Learnset } from '../../types/move'
import type { Move } from '../../types/move'
import { TypeBadge } from './TypeBadge'
import { SpriteImage } from './SpriteImage'
import { cn } from '../../lib/cn'

interface FamilyMember {
  id: number
  nameKo: string
  /** 알로라·히스이 등 리전폼 라벨. 원종과 이름이 같아 이게 없으면 열을 구분할 수 없다. */
  formLabel?: string
  spriteUrl?: string
}

interface Props {
  familyMembers: FamilyMember[]
  familyLearnsets: Map<number, { learnsets: Learnset[]; recommended: number[] }>
  findMove: (id: number) => Move | undefined
  /** 세대·버전 필터는 도감 상세 페이지가 단독으로 소유한다. 여기서 탭을 또 그리지 않는다. */
  activeGen: Generation
  activeVersion: string
  /** 제목까지 함께 렌더한다. 그 버전에 계열 멤버가 하나도 없으면 제목도 같이 사라진다. */
  title: string
}

export function EvolutionMoveComparison({
  familyMembers,
  familyLearnsets,
  findMove,
  activeGen,
  activeVersion,
  title,
}: Props) {
  const [openMoveIds, setOpenMoveIds] = useState<Set<number>>(new Set())

  function toggleMove(id: number) {
    setOpenMoveIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const activeMembers = useMemo(() => {
    return familyMembers
      .map((member) => {
        const data = familyLearnsets.get(member.id)
        // 그 버전에 실제로 등장하는 폼만 인정한다. 세대 단위로 폴백하면 히스이 블레이범이
        // BDSP 탭에도 레전드 아르세우스 학습셋을 달고 나타난다.
        const learnset =
          data?.learnsets.find((ls) => ls.generation === activeGen && ls.version === activeVersion) ?? null
        return { member, learnset }
      })
      .filter((entry): entry is { member: FamilyMember; learnset: Learnset } => entry.learnset !== null)
  }, [familyMembers, familyLearnsets, activeGen, activeVersion])

  const { levelUpMoves, machineMoves, tutorMoves } = useMemo(() => {
    const levelUpMap = new Map<number, number>()
    const machineMap = new Map<number, string>()
    const tutorSet = new Set<number>()

    activeMembers.forEach(({ learnset: ls }) => {
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
  }, [activeMembers])

  const allLoaded = familyMembers.every((m) => familyLearnsets.has(m.id))

  if (!allLoaded) {
    return <p className="text-xs text-ink-faint">기술 데이터 불러오는 중…</p>
  }

  if (activeMembers.length === 0) return null

  const colCount = 5 + activeMembers.length

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-black text-ink-faint">{title}</h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-3 text-left text-xxs font-bold whitespace-nowrap text-ink-faint">기술명</th>
              <th className="py-2 pr-3 text-left text-xxs font-bold text-ink-faint">타입</th>
              <th className="py-2 pr-3 text-left text-xxs font-bold text-ink-faint">분류</th>
              <th className="py-2 pr-3 text-right text-xxs font-bold text-ink-faint">위력</th>
              <th className="py-2 pr-4 text-right text-xxs font-bold text-ink-faint">명중</th>
              {activeMembers.map(({ member: m }) => (
                <th key={m.id} className="min-w-20 px-2 py-2 text-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <SpriteImage src={m.spriteUrl} alt={m.nameKo} width={32} height={32} className="h-8 w-8" />
                    <span className="text-xxs font-bold text-ink-faint">
                      {m.nameKo}
                      {m.formLabel && <span className="block">({m.formLabel})</span>}
                    </span>
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
                  const isOpen = openMoveIds.has(moveId)
                  return (
                    <>
                      <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                        <td className="py-1.5 pr-3 whitespace-nowrap">
                          <button type="button" className={cn('flex items-center gap-1 text-left font-bold text-ink', move.effectKo && 'cursor-pointer')} onClick={move.effectKo ? () => toggleMove(moveId) : undefined}>
                            {move.nameKo}
                            {move.effectKo && <span className="text-xxs text-ink-faint">{isOpen ? '▲' : '▼'}</span>}
                          </button>
                        </td>
                        <td className="py-1.5 pr-3"><TypeBadge type={move.type} size="sm" /></td>
                        <td className="py-1.5 pr-3 whitespace-nowrap text-ink-muted">{move.category}</td>
                        <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                        <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                        {activeMembers.map(({ member, learnset: ls }) => {
                          // 같은 기술이 여러 레벨에 있을 수 있다. 행 정렬 기준과 맞추려면 최소 레벨을 쓴다.
                          const levels = ls.levelUp.filter((m) => m.moveId === moveId).map((m) => m.level)
                          return (
                            <td key={member.id} className="px-2 py-1.5 text-center font-bold text-ink">
                              {levels.length > 0 ? `Lv.${Math.min(...levels)}` : <span className="text-ink-faint">—</span>}
                            </td>
                          )
                        })}
                      </tr>
                      {isOpen && move.effectKo && (
                        <tr key={`${moveId}-desc`} className="border-b border-border/50">
                          <td colSpan={colCount} className="py-2 pl-1 pr-3 text-xs leading-relaxed text-ink">{move.effectKo}</td>
                        </tr>
                      )}
                    </>
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
                  const isOpen = openMoveIds.has(moveId)
                  return (
                    <>
                      <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                        <td className="py-1.5 pr-3 whitespace-nowrap">
                          <button type="button" className={cn('flex items-center gap-1 text-left font-bold text-ink', move.effectKo && 'cursor-pointer')} onClick={move.effectKo ? () => toggleMove(moveId) : undefined}>
                            {move.nameKo}
                            {move.effectKo && <span className="text-xxs text-ink-faint">{isOpen ? '▲' : '▼'}</span>}
                          </button>
                        </td>
                        <td className="py-1.5 pr-3"><TypeBadge type={move.type} size="sm" /></td>
                        <td className="py-1.5 pr-3 whitespace-nowrap text-ink-muted">{move.category}</td>
                        <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                        <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                        {activeMembers.map(({ member, learnset: ls }) => {
                          const mm = ls.machines.find((m) => m.moveId === moveId)
                          return (
                            <td key={member.id} className="px-2 py-1.5 text-center font-bold text-ink">
                              {mm ? `${mm.machine}${String(mm.number).padStart(2, '0')}` : <span className="text-ink-faint">—</span>}
                            </td>
                          )
                        })}
                      </tr>
                      {isOpen && move.effectKo && (
                        <tr key={`${moveId}-desc`} className="border-b border-border/50">
                          <td colSpan={colCount} className="py-2 pl-1 pr-3 text-xs leading-relaxed text-ink">{move.effectKo}</td>
                        </tr>
                      )}
                    </>
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
                  const isOpen = openMoveIds.has(moveId)
                  return (
                    <>
                      <tr key={moveId} className="border-b border-border/50 hover:bg-surface-hover">
                        <td className="py-1.5 pr-3 whitespace-nowrap">
                          <button type="button" className={cn('flex items-center gap-1 text-left font-bold text-ink', move.effectKo && 'cursor-pointer')} onClick={move.effectKo ? () => toggleMove(moveId) : undefined}>
                            {move.nameKo}
                            {move.effectKo && <span className="text-xxs text-ink-faint">{isOpen ? '▲' : '▼'}</span>}
                          </button>
                        </td>
                        <td className="py-1.5 pr-3"><TypeBadge type={move.type} size="sm" /></td>
                        <td className="py-1.5 pr-3 whitespace-nowrap text-ink-muted">{move.category}</td>
                        <td className="py-1.5 pr-3 text-right text-ink-muted">{move.power ?? '—'}</td>
                        <td className="py-1.5 pr-4 text-right text-ink-muted">{move.accuracy ?? '—'}</td>
                        {activeMembers.map(({ member, learnset: ls }) => {
                          const has = ls.tutor.some((m) => m.moveId === moveId)
                          return (
                            <td key={member.id} className="px-2 py-1.5 text-center font-bold text-ink">
                              {has ? '●' : <span className="text-ink-faint">—</span>}
                            </td>
                          )
                        })}
                      </tr>
                      {isOpen && move.effectKo && (
                        <tr key={`${moveId}-desc`} className="border-b border-border/50">
                          <td colSpan={colCount} className="py-2 pl-1 pr-3 text-xs leading-relaxed text-ink">{move.effectKo}</td>
                        </tr>
                      )}
                    </>
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
