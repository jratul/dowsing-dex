// PokeAPI 의 야생 조우 조건에서 **시간대 제한**만 뽑아 encounter-times.generated.ts 를 만든다.
//
// 출현 장소 문자열은 한국어 위키에서 가져오는데(PokeAPI 는 지역명 한글이 없다), 위키는
// 시간대를 거의 안 적어 둔다 — 전 세대를 통틀어 12건 남짓이다. 반면 PokeAPI 는
// encounter_details 의 condition_values 에 time-morning / time-day / time-night 을
// 구조적으로 갖고 있다. 그래서 장소는 위키에서, 시간대는 여기서 따로 받아 합친다.
//
//   node scripts/build-encounter-times.mjs
//   node scripts/build-encounter-times.mjs --limit 50   (표본만 빠르게 확인)
import { writeFileSync } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://pokeapi.co/api/v2'
const OUT = resolve(__dirname, '../src/data/encounter-times.generated.ts')
const CONCURRENCY = 14

// 위키가 쓰는 버전 라벨 → PokeAPI version 이름.
// 라벨이 여러 게임을 묶은 것이면(하트골드·소울실버) 그 게임 전부를 본다.
// 여기에 없는 라벨(콜로세움·팔파크·포켓워커 등 야생이 아닌 것)은 시간대를 붙이지 않는다.
const LABEL_TO_VERSIONS = {
  '레드·그린': ['red'],
  '레드': ['red'],
  '그린': ['blue'],
  '청': ['blue'],
  '블루': ['blue'],
  '피카츄': ['yellow'],
  '금·은': ['gold', 'silver'],
  '금': ['gold'],
  '은': ['silver'],
  '크리스탈': ['crystal'],
  '루비·사파이어': ['ruby', 'sapphire'],
  '루비': ['ruby'],
  '사파이어': ['sapphire'],
  '에메랄드': ['emerald'],
  '파이어레드·리프그린': ['firered', 'leafgreen'],
  '파이어레드': ['firered'],
  '리프그린': ['leafgreen'],
  '다이아몬드·펄': ['diamond', 'pearl'],
  '다이아몬드': ['diamond'],
  '펄': ['pearl'],
  '플라티나': ['platinum'],
  '하트골드·소울실버': ['heartgold', 'soulsilver'],
  '하트골드': ['heartgold'],
  '소울실버': ['soulsilver'],
  '블랙·화이트': ['black', 'white'],
  '블랙': ['black'],
  '화이트': ['white'],
  '블랙2·화이트2': ['black-2', 'white-2'],
  '블랙2': ['black-2'],
  '화이트2': ['white-2'],
  'X·Y': ['x', 'y'],
  X: ['x'],
  Y: ['y'],
  '오메가루비·알파사파이어': ['omega-ruby', 'alpha-sapphire'],
  '오메가루비': ['omega-ruby'],
  '알파사파이어': ['alpha-sapphire'],
  '썬·문': ['sun', 'moon'],
  '썬': ['sun'],
  '문': ['moon'],
  '울트라썬·울트라문': ['ultra-sun', 'ultra-moon'],
  '울트라썬': ['ultra-sun'],
  '울트라문': ['ultra-moon'],
  '소드·실드': ['sword', 'shield'],
  '소드': ['sword'],
  '실드': ['shield'],
  '브릴리언트 다이아몬드·샤이닝 펄': ['brilliant-diamond', 'shining-pearl'],
  '브릴리언트 다이아몬드': ['brilliant-diamond'],
  '샤이닝 펄': ['shining-pearl'],
  '스칼렛·바이올렛': ['scarlet', 'violet'],
  '스칼렛': ['scarlet'],
  '바이올렛': ['violet'],
}

const TIME_KO = { 'time-morning': '아침', 'time-day': '낮', 'time-night': '밤' }
const TIME_ORDER = ['아침', '낮', '밤']

async function fetchJson(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(url)
    if (res.status === 404) return null
    if (res.ok) return res.json()
    await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
  }
  throw new Error(`요청 실패: ${url}`)
}

async function mapWithConcurrency(items, limit, fn) {
  let i = 0
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (i < items.length) {
        const idx = i++
        await fn(items[idx], idx)
      }
    }),
  )
}

const load = (rel) => import(pathToFileURL(resolve(__dirname, '..', rel)).href)
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')

const limitArg = process.argv.indexOf('--limit')
const targets = (limitArg >= 0 ? ALL_POKEMON.slice(0, Number(process.argv[limitArg + 1])) : ALL_POKEMON)
  // 그 포켓몬이 실제로 야생 출현 데이터를 가진 라벨만 본다
  .map((p) => ({
    id: p.id,
    nameKo: p.nameKo,
    labels: [...new Set((p.encounterLocations ?? []).filter((e) => !e.unavailable).map((e) => e.version))].filter(
      (v) => LABEL_TO_VERSIONS[v],
    ),
  }))
  .filter((t) => t.labels.length > 0)

const startedAt = Date.now()
let done = 0
const result = {}
let tagged = 0

await mapWithConcurrency(targets, CONCURRENCY, async (t) => {
  const areas = await fetchJson(`${BASE}/pokemon/${t.id}/encounters`)
  done++
  if (done % 50 === 0 || done === targets.length) {
    const sec = (Date.now() - startedAt) / 1000
    const pct = (done / targets.length) * 100
    const eta = (sec / done) * (targets.length - done)
    const mmss = (s) => `${Math.floor(s / 60)}분 ${Math.floor(s % 60)}초`
    console.error(
      `[진행] ${done.toLocaleString('ko-KR')}/${targets.length.toLocaleString('ko-KR')}종 ` +
        `(${pct.toFixed(2)}%) · 경과 ${mmss(sec)} · 남은 예상 ${mmss(eta)}`,
    )
  }
  if (!areas || areas.length === 0) return

  for (const label of t.labels) {
    const versions = LABEL_TO_VERSIONS[label]
    const times = new Set()
    let unrestricted = false

    for (const area of areas) {
      // 사파리존·대습초원은 플레이어가 놓은 블록·구역에 따라 나오는 것이 달라지고,
      // PokeAPI 는 그 구역을 "아침·낮·밤 전부"로 적어 둔다. 그대로 두면 사파리에
      // 나오는 종은 전부 "아무 때나"로 뭉개져 니로우 같은 야행성이 표시되지 않는다.
      if (/safari-zone|great-marsh/.test(area.location_area.name)) continue
      for (const vd of area.version_details) {
        if (!versions.includes(vd.version.name)) continue
        for (const ed of vd.encounter_details) {
          const t2 = ed.condition_values.map((c) => TIME_KO[c.name]).filter(Boolean)
          if (t2.length === 0) unrestricted = true
          else for (const x of t2) times.add(x)
        }
      }
    }

    // 시간 조건 없는 조우가 하나라도 있으면 아무 때나 나온다는 뜻이다
    if (unrestricted || times.size === 0 || times.size === 3) continue
    const tag = TIME_ORDER.filter((x) => times.has(x)).join('·')
    ;(result[t.id] ??= {})[label] = tag
    tagged++
  }
})

const ids = Object.keys(result).map(Number).sort((a, b) => a - b)
const lines = [
  '// 이 파일은 scripts/build-encounter-times.mjs 로 생성됩니다. 직접 수정하지 마세요.',
  '//',
  '// 야생 출현의 **시간대 제한**만 담는다. 출현 장소 문자열(한국어 위키)에는 시간대가',
  '// 거의 안 적혀 있어서, PokeAPI 의 condition_values 에서 따로 뽑아 왔다.',
  '// 값은 그 버전에서 그 시간대에만 나온다는 뜻이다 — 아무 때나 나오면 아예 넣지 않는다.',
  '',
  '/** 포켓몬 ID → 버전 라벨 → 시간대 표기("밤", "아침·낮" 등) */',
  'export const ENCOUNTER_TIMES: Record<number, Record<string, string>> = {',
  ...ids.map((id) => `  ${id}: ${JSON.stringify(result[id])},`),
  '}',
  '',
]
writeFileSync(OUT, lines.join('\n'), 'utf8')
console.error(`시간대 제한이 붙은 포켓몬 ${ids.length.toLocaleString('ko-KR')}종 / ${tagged.toLocaleString('ko-KR')}건`)
console.error(`✓ ${OUT} 생성 완료`)
