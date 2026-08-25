import { useState } from 'react'
import type React from 'react'
import type { Generation, Learnset, Move } from '../../types/move'
import { TypeBadge } from './TypeBadge'
import { cn } from '../../lib/cn'

const INDENT = 'pl-[calc(2.5rem+0.5rem)]'

export interface MoveListProps {
  learnsets: Learnset[]
  findMove: (id: number) => Move | undefined
  recommendedMoveIds?: number[]
  /** 세대·버전 필터는 도감 상세 페이지가 단독으로 소유한다. 여기서 탭을 또 그리지 않는다. */
  generation: Generation
  version: string
  /** 제목까지 함께 렌더한다. 그 버전에 학습셋이 없으면 제목도 같이 사라진다. */
  title: string
  /**
   * 레벨업 목록을 접는다. 위쪽 "진화 계열 기술 비교"가 같은 내용을 이미 보여줄 때만 켠다.
   * 진화하지 않는 포켓몬은 비교표가 없으므로 절대 켜면 안 된다.
   */
  hideLevelUp?: boolean
}

function MoveRow({ leading, move }: { leading: string; move: Move }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn('border-b border-border/50 last:border-0', move.effectKo && 'cursor-pointer')}
      onClick={move.effectKo ? () => setOpen((v) => !v) : undefined}
    >
      <div className="grid grid-cols-[3rem_minmax(6rem,2fr)_3.5rem_minmax(2.5rem,1fr)_minmax(2.5rem,1fr)_minmax(2.5rem,1fr)_minmax(2rem,1fr)] items-center gap-2 py-1.5 text-xs">
        <span className="font-bold text-ink-faint">{leading}</span>
        <span className="flex items-center gap-1 font-bold text-ink">
          {move.nameKo}
          {move.effectKo && (
            <span className="text-xxs text-ink-faint">{open ? '▲' : '▼'}</span>
          )}
        </span>
        <TypeBadge type={move.type} size="sm" />
        <span className="text-ink-muted">{move.category}</span>
        <span className="text-right text-ink-muted">{move.power ?? '-'}</span>
        <span className="text-right text-ink-muted">{move.accuracy ?? '-'}</span>
        <span className="text-right text-ink-muted">{move.pp}</span>
      </div>
      {open && move.effectKo && (
        <p className={cn('py-2 text-xs leading-relaxed text-ink', INDENT)}>{move.effectKo}</p>
      )}
    </div>
  )
}

function MoveTableHeader() {
  return (
    <div className="grid grid-cols-[3rem_minmax(6rem,2fr)_3.5rem_minmax(2.5rem,1fr)_minmax(2.5rem,1fr)_minmax(2.5rem,1fr)_minmax(2rem,1fr)] gap-2 border-b border-border pb-1.5 text-xxs font-bold text-ink-faint">
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

function MoveTableSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xs font-black text-ink-faint">{title}</h4>
      <div className="overflow-x-auto">
        <div className="min-w-[26rem]">
          <MoveTableHeader />
          <div className="flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function MoveList({
  learnsets,
  findMove,
  recommendedMoveIds,
  generation,
  version,
  title,
  hideLevelUp,
}: MoveListProps) {
  const learnset = learnsets.find((ls) => ls.generation === generation && ls.version === version)

  // 그 버전에 이 포켓몬이 등장하지 않으면(성도 블레이범과 레전드 아르세우스 같은 경우)
  // 아무것도 그리지 않는다. 제목만 남기면 빈 섹션처럼 보인다.
  if (!learnset) return null

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-black text-ink-faint">{title}</h3>

      {recommendedMoveIds && recommendedMoveIds.length > 0 && (
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-black text-ink-faint">추천 기술 배치</h4>
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

      {!hideLevelUp && learnset.levelUp.length > 0 && (
        <MoveTableSection title="레벨업으로 배우는 기술">
          {learnset.levelUp
            .slice()
            .sort((a, b) => a.level - b.level)
            .map(({ moveId, level }) => {
              const move = findMove(moveId)
              // 한 기술을 여러 레벨에서 배우는 경우가 있어 moveId 하나로는 key가 겹친다.
              return move ? <MoveRow key={`${moveId}-${level}`} leading={`Lv${level}`} move={move} /> : null
            })}
        </MoveTableSection>
      )}

      {learnset.machines.length > 0 && (
        <MoveTableSection title="기술머신으로 배우는 기술">
          {learnset.machines.map(({ moveId, machine, number }) => {
            const move = findMove(moveId)
            return move ? (
              <MoveRow key={moveId} leading={`${machine}${number.toString().padStart(2, '0')}`} move={move} />
            ) : null
          })}
        </MoveTableSection>
      )}

      {learnset.tutor.length > 0 && (
        <MoveTableSection title="가르침으로 배우는 기술">
          {learnset.tutor.map(({ moveId }) => {
            const move = findMove(moveId)
            return move ? <MoveRow key={moveId} leading="-" move={move} /> : null
          })}
        </MoveTableSection>
      )}
    </div>
  )
}
