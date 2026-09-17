// PokeAPI move_changelog.csv → src/data/moves/past-move-values.generated.ts
//
// 기술 데이터(all-moves.generated.ts)의 위력·명중·PP·타입은 **현재 값**이다. 1세대 난동부리기는
// 위력 90이었고, 물기는 1세대에 노말 타입이었다. 상세 페이지가 세대·버전 탭에 맞춰 당시 값을
// 보여 줄 수 있도록 변경 이력만 뽑는다.
//
// CSV 한 행은 "이 버전 그룹에서 바뀌기 **직전** 값"이다. 빈 칸은 그 시점에 안 바뀐 필드다.
// 그래서 어떤 버전의 값은 "그 버전보다 나중에 일어난 변경 중 가장 이른 것, 그 필드가 채워진 행"의
// 값이고, 없으면 현재 값이다. 한 세대 안에서 바뀐 경우가 있어(최면술 명중: DP 70 → Pt 60)
// 세대가 아니라 버전 그룹 순서(version_groups.csv 의 order)로 비교한다.
//
//   node scripts/build-past-move-values.mjs

import { writeFileSync } from 'node:fs'
import { VERSIONS_BY_GEN } from './version-groups.mjs'

const BASE = 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv'
const OUT = 'src/data/moves/past-move-values.generated.ts'

const TYPE_KO = {
  1: '노말', 2: '격투', 3: '비행', 4: '독', 5: '땅', 6: '바위', 7: '벌레', 8: '고스트', 9: '강철',
  10: '불꽃', 11: '물', 12: '풀', 13: '전기', 14: '에스퍼', 15: '얼음', 16: '드래곤', 17: '악', 18: '페어리',
}

// 레츠고 피카츄·이브이 행은 "직전 값"이 현재 값과 똑같다(흡수·메가드레인·솔라빔·순간이동·불새).
// 레츠고에서만 바뀌었다가 소드·실드에서 돌아온 것이라 이력으로 쓰면 오히려 틀린다.
const IGNORED_GROUPS = new Set(['lets-go-pikachu-lets-go-eevee'])

async function csv(name) {
  const res = await fetch(`${BASE}/${name}.csv`)
  if (!res.ok) throw new Error(`${name}.csv ${res.status}`)
  const [header, ...lines] = (await res.text()).trim().split(/\r?\n/)
  const keys = header.split(',')
  return lines.map((line) => Object.fromEntries(line.split(',').map((v, i) => [keys[i], v])))
}

const [groups, changelog] = await Promise.all([csv('version_groups'), csv('move_changelog')])
const groupById = new Map(groups.map((g) => [g.id, g]))
const orderByGroupName = new Map(groups.map((g) => [g.identifier, Number(g.order)]))

/** moveId → [{ changedAtOrder, type?, power?, pp?, accuracy? }] (changedAtOrder 오름차순) */
const past = {}
let ignored = 0
for (const r of changelog) {
  const group = groupById.get(r.changed_in_version_group_id)
  if (!group) throw new Error(`버전 그룹 ${r.changed_in_version_group_id} 없음`)
  if (IGNORED_GROUPS.has(group.identifier)) { ignored++; continue }
  const entry = { changedAtOrder: Number(group.order) }
  if (r.type_id) entry.type = TYPE_KO[Number(r.type_id)]
  if (r.power) entry.power = Number(r.power)
  if (r.pp) entry.pp = Number(r.pp)
  if (r.accuracy) entry.accuracy = Number(r.accuracy)
  if (Object.keys(entry).length === 1) continue // 우선도·효과만 바뀐 행
  ;(past[r.move_id] ??= []).push(entry)
}
for (const list of Object.values(past)) list.sort((a, b) => a.changedAtOrder - b.changedAtOrder)

// 화면의 버전 라벨(학습셋과 같은 값) → 버전 그룹 순서. 라벨이 여러 그룹을 묶으면 가장 이른 것.
const versionOrder = {}
const generationFirstOrder = {}
for (const [gen, versions] of Object.entries(VERSIONS_BY_GEN)) {
  for (const v of versions) {
    const orders = v.groups.map((g) => orderByGroupName.get(g))
    if (orders.some((o) => o === undefined)) throw new Error(`${v.label} 의 버전 그룹 순서를 찾을 수 없음`)
    versionOrder[v.label] = Math.min(...orders)
  }
  generationFirstOrder[gen] = Math.min(...versions.map((v) => versionOrder[v.label]))
}

writeFileSync(
  OUT,
  `// 이 파일은 scripts/build-past-move-values.mjs 로 생성됩니다. 직접 수정하지 마세요.
import type { TypeName } from '../../types/type-chart'

export interface PastMoveValues {
  /** 이 순서의 버전 그룹에서 바뀌었다. 아래 값은 그 직전까지의 값이다 */
  changedAtOrder: number
  type?: TypeName
  power?: number
  pp?: number
  accuracy?: number
}

export const PAST_MOVE_VALUES: Record<number, PastMoveValues[]> = ${JSON.stringify(past)}

/** 세대·버전 탭의 버전 라벨 → 버전 그룹 순서 */
export const VERSION_ORDER: Record<string, number> = ${JSON.stringify(versionOrder)}

/** 세대 → 그 세대 첫 버전 그룹 순서 (버전을 모를 때 쓴다) */
export const GENERATION_FIRST_ORDER: Record<number, number> = ${JSON.stringify(generationFirstOrder)}
`,
)
console.log(`기술 ${Object.keys(past).length.toLocaleString('ko-KR')}종의 변경 이력 → ${OUT} (레츠고 ${ignored}행 제외)`)
