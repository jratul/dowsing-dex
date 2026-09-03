// PokeAPI 의 야생 조우 데이터에서 **출현 확률·레벨·시간대**를 방법별로 뽑아
// encounter-details.generated.ts 를 만든다.
//
// 출현 장소 문자열은 한국어 위키에서 가져온다(PokeAPI 는 지역명·방법명에 한글이 아예 없다).
// 그래서 "어느 도로에서 몇 %" 까지는 한글로 못 쓴다. 대신 **방법별로 묶어서**
// 「풀숲 45% (밤) Lv.2~4」처럼 요약한다.
//
//   node scripts/build-encounter-details.mjs
//   node scripts/build-encounter-details.mjs --limit 40   (표본만 빠르게 확인)
//
// 확률 계산은 scripts/build-hgss-encounter-rates.mjs 와 같은 규칙을 쓴다 —
// 같은 조건(시간대·라디오 등) 안에서 한 포켓몬이 여러 슬롯을 차지하면 확률은 합산이고,
// 조건이 다르면 동시에 성립하지 않으므로 조건별로 더한 뒤 그중 최댓값을 쓴다.
import { writeFileSync } from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://pokeapi.co/api/v2'
const OUT = resolve(__dirname, '../src/data/encounter-details.generated.ts')
const CONCURRENCY = 14

// 위키가 쓰는 버전 라벨 → PokeAPI version 이름.
// 라벨이 여러 게임을 묶은 것이면(하트골드·소울실버) 그 게임 전부를 본다.
// 여기에 없는 라벨(콜로세움·팔파크·포켓워커 등 야생이 아닌 것)은 아무것도 붙이지 않는다.
const LABEL_TO_VERSIONS = {
  '레드·그린': ['red'], 레드: ['red'], 그린: ['blue'], 청: ['blue'], 블루: ['blue'], 피카츄: ['yellow'],
  '금·은': ['gold', 'silver'], 금: ['gold'], 은: ['silver'], 크리스탈: ['crystal'],
  '루비·사파이어': ['ruby', 'sapphire'], 루비: ['ruby'], 사파이어: ['sapphire'], 에메랄드: ['emerald'],
  '파이어레드·리프그린': ['firered', 'leafgreen'], 파이어레드: ['firered'], 리프그린: ['leafgreen'],
  '다이아몬드·펄': ['diamond', 'pearl'], 다이아몬드: ['diamond'], 펄: ['pearl'], 플라티나: ['platinum'],
  '하트골드·소울실버': ['heartgold', 'soulsilver'], 하트골드: ['heartgold'], 소울실버: ['soulsilver'],
  '블랙·화이트': ['black', 'white'], 블랙: ['black'], 화이트: ['white'],
  '블랙2·화이트2': ['black-2', 'white-2'], 블랙2: ['black-2'], 화이트2: ['white-2'],
  'X·Y': ['x', 'y'], X: ['x'], Y: ['y'],
  '오메가루비·알파사파이어': ['omega-ruby', 'alpha-sapphire'], 오메가루비: ['omega-ruby'], 알파사파이어: ['alpha-sapphire'],
  '썬·문': ['sun', 'moon'], 썬: ['sun'], 문: ['moon'],
  '울트라썬·울트라문': ['ultra-sun', 'ultra-moon'], 울트라썬: ['ultra-sun'], 울트라문: ['ultra-moon'],
  '소드·실드': ['sword', 'shield'], 소드: ['sword'], 실드: ['shield'],
  '브릴리언트 다이아몬드·샤이닝 펄': ['brilliant-diamond', 'shining-pearl'],
  '브릴리언트 다이아몬드': ['brilliant-diamond'], '샤이닝 펄': ['shining-pearl'],
  '스칼렛·바이올렛': ['scarlet', 'violet'], 스칼렛: ['scarlet'], 바이올렛: ['violet'],
}

// PokeAPI 방법명 → 한글. 표에 없는 방법이 나오면 실행 끝에 목록으로 알려 준다.
// 박치기는 나무 등급별로 method 가 갈려 있는데 플레이어에게는 같은 행동이라 하나로 묶는다.
const METHOD_KO = {
  walk: '풀숲', surf: '파도타기', 'old-rod': '낡은낚싯대', 'good-rod': '좋은낚싯대', 'super-rod': '대단한낚싯대',
  'rock-smash': '바위깨기',
  headbutt: '박치기', 'headbutt-low': '박치기', 'headbutt-normal': '박치기', 'headbutt-high': '박치기',
  'dark-grass': '흔들리는 풀숲', 'grass-spots': '빛나는 풀숲', 'cave-spots': '빛나는 동굴',
  'bridge-spots': '다리 그림자', 'super-rod-spots': '수면의 그림자 낚시', 'surf-spots': '수면의 그림자 파도타기',
  'yellow-flowers': '노란 꽃밭', 'purple-flowers': '보라 꽃밭', 'red-flowers': '빨간 꽃밭',
  'rough-terrain': '거친 땅', seaweed: '해초', 'island-scan': '섬 스캔',
  'sos-encounter': 'SOS 난입', sos: 'SOS 난입', 'sos-from-bubbling-spot': 'SOS 난입(물보라)',
  'bubbling-spots': '물보라', 'berry-piles': '나무열매 더미', 'berry-trees': '나무열매 나무',
  'honey-tree': '꿀나무', 'hidden-grotto': '숨겨진 아지트', horde: '무리배틀',
  'feebas-tile-fishing': '히든포켓몬 낚시', 'devon-scope': '데본스코프',
  pokeflute: '포켓몬피리', 'squirt-bottle': '물뿌리개', 'wailmer-pail': '해피니스 물뿌리개',
  'only-one': '고정 조우', static: '고정 조우',
  wanderer: '배회', 'wanderer-water': '배회(수상)', 'roaming-grass': '배회', 'roaming-water': '배회(수상)',
  overworld: '필드 심볼', 'overworld-flying': '필드 심볼(비행)', 'overworld-water': '필드 심볼(수상)',
  'overworld-dirt': '필드 심볼(땅)', 'ground-ambush': '땅속 기습', 'sky-ambush': '공중 기습',
  'ceiling-ambush': '천장 기습', 'trash-can-ambush': '쓰레기통 기습', 'rustling-bush-ambush': '덤불 기습',
  'max-raid': '맥스 레이드',
}

// 야생 조우가 아니라 이 페이지의 「포획 불가(교환·이벤트)」 쪽 이야기다. 확률을 붙이지 않는다.
const SKIP_METHODS = new Set(['npc-trade', 'gift', 'gift-egg', 'colosseum-bonus-disc-jpn'])

const TIME_KO = { 'time-morning': '아침', 'time-day': '낮', 'time-night': '밤' }
const TIME_ORDER = ['아침', '낮', '밤']
/** 방법별로 몇 개까지 보여줄지. 확률 높은 것부터 남긴다. */
const MAX_METHODS = 5

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
      while (i < items.length) await fn(items[i++])
    }),
  )
}

const load = (rel) => import(pathToFileURL(resolve(__dirname, '..', rel)).href)
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')

const limitArg = process.argv.indexOf('--limit')
const targets = (limitArg >= 0 ? ALL_POKEMON.slice(0, Number(process.argv[limitArg + 1])) : ALL_POKEMON)
  .map((p) => ({
    id: p.id,
    labels: [...new Set((p.encounterLocations ?? []).filter((e) => !e.unavailable).map((e) => e.version))].filter(
      (v) => LABEL_TO_VERSIONS[v],
    ),
  }))
  .filter((t) => t.labels.length > 0)

const startedAt = Date.now()
let done = 0
const result = {}
const unknownMethods = new Map()
let rows = 0

await mapWithConcurrency(targets, CONCURRENCY, async (t) => {
  const areas = await fetchJson(`${BASE}/pokemon/${t.id}/encounters`)
  done++
  if (done % 100 === 0 || done === targets.length) {
    const sec = (Date.now() - startedAt) / 1000
    const mmss = (s) => `${Math.floor(s / 60)}분 ${Math.floor(s % 60)}초`
    console.error(
      `[진행] ${done.toLocaleString('ko-KR')}/${targets.length.toLocaleString('ko-KR')}종 ` +
        `(${((done / targets.length) * 100).toFixed(2)}%) · 경과 ${mmss(sec)} · ` +
        `남은 예상 ${mmss((sec / done) * (targets.length - done))}`,
    )
  }
  if (!areas || areas.length === 0) return

  for (const label of t.labels) {
    const versions = LABEL_TO_VERSIONS[label]
    /** method → { chance, min, max, times:Set, unrestricted } */
    const byMethod = new Map()

    for (const area of areas) {
      // 사파리존·대습초원은 플레이어가 놓은 블록에 따라 달라지는데 PokeAPI 는 그 구역을
      // "아침·낮·밤 전부"로 적어 둔다. 그대로 두면 사파리에 나오는 종이 전부
      // "아무 때나"로 뭉개진다(니로우가 밤 표시를 못 받았다).
      const isSafari = /safari-zone|great-marsh/.test(area.location_area.name)
      // PokeAPI 는 실제 지역이 아닌 자리에 unknown-all-bugs 같은 가짜 구역을 만들어 둔다
      // (벌레잡기 대회 등). 그 구역은 한 종이 표를 거의 다 차지해 확률이 100% 로 부풀어
      // 오르므로 통째로 뺀다. build-hgss-encounter-rates.mjs 도 같은 함정을 겪었다.
      if (area.location_area.name.startsWith('unknown-')) continue
      for (const vd of area.version_details) {
        if (!versions.includes(vd.version.name)) continue

        // 같은 조건 안의 슬롯은 합산, 조건이 다르면 최댓값
        const perCondition = new Map()
        for (const d of vd.encounter_details) {
          const cond = d.condition_values.map((c) => c.name).sort().join(',')
          const key = `${d.method.name}|${cond}`
          const cur = perCondition.get(key) ?? { chance: 0, times: [] }
          cur.chance += d.chance
          cur.times = d.condition_values.map((c) => TIME_KO[c.name]).filter(Boolean)
          perCondition.set(key, cur)
        }

        for (const [key, v] of perCondition) {
          const raw = key.split('|')[0]
          if (SKIP_METHODS.has(raw)) continue
          if (!METHOD_KO[raw]) unknownMethods.set(raw, (unknownMethods.get(raw) ?? 0) + 1)
          const method = METHOD_KO[raw] ?? raw
          const cur = byMethod.get(method) ?? { chance: 0, times: new Set(), unrestricted: false }
          cur.chance = Math.max(cur.chance, v.chance)
          // 시간대 판정에서 사파리존은 빼고 본다
          if (!isSafari) {
            if (v.times.length === 0) cur.unrestricted = true
            else for (const x of v.times) cur.times.add(x)
          }
          byMethod.set(method, cur)
        }
      }
    }
    if (byMethod.size === 0) continue

    const list = [...byMethod]
      .map(([method, v]) => {
        const time =
          v.unrestricted || v.times.size === 0 || v.times.size === 3
            ? undefined
            : TIME_ORDER.filter((x) => v.times.has(x)).join('·')
        const entry = { method, chance: Math.min(100, Math.round(v.chance)) }
        if (time) entry.time = time
        return entry
      })
      .sort((a, b) => b.chance - a.chance)
      .slice(0, MAX_METHODS)

    result[t.id] ??= {}
    result[t.id][label] = list
    rows += list.length
  }
})

const ids = Object.keys(result).map(Number).sort((a, b) => a - b)
const lines = [
  '// 이 파일은 scripts/build-encounter-details.mjs 로 생성됩니다. 직접 수정하지 마세요.',
  '//',
  '// 야생 출현의 **방법별 확률·레벨·시간대**. 출현 장소 문자열(한국어 위키)에는 확률도',
  '// 시간대도 없어서 PokeAPI 에서 따로 뽑아 왔다. PokeAPI 는 지역명에 한글이 없으므로',
  '// "어느 도로에서 몇 %" 가 아니라 **방법별 최대 확률**로 묶는다.',
  '//',
  '// chance: 한 자리에서 그 방법으로 나올 확률의 최댓값(%).',
  '//         같은 조건 안의 슬롯은 합산하고, 조건이 다르면 최댓값을 쓴다.',
  '// time:   그 방법이 특정 시간대에만일 때만 있다. 없으면 아무 때나 나온다.',
  '//',
  '// 레벨은 넣지 않는다 — 지역을 한글로 못 쓰는 이상 전 지역을 합친 범위(Lv.2~34)가 되어',
  '// 오히려 오해를 부른다. 레벨은 포켓몬 상세 페이지에서 본다.',
  '',
  'export interface EncounterDetail {',
  '  /** 풀숲 · 파도타기 · 대단한낚싯대 · 박치기 … */',
  '  method: string',
  '  /** 한 자리 기준 최대 출현 확률(%) */',
  '  chance: number',
  '  /** "밤", "아침·낮" — 그 시간대에만 나올 때만 있다 */',
  '  time?: string',
  '}',
  '',
  '/** 포켓몬 ID → 버전 라벨 → 방법별 상세 (확률 내림차순) */',
  'export const ENCOUNTER_DETAILS: Record<number, Record<string, EncounterDetail[]>> = {',
  ...ids.map((id) => `  ${id}: ${JSON.stringify(result[id])},`),
  '}',
  '',
]
writeFileSync(OUT, lines.join('\n'), 'utf8')
console.error(`포켓몬 ${ids.length.toLocaleString('ko-KR')}종 / 방법 항목 ${rows.toLocaleString('ko-KR')}건`)
if (unknownMethods.size > 0)
  console.error(`[알림] METHOD_KO 에 없는 방법: ${[...unknownMethods].map(([m, c]) => `${m}(${c})`).join(', ')}`)
console.error(`✓ ${OUT} 생성 완료`)
