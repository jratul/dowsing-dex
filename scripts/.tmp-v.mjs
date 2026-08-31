import fs from 'node:fs'
const { ALL_MOVES } = await import('file:///d:/dev/dowsing-dex/src/data/moves/all-moves.generated.ts')
const M = new Map(ALL_MOVES.map(m=>[m.id,m.nameKo]))
const arr = Object.values(await import('file:///d:/dev/dowsing-dex/src/data/moves/by-id/365.generated.ts'))[0]
const g = arr.find(x=>x.version==='에메랄드')
const n = new Set(g.machines.map(e=>M.get(e.moveId)))
fs.writeFileSync('scripts/.tmp-out.txt', `씨카이저(365) 다이빙=${n.has('다이빙')} 파도타기=${n.has('파도타기')} 폭포오르기=${n.has('폭포오르기')} 바위깨기=${n.has('바위깨기')}`,'utf8')
