// HGSS·기라티나PT 수집 가이드(src/data/guides/hgss-collection.md)에 적힌 야생 포켓몬마다
// PokeAPI의 4세대 encounter 확률을 붙여 src/data/guides/hgss-encounter-rates.generated.ts 를 만든다.
//
//   node scripts/build-hgss-encounter-rates.mjs
//
// 지역 매핑은 아래 LOCATION_MAP에 명시한 것만 쓴다. 포켓몬 목록이 겹치는 정도로 자동
// 추정하면 조우 종류가 적은 지역에서 엉뚱한 곳이 100% 일치로 잡힌다(검은먹시티가
// "Unknown; all Poliwag"에 붙는 식). 매핑이 없는 지역은 확률 없이 그냥 넘어간다.

import { writeFileSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const MD_PATH = join(ROOT, 'src/data/guides/hgss-collection.md')
const OUT_PATH = join(ROOT, 'src/data/guides/hgss-encounter-rates.generated.ts')
const POKEDEX_PATH = join(ROOT, 'src/data/pokedex/pokedex.generated.ts')

// 가이드 탭 순서 = 이 순서
const VERSIONS = ['heartgold', 'soulsilver', 'platinum']
const REGIONS = [1, 2, 4] // 관동, 성도, 신오

// 가이드의 방법 라벨 → PokeAPI encounter method
const METHOD_MAP = {
  '풀숲/동굴': ['walk'],
  파도타기: ['surf'],
  낡은낚싯대: ['old-rod'],
  좋은낚싯대: ['good-rod'],
  대단한낚싯대: ['super-rod'],
  박치기: ['headbutt'],
  바위깨기: ['rock-smash'],
  '달콤한꿀 나무': ['honey-tree'],
  '특정 타일 낚시': ['feebas-tile-fishing'],
  꼬부기물뿌리개: ['squirt-bottle'],
}

// 가이드 지역명 → PokeAPI location. 배열은 게임에 따라 다른 곳을 가리키는 경우
// (챔피언로드는 HGSS가 관동, Pt가 신오) — 그 버전에 데이터가 있는 쪽이 쓰인다.
const LOCATION_MAP = {
  // 성도
  연두마을: 'new-bark-town',
  무궁시티: 'cherrygrove-city',
  도라지시티: 'violet-city',
  고동마을: 'azalea-town',
  금빛시티: 'goldenrod-city',
  인주시티: 'ecruteak-city',
  담청시티: 'olivine-city',
  진청시티: 'cianwood-city',
  검은먹시티: 'blackthorn-city',
  알프의유적: 'ruins-of-alph',
  어둠의동굴: 'dark-cave',
  연결동굴: 'union-cave',
  야돈우물: 'slowpoke-well',
  너도밤나무숲: 'ilex-forest',
  자연공원: 'national-park',
  모다피의탑: 'sprout-tower',
  방울탑: 'bell-tower',
  불탄탑: 'burned-tower',
  분노의호수: 'lake-of-rage',
  절구산: 'mt-mortar',
  얼음샛길: 'ice-path',
  용의굴: 'dragons-den',
  소용돌이섬: 'whirl-islands',
  동성폭포: 'tohjo-falls',
  사파리존: 'johto-safari-zone',
  은빛산: 'mt-silver',
  // 관동
  태초마을: 'pallet-town',
  상록시티: 'viridian-city',
  회색시티: 'pewter-city',
  블루시티: 'cerulean-city',
  갈색시티: 'vermilion-city',
  무지개시티: 'celadon-city',
  노랑시티: 'saffron-city',
  연분홍시티: 'fuchsia-city',
  홍련섬: 'cinnabar-island',
  상록숲: 'viridian-forest',
  달맞이산: 'mt-moon',
  디그다의굴: 'digletts-cave',
  쌍둥이섬: 'seafoam-islands',
  블루시티동굴: 'cerulean-cave',
  // 신오
  영원시티: 'eterna-city',
  무쇠시티: 'oreburgh-city',
  운하시티: 'canalave-city',
  연고시티: 'hearthome-city',
  봉신마을: 'celestic-town',
  장막시티: 'veilstone-city',
  들판시티: 'pastoria-city',
  선단시티: 'snowpoint-city',
  물가시티: 'sunyshore-city',
  리조트에리어: 'resort-area',
  무쇠게이트: 'oreburgh-gate',
  무쇠탄갱: 'oreburgh-mine',
  험한샛길: 'ravaged-path',
  꽃향기꽃밭: 'floaroma-meadow',
  골짜기발전소: 'valley-windworks',
  영원의숲: 'eterna-forest',
  숲의양옥집: 'old-chateau',
  미혹의동굴: 'wayward-cave',
  대습초원: 'great-marsh',
  자랑의정원: 'trophy-garden',
  신수유적: 'solaceon-ruins',
  유적마니아굴: 'ruin-maniac-cave',
  로스트타워: 'lost-tower',
  천관산: 'mt-coronet',
  진실호수: 'lake-verity',
  입지호수: 'lake-valor',
  예지호수: 'lake-acuity',
  입지호수근처: 'valor-lakefront',
  예지호수근처: 'acuity-lakefront',
  선단신전: 'snowpoint-temple',
  강철섬: 'iron-island',
  골풀무제철소: 'fuego-ironworks',
  하드마운틴: 'stark-mountain',
  귀혼동굴: 'turnback-cave',
  창기둥: 'spear-pillar',
  깨어진세계: 'distortion-world',
  챔피언로드: ['kanto-victory-road-1', 'sinnoh-victory-road'],
  포켓몬리그: ['sinnoh-pokemon-league'],
}

// "29번도로" → johto-route-29. 수로는 sea-route 쪽에 데이터가 있다.
function routeCandidates(name) {
  const m = /^(\d+)번(도로|수로)$/.exec(name)
  if (!m) return null
  const n = Number(m[1])
  const region = n <= 28 ? 'kanto' : n <= 48 ? 'johto' : n <= 230 ? 'sinnoh' : null
  if (!region) return null
  return [`${region}-sea-route-${n}`, `${region}-route-${n}`]
}

async function get(url, tries = 5) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return await res.json()
      if (res.status === 404) return null
    } catch {
      /* 재시도 */
    }
    await new Promise((r) => setTimeout(r, 500 * (i + 1)))
  }
  throw new Error(`fetch 실패: ${url}`)
}

const idFromUrl = (u) => Number(u.replace(/\/+$/, '').split('/').pop())

async function fetchEncounters() {
  const locations = []
  for (const r of REGIONS) {
    const region = await get(`https://pokeapi.co/api/v2/region/${r}`)
    locations.push(...region.locations)
  }
  console.log(`location ${locations.length}개 조회`)

  // "location|version|method|pokemonId" → 확률(%)
  const table = new Map()
  let done = 0
  for (const loc of locations) {
    const detail = await get(loc.url)
    for (const a of detail.areas) {
      const area = await get(a.url)
      if (!area) continue
      for (const pe of area.pokemon_encounters) {
        const pid = idFromUrl(pe.pokemon.url)
        for (const vd of pe.version_details) {
          const version = vd.version.name
          if (!VERSIONS.includes(version)) continue
          // 같은 조건(시간대 등) 안에서 한 포켓몬이 여러 슬롯을 차지하면 확률은 합산이고,
          // 조건이 다르면 동시에 성립하지 않는다. 조건별로 더한 뒤 그중 최댓값을 쓴다.
          const perCondition = new Map()
          for (const d of vd.encounter_details) {
            const cond = d.condition_values
              .map((c) => c.name)
              .sort()
              .join(',')
            const key = `${d.method.name}|${cond}`
            perCondition.set(key, (perCondition.get(key) ?? 0) + d.chance)
          }
          for (const [key, chance] of perCondition) {
            const method = key.split('|')[0]
            const path = `${loc.name}|${version}|${method}|${pid}`
            table.set(path, Math.max(table.get(path) ?? 0, chance))
          }
        }
      }
    }
    if (++done % 25 === 0) console.log(`  ${done}/${locations.length}`)
  }
  return table
}

function buildNameToId() {
  const raw = readFileSync(POKEDEX_PATH, 'utf8')
  const map = new Map()
  const re = /"id":\s*(\d+),\s*"dexNumber":\s*\d+,\s*"generation":\s*\d+,\s*"nameKo":\s*"([^"]+)"/g
  let m
  while ((m = re.exec(raw)) !== null) {
    const id = Number(m[1])
    const name = m[2]
    // 리전폼은 원종과 한글명이 같다. 4세대 가이드이므로 항상 id가 작은 원종을 쓴다.
    if (!map.has(name) || id < map.get(name)) map.set(name, id)
  }
  return map
}

function parseGuide() {
  const md = readFileSync(MD_PATH, 'utf8')
  const rows = []
  let gameIndex = -1
  let location = null
  for (const line of md.split('\n')) {
    if (/^# \d+부\s*—/.test(line)) {
      gameIndex++
      location = null
      continue
    }
    if (
      line.startsWith('## ') &&
      ['놓치기 쉬운 핵심 수집 포인트 요약', '데이터 및 검증 자료'].includes(line.slice(3).trim())
    ) {
      gameIndex = -1
      continue
    }
    if (line.startsWith('### ') && gameIndex >= 0) {
      location = line.slice(4).trim()
      continue
    }
    if (!line.startsWith('  - ') || gameIndex < 0 || !location) continue
    const head = /^\*\*([^:*]+):\*\*\s*(.*)$/.exec(line.slice(4))
    if (!head) continue
    const label = head[1].trim()
    const methods = METHOD_MAP[label]
    if (!methods) continue
    for (const m of head[2].matchAll(/\*\*([^*]+)\*\*/g)) {
      rows.push({ gameIndex, location, label, methods, name: m[1].trim() })
    }
  }
  return rows
}

const table = await fetchEncounters()
const nameToId = buildNameToId()
const rows = parseGuide()

const result = {}
let matched = 0
const missingLocations = new Set()
for (const row of rows) {
  const version = VERSIONS[row.gameIndex]
  const mapped = LOCATION_MAP[row.location] ?? routeCandidates(row.location)
  if (!mapped) {
    missingLocations.add(row.location)
    continue
  }
  const pid = nameToId.get(row.name)
  if (pid === undefined) continue

  let chance = 0
  for (const loc of Array.isArray(mapped) ? mapped : [mapped]) {
    for (const method of row.methods) {
      chance = Math.max(chance, table.get(`${loc}|${version}|${method}|${pid}`) ?? 0)
    }
  }
  if (chance <= 0) continue

  matched++
  const byVersion = (result[version] ??= {})
  const byLocation = (byVersion[row.location] ??= {})
  const byMethod = (byLocation[row.label] ??= {})
  byMethod[pid] = chance
}

console.log(
  `야생 엔트리 ${rows.length}개 중 ${matched}개에 확률을 붙였다 (${((matched / rows.length) * 100).toFixed(1)}%)`,
)
if (missingLocations.size > 0) {
  console.log(`매핑 없는 지역 ${missingLocations.size}개: ${[...missingLocations].join(', ')}`)
}

const body = `// 이 파일은 scripts/build-hgss-encounter-rates.mjs 로 생성됩니다. 직접 수정하지 마세요.
// PokeAPI 4세대 encounter 데이터 기준. 같은 조건 안에서 여러 슬롯을 차지하면 확률을 더하고,
// 시간대처럼 동시에 성립하지 않는 조건끼리는 그중 가장 높은 값을 골랐다.
import type { HgssEncounterRates } from '../../types/guide'

export const HGSS_ENCOUNTER_RATES: HgssEncounterRates = ${JSON.stringify(result, null, 1)}
`
writeFileSync(OUT_PATH, body, 'utf8')
console.log(`저장 → ${OUT_PATH}`)
