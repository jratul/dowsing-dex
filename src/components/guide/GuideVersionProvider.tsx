import { useMemo, type ReactNode } from 'react'
import type { Generation } from '../../types/move'
import { GuideVersionContext, versionQuery } from '../../lib/learnsetVersion'

/**
 * 공략 문서 전체에 "이 공략은 어느 게임인지"를 내려준다.
 *
 * 안쪽 `PokemonLink`들이 이 값을 읽어 도감 링크에 세대·버전 쿼리를 붙이므로,
 * 공략 본문의 링크를 하나도 건드리지 않고 게임별 딥링크가 된다.
 * 여러 게임을 한데 묶은 공략(안농 종합 등)은 감싸지 않으면 된다 — 그러면 기존 동작 그대로다.
 */
export function GuideVersionProvider({
  generation,
  version,
  children,
}: {
  generation: Generation
  version: string
  children: ReactNode
}) {
  const value = useMemo(
    () => ({ generation, version, query: versionQuery({ generation, version }) }),
    [generation, version],
  )
  return <GuideVersionContext.Provider value={value}>{children}</GuideVersionContext.Provider>
}
