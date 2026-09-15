// PokeAPI 의 과거 타입·특성 CSV → src/data/pokedex/past-types-abilities.generated.ts
//
// 도감 데이터(pokedex.generated.ts)의 타입·특성은 **현재 값**이다. 피피는 5세대까지 노말,
// 코일은 1세대에 강철이 없었고, 팬텀은 6세대까지 부유 특성이었다. 상세 페이지가 세대 탭을
// 따라 당시 값을 보여 줄 수 있도록 PokeAPI 가 정리해 둔 변경 이력만 따로 뽑는다.
//
// CSV 의 generation_id 는 "이 값이 마지막으로 쓰인 세대"다. 한 포켓몬에 여러 행이 있으면
// 보고 있는 세대 이상인 것 중 가장 이른 세대의 행이 그 세대의 값이다.
// 특성 행에서 ability_id 가 비어 있으면 "그 슬롯이 아직 없었다"는 뜻이다
// (예: 구구는 3세대까지 2번 특성이 없고, 4세대까지 숨겨진 특성이 없다).
//
//   node scripts/build-past-types-abilities.mjs

import { readFileSync, writeFileSync } from 'node:fs'

const BASE = 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/csv'
const OUT = 'src/data/pokedex/past-types-abilities.generated.ts'

// PokeAPI type_id → 한국어 타입명 (types.csv 순서)
const TYPE_KO = {
  1: '노말', 2: '격투', 3: '비행', 4: '독', 5: '땅', 6: '바위', 7: '벌레', 8: '고스트', 9: '강철',
  10: '불꽃', 11: '물', 12: '풀', 13: '전기', 14: '에스퍼', 15: '얼음', 16: '드래곤', 17: '악', 18: '페어리',
}

async function csv(name) {
  const res = await fetch(`${BASE}/${name}.csv`)
  if (!res.ok) throw new Error(`${name}.csv ${res.status}`)
  const [header, ...lines] = (await res.text()).trim().split(/\r?\n/)
  const keys = header.split(',')
  return lines.map((line) => Object.fromEntries(line.split(',').map((v, i) => [keys[i], v])))
}

const pokedexSrc = readFileSync('src/data/pokedex/pokedex.generated.ts', 'utf8')
const knownIds = new Set([...pokedexSrc.matchAll(/^ {4}"id": (\d+),$/gm)].map((m) => Number(m[1])))
const abilitiesSrc = readFileSync('src/data/abilities.generated.ts', 'utf8')
const abilityApiName = new Map(
  [...abilitiesSrc.matchAll(/\{ id: (\d+), apiName: "([^"]+)"/g)].map((m) => [Number(m[1]), m[2]]),
)

const [typeRows, abilityRows] = await Promise.all([csv('pokemon_types_past'), csv('pokemon_abilities_past')])

/** pokemonId → [{ untilGeneration, types }] */
const pastTypes = {}
let skipped = 0
for (const r of typeRows) {
  const id = Number(r.pokemon_id)
  if (!knownIds.has(id)) { skipped++; continue }
  const gen = Number(r.generation_id)
  const list = (pastTypes[id] ??= [])
  let entry = list.find((e) => e.untilGeneration === gen)
  if (!entry) list.push((entry = { untilGeneration: gen, slots: [] }))
  entry.slots[Number(r.slot) - 1] = TYPE_KO[Number(r.type_id)]
}
for (const list of Object.values(pastTypes)) {
  for (const e of list) { e.types = e.slots.filter(Boolean); delete e.slots }
  list.sort((a, b) => a.untilGeneration - b.untilGeneration)
}

/** pokemonId → [{ untilGeneration, slot, ability(apiName) | null }] — slot 3 = 숨겨진 특성 */
const pastAbilities = {}
for (const r of abilityRows) {
  const id = Number(r.pokemon_id)
  if (!knownIds.has(id)) { skipped++; continue }
  const abilityId = r.ability_id ? Number(r.ability_id) : null
  const apiName = abilityId === null ? null : abilityApiName.get(abilityId)
  if (apiName === undefined) throw new Error(`특성 id ${abilityId} 가 abilities.generated.ts 에 없다`)
  ;(pastAbilities[id] ??= []).push({ untilGeneration: Number(r.generation_id), slot: Number(r.slot), ability: apiName })
}
for (const list of Object.values(pastAbilities)) list.sort((a, b) => a.untilGeneration - b.untilGeneration || a.slot - b.slot)

const body = `// 이 파일은 scripts/build-past-types-abilities.mjs 로 생성됩니다. 직접 수정하지 마세요.
import type { TypeName } from '../../types/type-chart'

export interface PastTypes {
  /** 이 세대까지 아래 타입이었다 */
  untilGeneration: number
  types: TypeName[]
}

export interface PastAbility {
  /** 이 세대까지 이 슬롯이 아래 값이었다 */
  untilGeneration: number
  /** 1·2 = 일반 특성, 3 = 숨겨진 특성 */
  slot: 1 | 2 | 3
  /** abilities.generated.ts 의 apiName. null 이면 그 슬롯이 아직 없었다 */
  ability: string | null
}

export const PAST_TYPES: Record<number, PastTypes[]> = ${JSON.stringify(pastTypes)}

export const PAST_ABILITIES: Record<number, PastAbility[]> = ${JSON.stringify(pastAbilities)}
`
writeFileSync(OUT, body)
console.log(
  `타입 이력 ${Object.keys(pastTypes).length.toLocaleString('ko-KR')}종, 특성 이력 ${Object.keys(pastAbilities).length.toLocaleString('ko-KR')}종 → ${OUT} (도감에 없는 폼 ${skipped}행 제외)`,
)
