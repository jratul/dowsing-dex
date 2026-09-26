import type { ReactNode } from 'react'

/**
 * 표에서 설명이 긴 칸의 폭을 묶어 줄을 넘기게 한다.
 *
 * `GuideTable` 은 `min-w-max` 라 셀이 기본적으로 줄바꿈되지 않는다. 기술 표처럼 칸이 많은
 * 표에서 설명까지 한 줄로 늘어나면 PC 에서도 표가 가로로 스크롤된다.
 */
export function CellText({ children }: { children: ReactNode }) {
  return <span className="block max-w-52 whitespace-normal sm:max-w-56">{children}</span>
}
