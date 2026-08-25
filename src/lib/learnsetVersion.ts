import { createContext, useContext } from 'react'
import type { Generation } from '../types/move'

/** 도감 상세의 세대·버전 탭 선택 한 벌. 버전 라벨은 학습셋 데이터의 `version` 값 그대로다. */
export interface LearnsetVersion {
  generation: Generation
  version: string
}

export const GEN_PARAM = 'gen'
export const VERSION_PARAM = 'ver'

const STORAGE_KEY = 'dowsing-dex:learnset-version'

/** '4세대' → 4 */
export function genNum(generation: Generation): number {
  return Number(generation.replace('세대', ''))
}

/**
 * 공략 → 도감 링크에 붙일 쿼리 문자열(`?gen=4&ver=하트골드·소울실버`).
 * 한글 라벨이 그대로 인코딩돼 URL은 길어지지만, 짧은 ascii 슬러그 매핑을 한 벌 더 두면
 * 학습셋 데이터의 version 라벨과 갈라질 여지가 생기므로 라벨을 그대로 쓴다.
 */
export function versionQuery(v: LearnsetVersion | null): string {
  if (!v) return ''
  const params = new URLSearchParams()
  params.set(GEN_PARAM, String(genNum(v.generation)))
  params.set(VERSION_PARAM, v.version)
  return `?${params.toString()}`
}

/**
 * 마지막으로 "직접 고른" 세대·버전. 게임 하나를 오래 붙잡고 여러 마리를 확인하는 흐름이라
 * 세션이 아니라 localStorage에 남긴다.
 *
 * 기본 탭으로 자동 결정된 값은 절대 저장하지 않는다 — 저장하면 전룡(기본 2세대)을 한 번
 * 열어보는 것만으로 사용자가 고른 하트골드 설정이 덮여버린다.
 *
 * 사생활 보호 모드·저장소 차단에서는 접근 자체가 throw 하므로 읽기·쓰기 모두 감싼다.
 * 기억을 못 할 뿐 탭 동작 자체는 그대로다.
 */
export function readLearnsetVersion(): LearnsetVersion | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return null
    const { generation, version } = parsed as Partial<LearnsetVersion>
    if (typeof generation !== 'string' || typeof version !== 'string' || version === '') return null
    return { generation: generation as Generation, version }
  } catch {
    return null
  }
}

export function writeLearnsetVersion(v: LearnsetVersion): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v))
  } catch {
    // 저장 실패는 무시한다. URL 쿼리로는 여전히 유지된다.
  }
}

/** 공략 문서가 "이 문서는 어느 게임 이야기인지"를 안쪽 링크들에게 알려주는 통로. */
export interface GuideVersionValue extends LearnsetVersion {
  /** 링크마다 다시 만들지 않도록 미리 만들어 둔 쿼리 문자열. 수집 가이드 한 페이지에 1,700개가 깔린다. */
  query: string
}

export const GuideVersionContext = createContext<GuideVersionValue | null>(null)

export function useGuideVersion(): GuideVersionValue | null {
  return useContext(GuideVersionContext)
}
