import { findMoveByName } from '../../data/sample/moves.sample'
import { genNum, useGuideVersion } from '../../lib/learnsetVersion'
import { moveForVersion } from '../../lib/pastMoves'
import type { Move, MoveCategory } from '../../types/move'
import { TypeBadge } from '../pokemon/TypeBadge'

const CATEGORY_CLASS: Record<MoveCategory, string> = {
  물리: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  특수: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  상태: 'bg-surface-hover text-ink-muted',
}

/**
 * 표 한 칸씩을 그리는 컴포넌트들.
 *
 * **훅이 아니라 컴포넌트여야 한다.** 세대·버전은 `GuidePageLayout` 안쪽의
 * `GuideVersionProvider` 가 내려주는데, 페이지 컴포넌트는 그 provider 보다 **바깥**이라
 * 페이지에서 훅으로 읽으면 항상 null 이 나온다(금·은 공략의 물기가 악·물리로 나왔다).
 * 셀 컴포넌트는 provider 안쪽에서 렌더되므로 그 공략의 게임을 제대로 읽는다.
 */
function useMove(name: string): Move | undefined {
  const guide = useGuideVersion()
  const base = findMoveByName(name)
  if (!base) return undefined
  return guide ? moveForVersion(base, genNum(guide.generation), guide.version) : base
}

export function MoveTypeCell({ name }: { name: string }) {
  const move = useMove(name)
  return move ? <TypeBadge type={move.type} size="sm" /> : <>—</>
}

export function MoveCategoryCell({ name }: { name: string }) {
  const move = useMove(name)
  if (!move) return <>—</>
  return (
    <span className={`inline-block rounded px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap ${CATEGORY_CLASS[move.category]}`}>
      {move.category}
    </span>
  )
}

export function MovePowerCell({ name }: { name: string }) {
  const move = useMove(name)
  return <>{move?.power ?? '—'}</>
}

export function MoveAccuracyCell({ name }: { name: string }) {
  const move = useMove(name)
  // 명중률이 없는 기술은 필중이거나(받아던지기) 명중 판정 자체가 없는 변화기다.
  return <>{move?.accuracy ?? '—'}</>
}

export function MovePpCell({ name }: { name: string }) {
  const move = useMove(name)
  return <>{move?.pp ?? '—'}</>
}
