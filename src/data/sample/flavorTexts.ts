import type { FlavorTextEntry } from '../../types/pokemon'

const POKEAPI_BASE = 'https://pokeapi.co/api/v2'

interface VersionMeta {
  gen: number
  ko: string
}

const VERSION_META: Record<string, VersionMeta> = {
  red: { gen: 1, ko: '레드' },
  blue: { gen: 1, ko: '블루' },
  yellow: { gen: 1, ko: '피카츄' },
  gold: { gen: 2, ko: '골드' },
  silver: { gen: 2, ko: '실버' },
  crystal: { gen: 2, ko: '크리스탈' },
  ruby: { gen: 3, ko: '루비' },
  sapphire: { gen: 3, ko: '사파이어' },
  emerald: { gen: 3, ko: '에메랄드' },
  firered: { gen: 3, ko: '파이어레드' },
  leafgreen: { gen: 3, ko: '리프그린' },
  diamond: { gen: 4, ko: '다이아몬드' },
  pearl: { gen: 4, ko: '펄' },
  platinum: { gen: 4, ko: '플래티넘' },
  heartgold: { gen: 4, ko: '하트골드' },
  soulsilver: { gen: 4, ko: '소울실버' },
  black: { gen: 5, ko: '블랙' },
  white: { gen: 5, ko: '화이트' },
  'black-2': { gen: 5, ko: '블랙2' },
  'white-2': { gen: 5, ko: '화이트2' },
  x: { gen: 6, ko: 'X' },
  y: { gen: 6, ko: 'Y' },
  'omega-ruby': { gen: 6, ko: '오메가루비' },
  'alpha-sapphire': { gen: 6, ko: '알파사파이어' },
  sun: { gen: 7, ko: '썬' },
  moon: { gen: 7, ko: '문' },
  'ultra-sun': { gen: 7, ko: '울트라썬' },
  'ultra-moon': { gen: 7, ko: '울트라문' },
  'lets-go-pikachu': { gen: 7, ko: '렛츠고 피카츄' },
  'lets-go-eevee': { gen: 7, ko: '렛츠고 이브이' },
  sword: { gen: 8, ko: '소드' },
  shield: { gen: 8, ko: '실드' },
  'brilliant-diamond': { gen: 8, ko: '브릴리언트 다이아몬드' },
  'shining-pearl': { gen: 8, ko: '샤이닝 펄' },
  'legends-arceus': { gen: 8, ko: '아르세우스' },
  scarlet: { gen: 9, ko: '스칼렛' },
  violet: { gen: 9, ko: '바이올렛' },
}

const cache = new Map<number, FlavorTextEntry[]>()

interface PokeApiFlavorEntry {
  flavor_text: string
  language: { name: string }
  version: { name: string }
}

export async function loadFlavorTexts(dexNumber: number): Promise<FlavorTextEntry[]> {
  if (cache.has(dexNumber)) return cache.get(dexNumber)!

  const res = await fetch(`${POKEAPI_BASE}/pokemon-species/${dexNumber}/`)
  if (!res.ok) return []
  const data: { flavor_text_entries: PokeApiFlavorEntry[] } = await res.json()

  // 버전별로 Korean 우선, 없으면 English 폴백
  const versionBest = new Map<string, { text: string; isKo: boolean }>()
  for (const entry of data.flavor_text_entries) {
    const lang = entry.language.name
    if (lang !== 'ko' && lang !== 'en') continue
    const vName = entry.version.name
    if (!VERSION_META[vName]) continue
    const text = entry.flavor_text.replace(/[\f\n\r­]/g, ' ').replace(/\s+/g, ' ').trim()
    const existing = versionBest.get(vName)
    if (!existing || (!existing.isKo && lang === 'ko')) {
      versionBest.set(vName, { text, isKo: lang === 'ko' })
    }
  }

  // 세대별로 묶은 뒤, 동일 텍스트 버전은 합침
  const byGen = new Map<number, { koName: string; text: string; isKo: boolean }[]>()
  for (const [vName, { text, isKo }] of versionBest) {
    const meta = VERSION_META[vName]!
    if (!byGen.has(meta.gen)) byGen.set(meta.gen, [])
    byGen.get(meta.gen)!.push({ koName: meta.ko, text, isKo })
  }

  const result: FlavorTextEntry[] = []
  for (const [gen, versions] of [...byGen.entries()].sort((a, b) => a[0] - b[0])) {
    // 같은 텍스트끼리 묶기
    const textMap = new Map<string, { koNames: string[]; isKo: boolean }>()
    for (const v of versions) {
      const existing = textMap.get(v.text)
      if (existing) {
        existing.koNames.push(v.koName)
      } else {
        textMap.set(v.text, { koNames: [v.koName], isKo: v.isKo })
      }
    }
    for (const [text, { koNames, isKo }] of textMap) {
      result.push({ gen, version: koNames.join('·'), text, isKo })
    }
  }

  cache.set(dexNumber, result)
  return result
}
