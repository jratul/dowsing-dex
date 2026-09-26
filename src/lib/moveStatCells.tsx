import type { ReactNode } from 'react'
import {
  MoveCategoryCell,
  MovePowerCell,
  MovePpCell,
  MoveTypeCell,
} from '../components/guide/MoveStatCells'

/** 공략 기술 표의 공통 열. `moveStatCells()` 가 돌려주는 칸과 순서가 같다. */
export const MOVE_STAT_HEADERS = ['타입', '분류', '위력', 'PP']

/**
 * 기술 이름 하나로 타입·분류·위력·PP 네 칸을 만든다.
 *
 * 값은 **그 공략이 다루는 게임 기준**이다 — 각 칸이 렌더될 때 `GuideVersionProvider` 의
 * 세대·버전을 읽어 당시 값으로 바꾼다(2세대 물기 = 악·특수, 4세대 이전 바위깨기 위력 20).
 */
export function moveStatCells(name: string): ReactNode[] {
  return [
    <MoveTypeCell key="type" name={name} />,
    <MoveCategoryCell key="cat" name={name} />,
    <MovePowerCell key="power" name={name} />,
    <MovePpCell key="pp" name={name} />,
  ]
}
