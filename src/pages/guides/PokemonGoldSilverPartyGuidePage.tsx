import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../../components/guide/GuidePageLayout'
import { Card } from '../../components/ui/Card'
import { GuideTable } from '../../components/guide/GuideTable'
import { PokemonLink } from '../../components/guide/PokemonLink'
import { MoveLink } from '../../components/guide/MoveLink'
import { CATEGORY_STYLE } from '../../lib/guideCategory'
import { cn } from '../../lib/cn'
import {
  GSP_ELITE,
  GSP_FIELD_MOVES,
  GSP_GYMS,
  GSP_HGSS_COMPARE,
  GSP_HM_TABLE,
  GSP_KANTO_GYMS,
  GSP_KANTO_ORDER,
  GSP_LEGENDARY,
  GSP_MISSING_SYSTEMS,
  GSP_MOVESETS,
  GSP_PARTY,
  GSP_PHYSICAL_TYPES,
  GSP_RED,
  GSP_REEVALUATED,
  GSP_SPECIAL_TYPES,
  GSP_SPLIT_EXAMPLES,
  GSP_TIMELINE,
  GSP_TIPS,
  GSP_TMS,
  GSP_VERSION_EXCLUSIVE,
  GSP_WATERFALL_SPOTS,
} from '../../data/sample/pokemonGoldSilverParty.data'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function HowBadge({ how }: { how: string }) {
  if (how.startsWith('HM')) return <span className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-red-700 dark:bg-red-900/40 dark:text-red-300">{how}</span>
  if (how.startsWith('TM')) return <span className="inline-block rounded bg-blue-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{how}</span>
  if (how.startsWith('Lv.')) return <span className="inline-block rounded bg-green-100 px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-green-700 dark:bg-green-900/40 dark:text-green-300">{how}</span>
  return <span className="inline-block rounded bg-surface-hover px-1.5 py-0.5 text-xxs font-bold whitespace-nowrap text-ink-muted">{how}</span>
}

/** GuideTable 은 min-w-max 라 셀이 줄바꿈되지 않는다. 설명이 긴 칸만 폭을 묶어 PC 가로 스크롤을 막는다. */
function Wrap({ children }: { children: string }) {
  return <span className="block max-w-44 whitespace-normal sm:max-w-52">{children}</span>
}

function Roster({ roster }: { roster: { pokemonId: number; pokemon: string; level: number }[] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1">
      {roster.map((m, i) => (
        <span key={`${m.pokemonId}-${m.level}-${i}`} className="min-h-7 text-sm leading-loose whitespace-nowrap text-ink">
          <PokemonLink id={m.pokemonId} /> <span className="text-xs text-ink-muted">Lv.{m.level}</span>
        </span>
      ))}
    </div>
  )
}

export function PokemonGoldSilverPartyGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout generation="2세대" version="골드·실버">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={cn('rounded-chip bg-white px-2 py-0.5 text-xs font-bold', style.pillClass)}>공략</span>
      </div>

      <h1 className="mb-1 text-2xl font-black text-ink">금·은 6마리로 비전머신 7개 다 쓰기 — 레드까지 가는 원작 파티</h1>
      <p className="mb-6 text-sm text-ink-muted">
        2세대 원작 기준입니다. 통신교환이 되는 환경을 전제로 <b>6마리를 고정</b>하고, 금·은의 비전머신 7개를 그 안에서
        전부 소화합니다. PC에 비전머신 요원을 따로 두지 않고 사천왕 → 관동 → 레드까지 그대로 밉니다.
        크리스탈은 일부 입수처가 다릅니다.
      </p>

      {/* 최종 엔트리 */}
      <Card className="mb-6 border-2 border-brand-red/40 p-4">
        <SectionHeading>최종 엔트리</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {GSP_PARTY.map((p) => (
            <div key={p.pokemonId} className="rounded-card border border-border p-3">
              <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-base font-black text-ink">
                  <PokemonLink id={p.pokemonId} />
                </span>
                <span className="text-xs text-ink-muted">{p.role}</span>
              </div>
              <p className="text-sm text-ink">{p.strength}</p>
              <p className="mt-1 text-xs font-bold text-brand-red">{p.hm}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink">
          <PokemonLink id={65} />에게는 비전머신을 하나도 넣지 않고, 부담이 큰 수상 비전머신 3개를 <PokemonLink id={55} />에게
          몰아주는 설계입니다. 2세대에서는 파도타기와 폭포오르기가 <b>둘 다 특수</b>라, 골덕은 비전머신 담당치고 전투력도
          제대로 나옵니다.
        </p>
      </Card>

      {/* 2세대 시스템 */}
      <Card className="mb-6 p-4">
        <SectionHeading>먼저 알아야 할 것 — 2세대는 타입으로 물리·특수가 갈린다</SectionHeading>
        <div className="mb-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-border p-3">
            <p className="mb-1 text-sm font-black text-ink">물리 타입</p>
            <p className="text-sm text-ink">{GSP_PHYSICAL_TYPES.join(' · ')}</p>
          </div>
          <div className="rounded-card border border-border p-3">
            <p className="mb-1 text-sm font-black text-ink">특수 타입</p>
            <p className="text-sm text-ink">{GSP_SPECIAL_TYPES.join(' · ')}</p>
          </div>
        </div>
        <GuideTable
          headers={['기술', '타입', '2세대 분류', '그래서']}
          rows={GSP_SPLIT_EXAMPLES.map((e) => [
            <MoveLink key={e.move} name={e.move} />,
            e.type,
            e.category,
            <Wrap key="n">{e.note}</Wrap>,
          ])}
        />
        <p className="mt-3 text-sm text-ink">
          그래서 <b>3색 펀치를 배우는 특수형 포켓몬</b>의 가치가 압도적입니다. <PokemonLink id={65} />이 특공 135로 세 펀치를
          전부 쏘는 게 이 파티의 중심입니다.
        </p>
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">4세대 감각으로 오면 없는 것들</h3>
        <GuideTable headers={['요소', '설명']} rows={GSP_MISSING_SYSTEMS.map((m) => [m.system, <Wrap key="d">{m.detail}</Wrap>])} />
      </Card>

      {/* HM 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>비전머신 7개 배치</SectionHeading>
        <GuideTable
          headers={['번호', '기술', '입수처', '필드 사용 배지', '담당', '진행 필요도']}
          rows={GSP_HM_TABLE.map((h) => [
            <HowBadge key={h.code} how={h.code} />,
            <MoveLink key={h.move} name={h.move} />,
            <Wrap key="w">{h.where}</Wrap>,
            h.badge,
            h.owner,
            <Wrap key="n">{h.need}</Wrap>,
          ])}
        />
        <p className="mt-3 text-sm text-ink">
          HM은 아니지만 필드기가 하나 더 있습니다. <b>TM08 <MoveLink name="바위깨기" /></b>는 36번도로에서 물뿌리개로
          꼬지모를 치운 뒤 동쪽 남자에게 받고, 그 뒤로는 금빛시티 백화점에서 1,000원에 다시 살 수 있습니다.
          배지 제한 없이 바로 쓸 수 있고 담당은 <PokemonLink id={181} />입니다. 하트골드·소울실버에서는 같은 기술이
          HM06으로 바뀝니다.
        </p>

        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">필드기 전체 담당</h3>
        <GuideTable
          headers={['필드기', '번호', '담당', '비고']}
          rows={GSP_FIELD_MOVES.map((f) => [
            <MoveLink key={f.move} name={f.move} />,
            <HowBadge key={`${f.move}-code`} how={f.code} />,
            f.owner,
            <Wrap key={`${f.move}-note`}>{f.note}</Wrap>,
          ])}
        />

        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">폭포오르기는 정확히 어디에서 필요한가</h3>
        <div className="flex flex-col gap-2">
          {GSP_WATERFALL_SPOTS.map((s) => (
            <div key={s.place} className="rounded-card border border-border p-3">
              <p className="mb-0.5 text-sm font-bold text-ink">
                {s.place}
                {s.required && <span className="ml-1.5 rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-700 dark:bg-red-900/40 dark:text-red-300">메인 필수</span>}
              </p>
              <p className="text-sm text-ink-muted">{s.why}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 영입 순서 */}
      <Card className="mb-6 p-4">
        <SectionHeading>영입 순서 — 진행하면서 자연스럽게 완성한다</SectionHeading>
        <GuideTable
          headers={['', '장소', '할 일', '비고']}
          rows={GSP_TIMELINE.map((t) => [t.step, t.where, <Wrap key="w">{t.what}</Wrap>, <Wrap key="n">{t.note}</Wrap>])}
        />
      </Card>

      {/* 기술 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포켓몬별 기술 배치</SectionHeading>
        <div className="flex flex-col gap-5">
          {GSP_MOVESETS.map((s) => (
            <div key={s.pokemonId} className="defer-offscreen">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-base font-black text-ink">
                  <PokemonLink id={s.pokemonId} />
                </span>
                <span className="text-xs text-ink-muted">
                  레벨업 {s.levelUp.map((l) => `${l.level} ${l.move}`).join(' · ')}
                </span>
              </div>
              <GuideTable
                headers={['기술', '습득', '용도']}
                rows={s.moveTable.map((m) => [
                  <MoveLink key={m.move} name={m.move} />,
                  <HowBadge key={`${m.move}-how`} how={m.how} />,
                  <Wrap key={`${m.move}-use`}>{m.usage}</Wrap>,
                ])}
              />
              <p className="mt-1.5 text-xs text-ink-muted">{s.note}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 전룡 기술칸 */}
      <Card className="mb-6 p-4">
        <SectionHeading>전룡의 네 번째 칸 — 바위깨기에서 빛의장막으로</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-card border border-border p-3">
            <p className="mb-1 text-sm font-black text-ink">진행 중 (Lv.42 전)</p>
            <p className="text-sm text-ink">번개펀치 · 전기자석파 · 플래시 · <b>바위깨기</b></p>
          </div>
          <div className="rounded-card border border-border p-3">
            <p className="mb-1 text-sm font-black text-ink">최종</p>
            <p className="text-sm text-ink">번개펀치 · 전기자석파 · 플래시 · <b>빛의장막</b></p>
          </div>
        </div>
        <p className="mt-3 text-sm text-ink">
          빛의장막은 Lv.42라 초중반에는 어차피 비는 칸입니다. 거기에 바위깨기를 넣어 두고, 바위를 더 깰 일이 없어지면
          덮어씁니다. <b>금·은에서는 바위깨기가 TM이라 기술삭제 NPC 없이 다른 기술로 덮어쓸 수 있습니다.</b>
          (하트골드·소울실버에서는 HM06이라 지우려면 기술삭제 NPC가 필요합니다.)
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          엔트리에서 바위깨기를 배울 수 있는 건 블레이범·전룡·골덕·괴력몬 넷뿐입니다(후딘·깨비드릴조는 못 배웁니다).
          블레이범은 이미 풀베기를 들고 있고, 골덕은 수상 비전머신으로 4칸이 차고, 괴력몬은 크로스촙·받아던지기·지진·괴력이
          기다리고 있어 전룡이 가장 부담이 적습니다. 2세대 바위깨기는 위력 20이라 전투 성능은 사실상 없습니다(4세대부터 40).
        </p>
      </Card>

      {/* TM */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술머신 배분</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          금빛시티 백화점 5층의 <b>3색 펀치</b>가 이 공략의 핵심 구매입니다. 각 3,000원이고 여러 번 살 수 있어 한 마리에게만
          아낄 필요가 없습니다.
        </p>
        <div className="flex flex-col gap-2">
          {GSP_TMS.map((t) => (
            <div key={t.code} className="rounded-card border border-border p-3">
              <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <HowBadge how={t.code} />
                <span className="text-sm font-bold text-ink">
                  <MoveLink name={t.move} />
                </span>
                <span className="text-xs text-ink-muted">{t.where}</span>
              </div>
              <p className="text-sm text-ink">
                <b>{t.to}</b> — {t.note}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* 체육관 */}
      <Card className="mb-6 p-4">
        <SectionHeading>성도 체육관 8곳</SectionHeading>
        <div className="flex flex-col gap-3">
          {GSP_GYMS.map((g) => (
            <div key={g.order} className="defer-offscreen rounded-card border border-border p-3">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-sm font-black text-ink">
                  {g.order}. {g.leader}
                </span>
                <span className="text-xs text-ink-muted">{g.city}</span>
              </div>
              <Roster roster={g.roster} />
              <p className="mt-1.5 text-xs text-ink">
                <b>대응</b> — {g.counter}
              </p>
              <p className="mt-0.5 text-xs text-ink-muted">보상 — {g.reward}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 사천왕 */}
      <Card className="mb-6 p-4">
        <SectionHeading>사천왕과 목호</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          사천왕 첫 상대가 Lv.40, 목호의 마지막 <PokemonLink id={149} />이 Lv.50입니다. 주력 42 전후면 충분하고, 전원을
          50까지 올릴 필요는 없습니다.
        </p>
        <div className="flex flex-col gap-3">
          {GSP_ELITE.map((g) => (
            <div key={g.order} className="defer-offscreen rounded-card border border-border p-3">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-sm font-black text-ink">{g.leader}</span>
                <span className="text-xs text-ink-muted">{g.order}</span>
              </div>
              <Roster roster={g.roster} />
              <p className="mt-1.5 text-xs text-ink">
                <b>대응</b> — {g.counter}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* 관동 */}
      <Card className="mb-6 p-4">
        <SectionHeading>관동 진행</SectionHeading>
        <ol className="mb-4 list-decimal space-y-1 pl-5 text-sm text-ink">
          {GSP_KANTO_ORDER.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <GuideTable headers={['관장', '타입', '대응']} rows={GSP_KANTO_GYMS.map((g) => [g.leader, g.type, <Wrap key="p">{g.plan}</Wrap>])} />
      </Card>

      {/* 레드 */}
      <Card className="mb-6 p-4">
        <SectionHeading>레드전 1:1 대응</SectionHeading>
        <GuideTable
          headers={['포켓몬', '레벨', '대응']}
          rows={GSP_RED.map((r) => [
            <PokemonLink key={r.pokemonId} id={r.pokemonId} />,
            `Lv.${r.level}`,
            <Wrap key="c">{r.counter}</Wrap>,
          ])}
        />
        <p className="mt-3 text-sm text-ink">
          2세대 최고 레벨 트레이너입니다. 상성만 맞추면 Lv.70을 넘길 필요까지는 없지만, 편하게 가려면 주력을 60대까지
          올려 두는 편이 좋습니다.
        </p>
      </Card>

      {/* 운영 팁 */}
      <Card className="mb-6 p-4">
        <SectionHeading>운영 팁</SectionHeading>
        <div className="flex flex-col gap-3">
          {GSP_TIPS.map((t) => (
            <div key={t.title}>
              <p className="text-sm font-bold text-ink">{t.title}</p>
              <p className="text-sm text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 버전 차이 */}
      <Card className="mb-6 p-4">
        <SectionHeading>금 버전과 은 버전</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          이 엔트리 6마리는 양쪽 버전에서 모두 똑같이 모을 수 있습니다. 엔트리 때문에 버전을 고를 이유는 없습니다.
        </p>
        <GuideTable headers={['금 한정', '은 한정']} rows={GSP_VERSION_EXCLUSIVE.map((v) => [v.gold, v.silver])} />
        <p className="mt-3 text-sm text-ink">
          단 <b>코코리·코리갑과 깜지곰·링곰은 한국·일본판이 국제판과 반대</b>입니다. 한국판과 일본판은 금에 코코리·코리갑,
          은에 깜지곰·링곰이 나옵니다. 위 표는 국제판 기준입니다.
        </p>
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">칠색조와 루기아는 한 버전에서 둘 다 잡는다</h3>
        <GuideTable headers={['버전', '먼저 만나는 쪽', '나중에 만나는 쪽']} rows={GSP_LEGENDARY.map((l) => [l.version, l.first, l.later])} />
        <p className="mt-2 text-sm text-ink-muted">
          차이는 어느 쪽을 낮은 레벨로 먼저 만나느냐입니다. Lv.40으로 먼저 만나는 쪽은 전용기를 들고 나오고, Lv.70으로 늦게
          만나는 반대쪽은 기술 구성이 다릅니다.
        </p>
      </Card>

      {/* HGSS 비교 */}
      <Card className="mb-6 p-4">
        <SectionHeading>하트골드·소울실버와 무엇이 다른가</SectionHeading>
        <GuideTable headers={['항목', '금·은', '하트골드·소울실버']} rows={GSP_HGSS_COMPARE.map((c) => [c.topic, <Wrap key="g">{c.gs}</Wrap>, <Wrap key="h">{c.hgss}</Wrap>])} />
        <h3 className="mt-4 mb-2 text-sm font-black text-ink-faint">물리·특수 분리로 평가가 뒤집히는 포켓몬</h3>
        <GuideTable
          headers={['포켓몬', '금·은', '하트골드·소울실버']}
          rows={GSP_REEVALUATED.map((r) => [
            <PokemonLink key={r.pokemonId} id={r.pokemonId} />,
            <Wrap key="g">{r.gs}</Wrap>,
            <Wrap key="h">{r.hgss}</Wrap>,
          ])}
        />
        <p className="mt-3 text-sm text-ink">
          그래서 <b>원작 기술 구성을 리메이크에 그대로 복사하면 안 됩니다.</b> 특히 <PokemonLink id={65} />은 두 작품에서
          완전히 다르게 짜야 합니다.
        </p>
      </Card>
    </GuidePageLayout>
  )
}
