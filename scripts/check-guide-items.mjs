// 공략에 나오는 아이템 이름을 items.generated.ts 와 대조한다.
// 진화용 돌 이름은 오역이 잦다(빛나는돌/황혼의돌/번개의돌 → 빛의돌/어둠의돌/천둥의돌).
//
//   node scripts/check-guide-items.mjs
import fs from 'node:fs'

const ROOT = new URL('../', import.meta.url)
const load = (rel) => import(new URL(rel, ROOT).href)
const { EVOLUTION_ITEMS, BATTLE_ITEMS } = await load('src/data/items.generated.ts')
const { ALL_POKEMON } = await load('src/data/pokedex/pokedex.generated.ts')

const ITEM_NAMES = new Set([...EVOLUTION_ITEMS, ...BATTLE_ITEMS].map((i) => i.nameKo).filter(Boolean))
const POKE_NAMES = new Set(ALL_POKEMON.map((p) => p.nameKo))
// items.generated.ts 는 진화·배틀 아이템만 담는다. 그 밖의 실존 아이템은 여기에 둔다.
const EXTRA = new Set(['하트비늘', '빨간비늘', '이상한사탕', '비전머신', '기술머신'])

const dir = new URL('src/data/sample/', ROOT)
const unknown = new Map()
let checked = 0

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.data.ts'))) {
  fs.readFileSync(new URL(f, dir), 'utf8').split('\n').forEach((line, n) => {
    for (const re of [/stone:\s*'([^']+)'/g, /([가-힣]{2,6}돌)(?![가-힣])/g, /([가-힣]{1,5}비늘)(?![가-힣])/g]) {
      for (const m of line.matchAll(re)) {
        const name = m[1]
        checked++
        // 꼬마돌·화강돌처럼 이름이 '돌'로 끝나는 포켓몬은 아이템이 아니다
        if (ITEM_NAMES.has(name) || POKE_NAMES.has(name) || EXTRA.has(name)) continue
        if (!unknown.has(name)) unknown.set(name, [])
        unknown.get(name).push(`${f}:${n + 1}`)
      }
    }
  })
}

console.error(`아이템 이름 후보 ${checked.toLocaleString('ko-KR')}건 대조`)
if (unknown.size === 0) console.error('아이템 이름 이상 없음')
else {
  console.error(`\n■ 아이템 데이터에 없는 이름 ${unknown.size.toLocaleString('ko-KR')}종`)
  for (const [k, v] of unknown) console.error(`  "${k}" ${v.length}건 — ${[...new Set(v)].slice(0, 4).join(', ')}`)
  process.exitCode = 1
}
