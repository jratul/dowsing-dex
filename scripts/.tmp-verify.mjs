import fs from 'node:fs'
const { ALL_MOVES } = await import('file:///d:/dev/dowsing-dex/src/data/moves/all-moves.generated.ts')
const M = new Map(ALL_MOVES.map(m=>[m.id,m.nameKo]))
const HM = ['풀베기','공중날기','파도타기','괴력','안개제거','바위깨기','폭포오르기','록클라임']
const out=[]
for (const [id,name] of [[400,'비버통'],[398,'찌르호크'],[445,'한카리아스'],[395,'엠페르트'],[389,'토대부기'],[392,'초염몽'],[405,'렌트라'],[130,'갸라도스']]) {
  const arr = Object.values(await import(`file:///d:/dev/dowsing-dex/src/data/moves/by-id/${id}.generated.ts`))[0]
  const g = arr.find(x=>x.version==='플래티넘')
  const set = new Set(g.machines.map(e=>M.get(e.moveId)))
  out.push(`${name.padEnd(6)} HM: ${HM.map(h=>set.has(h)?h:`✗${h}`).join(' ')}`)
  out.push(`       화염방사=${set.has('화염방사')} 10만볼트=${set.has('10만볼트')} 지진=${set.has('지진')} 악의파동=${set.has('악의파동')} 섀도클로=${set.has('섀도클로')} 섀도볼=${set.has('섀도볼')}`)
}
fs.writeFileSync('scripts/.tmp-out.txt', out.join('\n'),'utf8')
