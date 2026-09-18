import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { cn } from '../../lib/cn'
import {
  EVV_BERRIES,
  EVV_BOOSTERS,
  EVV_CAP_EXAMPLE,
  EVV_CHEATSHEET,
  EVV_EV_TO_STAT,
  EVV_EXCEPTIONS,
  EVV_FEATHERS,
  EVV_GEN_COMPARE,
  EVV_GEN_DIFFS,
  EVV_MYTHS,
  EVV_VITAMINS,
} from '../../data/sample/pokemonEvVitamins.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

/**
 * GuideTable 은 min-w-max 라 셀이 줄바꿈되지 않는다. 설명이 긴 칸은 폭을 묶어 줄을 넘기게 해야
 * PC 에서도 표가 가로로 스크롤되지 않는다. (GuideTable 자체는 다른 공략의 짧은 표를 위해 그대로 둔다)
 */
function Wrap({ children }: { children: string }) {
  // 긴 칸이 두 개 나란히 오는 표(세부 규칙)도 PC 카드 폭(약 700px)에 들어가도록 256px 로 묶는다
  return <span className="block max-w-56 whitespace-normal sm:max-w-64">{children}</span>
}

function Formula({ children }: { children: string }) {
  return <pre className="my-2 overflow-x-auto rounded-card bg-surface-hover px-3 py-2 text-xs text-ink">{children}</pre>
}

export function PokemonEvVitaminsGuidePage() {
  const style = CATEGORY_STYLE['대전']

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>대전</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">타우린은 공격을 10 올리지 않는다 — 비타민과 노력치, 세대별 정리</h1>
      <p className="mb-6 text-sm text-ink-muted">
        맥스업·타우린·사포닌·리보플라빈·키토산·알칼로이드는 능력치가 아니라 <b>노력치</b>를 올립니다. 그리고 그 규칙이
        <b> 1~2세대 / 3~7세대 / 8세대 이후</b>로 크게 갈립니다. 하는 게임이 어느 쪽인지부터 확인하세요.
      </p>

      {/* 비타민 6종 */}
      <Card className="mb-6 p-4">
        <SectionHeading>비타민 6종</SectionHeading>
        <GuideTable
          headers={['아이템', '영문', '3세대~ 대상', '1·2세대 대상']}
          rows={EVV_VITAMINS.map((v) => [<b key={v.item}>{v.item}</b>, v.en, v.stat, v.gen12])}
        />
        <p className="mt-3 text-sm text-ink">
          3세대부터 1개당 해당 능력치의 <b>노력치 +10</b>입니다. 비타민은 친밀도도 함께 올려 줍니다. 다만 친밀도만 보고
          비싼 비타민을 쓰는 건 효율이 나쁩니다.
        </p>
      </Card>

      {/* 세대별 비교 */}
      <Card className="mb-6 border-2 border-brand-red/40 p-4">
        <SectionHeading>세대별 핵심 비교</SectionHeading>
        <GuideTable
          headers={['', '1~2세대', '3~5세대', '6~7세대', '8세대~']}
          rows={EVV_GEN_COMPARE.map((r) => [<b key={r.label}>{r.label}</b>, ...r.values])}
        />
        <p className="mt-3 text-xs text-ink-muted">
          8세대~는 일반 노력치를 쓰는 본편 기준입니다. 레츠고 피카츄·이브이와 LEGENDS 아르세우스는 아래 「예외 작품」을 보세요.
        </p>
      </Card>

      {/* 1~2세대 */}
      <Card className="mb-6 p-4">
        <SectionHeading>1~2세대 — 노력치가 아니라 능력치 경험치</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>능력치마다 최대 <b>65,535</b>까지 쌓이고, 전체 합계 제한이 없습니다.</li>
          <li>쓰러뜨린 포켓몬의 종족값만큼 쌓입니다.</li>
          <li>비타민 1개는 <b>+2,560</b>, 비타민으로 올릴 수 있는 건 <b>25,600</b>까지입니다. 나머지는 전투로 채웁니다.</li>
          <li>1세대는 특수공격·특수방어가 따로 없고 <b>특수</b> 하나입니다. 리보플라빈이 특수를 올립니다.</li>
          <li>
            2세대는 실제 능력치만 특수공격·특수방어로 나뉘었고, 개체값·능력치 경험치는 여전히 하나를 공유합니다.
            그래서 <b>리보플라빈 하나가 양쪽을 다 키우고</b>, 키토산은 3세대에 처음 나옵니다.
          </li>
        </ul>
        <p className="mt-3 text-sm text-ink">
          현대식 <b>252 / 252 / 4</b> 배분 개념을 1~2세대에 그대로 가져오면 안 됩니다.
        </p>
      </Card>

      {/* 3세대~ 노력치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>3세대부터 — 510과 252</SectionHeading>
        <p className="mb-2 text-sm text-ink">
          합계 <b>510</b>, 한 능력치 <b>255</b>(6세대부터 252)가 상한입니다. 능력치 계산에는 노력치를 4로 나눈 몫이 들어가서
          레벨 100 기준 <b>4마다 1</b>씩 오릅니다.
        </p>
        <Formula>{'레벨 100 추가 능력치 = floor(노력치 ÷ 4)'}</Formula>
        <GuideTable headers={['노력치', '레벨 100 추가 능력치']} rows={EVV_EV_TO_STAT.map((r) => [r.ev.toLocaleString('ko-KR'), r.stat])} />
        <p className="mt-3 text-sm text-ink">
          그래서 255를 넣어도 252와 같고, 252 + 252 + 4 = 508을 쓰면 남은 2는 능력치 1이 되지 못합니다. 이게
          <b> 252 / 252 / 4</b>가 표준인 이유입니다. 낮은 레벨에서는 레벨에 비례해 반영량이 작게 보일 뿐 효과가 사라지는 건
          아닙니다.
        </p>
        <p className="mt-2 text-sm text-ink">
          합계 510이 먼저 차면 어떤 능력치가 100 미만이어도 비타민이 들어가지 않습니다.
        </p>
      </Card>

      {/* 비타민 한도 */}
      <Card className="mb-6 p-4">
        <SectionHeading>3~7세대 비타민은 능력치당 100까지</SectionHeading>
        <GuideTable headers={['현재 공격 노력치', '타우린 사용 후']} rows={EVV_CAP_EXAMPLE.map((r) => [r.before, r.after])} />
        <p className="mt-3 text-sm text-ink">
          타우린 26개로 바로 252를 만들 수는 없습니다. 비타민으로 100까지 올리고, 나머지는 전투·파워 계열·포켓러스·깃털로
          채웁니다. <b>8세대부터는 이 제한이 없어져</b> 비타민만으로 252까지 됩니다. 마지막 1개는 +10 전부가 아니라
          252에서 멈춥니다.
        </p>
        <Formula>{'8세대~  공격 0 → 타우린 25개 → 250 → 타우린 1개 → 252'}</Formula>
      </Card>

      {/* 늘리기 */}
      <Card className="mb-6 p-4">
        <SectionHeading>전투로 얻는 노력치 늘리기</SectionHeading>
        <GuideTable headers={['수단', '효과', '등장']} rows={EVV_BOOSTERS.map((b) => [<b key={b.item}>{b.item}</b>, <Wrap key="e">{b.effect}</Wrap>, <Wrap key="s">{b.since}</Wrap>])} />
        <p className="mt-3 text-sm text-ink">
          교정깁스와 포켓러스를 함께 쓰면 <b>4배</b>입니다. 학습장치로 경험치를 나눠 받는 포켓몬에게는 교정깁스·파워 계열
          효과가 넘어가지 않습니다.
        </p>
      </Card>

      {/* 깃털 */}
      <Card className="mb-6 p-4">
        <SectionHeading>깃털 — 1씩 미세 조정 (5세대~)</SectionHeading>
        <GuideTable headers={['능력치', '깃털']} rows={EVV_FEATHERS.map((f) => [f.stat, f.item])} />
        <p className="mt-3 text-sm text-ink">
          1개당 노력치 +1이고, 비타민과 달리 <b>100 제한을 받지 않습니다</b>. 공격 248에 근력깃털 4개를 먹이면 252가
          됩니다. 5세대 한국어판에서는 「체력날개」처럼 <b>날개</b>라고 불렀습니다.
        </p>
      </Card>

      {/* 줄이기 */}
      <Card className="mb-6 p-4">
        <SectionHeading>노력치 줄이기 — 감소 열매 (에메랄드~)</SectionHeading>
        <GuideTable headers={['줄어드는 능력치', '열매', '영문']} rows={EVV_BERRIES.map((b) => [b.stat, <b key={b.berry}>{b.berry}</b>, b.en])} />
        <p className="mt-3 text-sm text-ink">
          1개당 해당 노력치 <b>-10</b>이고 친밀도는 오릅니다. 스토리를 아무 상대나 잡으며 진행한 포켓몬은 노력치가 여러
          능력치에 흩어져 있으니, 대전용으로 다듬으려면 먼저 이 열매로 비우세요.
        </p>
      </Card>

      {/* 세대별 세부 규칙 */}
      <Card className="mb-6 p-4">
        <SectionHeading>세대마다 다른 세부 규칙</SectionHeading>
        <GuideTable headers={['항목', '예전', '지금']} rows={EVV_GEN_DIFFS.map((d) => [<b key={d.topic}>{d.topic}</b>, <Wrap key="o">{d.old}</Wrap>, <Wrap key="n">{d.now}</Wrap>])} />
        <p className="mt-3 text-sm text-ink">
          4세대에서 노력치가 많이 쌓인 포켓몬을 비울 때는 이 규칙 덕분에 열매가 훨씬 적게 듭니다. 252짜리도 첫 1개면 100이
          됩니다.
        </p>
      </Card>

      {/* 예외 */}
      <Card className="mb-6 p-4">
        <SectionHeading>예외 작품</SectionHeading>
        <GuideTable headers={['작품', '시스템', '설명']} rows={EVV_EXCEPTIONS.map((e) => [<b key={e.game}>{e.game}</b>, e.system, <Wrap key="n">{e.note}</Wrap>])} />
      </Card>

      {/* 포인트업 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포인트업·포인트맥스는 노력치와 무관</SectionHeading>
        <p className="text-sm text-ink">
          같은 약병처럼 생겼지만 기술의 최대 PP를 올립니다. 포인트업은 1회에 기본 PP의 <b>20%</b>씩, 최대 3회까지.
          포인트맥스는 3회분을 한 번에 적용해 <b>160%</b>가 됩니다. 기술을 잊으면 올려 둔 PP도 사라집니다.
        </p>
        <Formula>{'기본 PP 5 → 포인트업 1회 6 → 2회 7 → 3회 8  (포인트맥스는 바로 8)'}</Formula>
      </Card>

      {/* 착각 */}
      <Card className="mb-6 p-4">
        <SectionHeading>자주 하는 착각</SectionHeading>
        <div className="flex flex-col gap-3">
          {EVV_MYTHS.map((m) => (
            <div key={m.myth}>
              <p className="text-sm font-bold text-ink">✗ {m.myth}</p>
              <p className="text-sm text-ink-muted">{m.truth}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 요약 */}
      <Card className="mb-6 p-4">
        <SectionHeading>세대별로 이것만 기억</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {EVV_CHEATSHEET.map((c) => (
            <div key={c.gens} className="rounded-card border border-border p-3">
              <p className="mb-1 text-sm font-black text-ink">{c.gens}</p>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-ink">
                {c.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </GuidePageLayout>
  )
}
