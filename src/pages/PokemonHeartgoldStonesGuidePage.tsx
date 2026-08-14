import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import { HGS_STONES, type StoneEntry } from '../data/sample/pokemonHeartgoldStones.data'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function SubHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h3 id={id} className="mb-2 flex items-center gap-2 text-base font-black text-ink">{children}</h3>
}

const METHOD_BADGE: Record<StoneEntry['acquisitions'][number]['type'], string> = {
  pokeathlom: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  contest: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  npc: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'item-ball': 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  wild: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  event: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
}

const METHOD_LABEL: Record<StoneEntry['acquisitions'][number]['type'], string> = {
  pokeathlom: '포켓슬론',
  contest: '대회',
  npc: 'NPC',
  'item-ball': '아이템 볼',
  wild: '야생 지니기',
  event: '이벤트',
}

function MethodBadge({ type }: { type: StoneEntry['acquisitions'][number]['type'] }) {
  return (
    <span className={`inline-block shrink-0 rounded px-1.5 py-0.5 text-xxs font-bold ${METHOD_BADGE[type]}`}>
      {METHOD_LABEL[type]}
    </span>
  )
}

function EvoArrow() {
  return <span className="text-ink-muted">→</span>
}

function PokemonSprite({ id, name }: { id: number; name: string }) {
  const data = findSamplePokemon(id)
  return (
    <div className="flex flex-col items-center gap-0.5">
      <SpriteImage src={data.spriteUrl} alt={name} width={40} height={40} />
      <PokemonLink id={id} />
    </div>
  )
}

export function PokemonHeartgoldStonesGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout>
      {/* 헤더 */}
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="mb-2 text-2xl font-black text-ink">하트골드 진화의 돌 완전 공략</h1>
      <p className="mb-6 text-sm text-ink-muted">
        하트골드·소울실버(HGSS)에서 얻을 수 있는 진화의 돌 9종 전체 — 진화 대상 포켓몬과 돌별 입수 방법 정리.
      </p>

      {/* 빠른 이동 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 목록 (빠른 이동)</SectionHeading>
        <div className="flex flex-wrap gap-2">
          {HGS_STONES.map((s) => (
            <a
              key={s.apiName}
              href={`#${s.apiName}`}
              className="flex items-center gap-1.5 rounded-chip border border-border px-2 py-1 text-xs font-semibold text-ink-muted transition-colors hover:border-brand-red hover:text-brand-red"
            >
              <img src={s.spriteUrl} alt={s.nameKo} width={20} height={20} loading="lazy" />
              {s.nameKo}
            </a>
          ))}
        </div>
      </Card>

      {/* 전체 요약 표 */}
      <Card className="mb-6 overflow-x-auto p-0">
        <div className="p-4 pb-0">
          <SectionHeading>진화 대상 한눈에 보기</SectionHeading>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-hover">
              <th className="p-3 text-left font-semibold text-ink">돌</th>
              <th className="p-3 text-left font-semibold text-ink">진화 쌍</th>
              <th className="p-3 text-left font-semibold text-ink">주요 입수처</th>
            </tr>
          </thead>
          <tbody>
            {HGS_STONES.map((s) => (
              <tr key={s.apiName} className="border-b border-border hover:bg-surface-hover/50">
                <td className="whitespace-nowrap p-3">
                  <a href={`#${s.apiName}`} className="flex items-center gap-1.5 font-bold text-ink hover:text-brand-red">
                    <img src={s.spriteUrl} alt={s.nameKo} width={24} height={24} loading="lazy" />
                    {s.nameKo}
                  </a>
                  <div className="text-xxs text-ink-muted">{s.nameEn}</div>
                </td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {s.evolutions.map((e) => (
                      <span key={e.toId} className="text-xs text-ink">
                        {e.fromName} → {e.toName}
                        {e.note && <span className="ml-1 text-xxs text-ink-muted">({e.note})</span>}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-1">
                    {s.acquisitions.map((a, i) => (
                      <MethodBadge key={i} type={a.type} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* 공통 입수처: 포켓슬론 돔 */}
      <Card className="mb-6 p-4">
        <SectionHeading>공통 입수처 — 포켓슬론 돔 (성도)</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          성도 포켓슬론 돔의 상점에서 <strong>경기 포인트</strong>를 소모해 진화의 돌을 구매할 수 있다.
          9종 모두 구매 가능하며, <strong>요일마다 판매하는 돌이 달라진다.</strong>
          스토리 중에도 이용 가능하며 포인트만 충분하면 반복 구매할 수 있어 가장 효율적인 입수 방법이다.
        </p>
        <div className="rounded-card border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          <strong>Tip.</strong> 4세대 신규 돌(빛의돌·어둠의돌·각성의돌)은 기본 돌보다 필요 포인트가 많다.
          포켓슬론 종목 중 높은 점수를 받을 수 있는 종목을 반복해 포인트를 효율적으로 쌓는 것이 핵심이다.
        </div>
      </Card>

      {/* 돌별 상세 카드 */}
      <div className="space-y-6">
        {HGS_STONES.map((stone) => (
          <Card key={stone.apiName} id={stone.apiName} className="p-4">
            <SubHeading id={stone.apiName}>
              <img src={stone.spriteUrl} alt={stone.nameKo} width={28} height={28} loading="lazy" />
              {stone.nameKo}
              <span className="text-sm font-normal text-ink-muted">{stone.nameEn}</span>
            </SubHeading>

            {/* 진화 대상 */}
            <div className="mb-4">
              <p className="mb-2 text-xxs font-bold uppercase tracking-wide text-ink-muted">진화 대상</p>
              <div className="flex flex-wrap gap-4">
                {stone.evolutions.map((e) => (
                  <div key={e.toId} className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <PokemonSprite id={e.fromId} name={e.fromName} />
                      <EvoArrow />
                      <PokemonSprite id={e.toId} name={e.toName} />
                    </div>
                    {e.note && (
                      <span className="rounded bg-surface-hover px-1.5 py-0.5 text-xxs text-ink-muted">{e.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 입수 방법 */}
            <div>
              <p className="mb-2 text-xxs font-bold uppercase tracking-wide text-ink-muted">입수 방법</p>
              <div className="space-y-2">
                {stone.acquisitions.map((a, i) => (
                  <div key={i} className="rounded-card border border-border bg-surface-hover/40 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <MethodBadge type={a.type} />
                      <span className="text-sm font-bold text-ink">{a.label}</span>
                      {a.once && (
                        <span className="rounded bg-red-100 px-1.5 py-0.5 text-xxs font-bold text-red-600 dark:bg-red-900/40 dark:text-red-300">
                          1회
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink-muted">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 이수재의 할아버지 통합 안내 */}
      <Card className="mt-6 p-4">
        <SectionHeading>이수재의 할아버지 — 5종 돌 일괄 입수</SectionHeading>
        <p className="mb-3 text-sm text-ink">
          사천왕 클리어 후 관동 지방에 진입하면, <strong>관동 25번도로 끝 집</strong>에서
          이수재의 할아버지를 만날 수 있다.
          특정 포켓몬을 보여주면 <strong>일회성으로 돌을 1개씩</strong> 받을 수 있다.
        </p>
        <GuideTable
          headers={['보여줄 포켓몬', '받을 수 있는 돌', '비고']}
          rows={[
            ['삐삐', '달의돌', ''],
            ['피카츄', '천둥의돌', ''],
            ['별가사리', '물의돌', ''],
            ['식스테일', '불꽃의돌', ''],
            ['뚜벅쵸', '리프의돌', ''],
          ]}
        />
        <div className="mt-3 rounded-card border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
          각 포켓몬을 처음 보여줄 때 1회만 받는다. 레벨 제한 없이 해당 포켓몬이면 된다.
          달의돌·천둥의돌·물의돌·불꽃의돌·리프의돌 5종을 관동 탐험 중에 무료로 확보할 수 있는 기회.
        </div>
      </Card>

      {/* 특수 진화 안내 */}
      <Card className="mt-6 p-4">
        <SectionHeading>HGSS 전용 특이 진화 안내</SectionHeading>
        <div className="space-y-3 text-sm">
          <div className="rounded-card border border-border p-3">
            <div className="mb-1 flex items-center gap-2">
              <PokemonLink id={133} />
              <span className="text-ink-muted">의 여러 갈래 진화</span>
            </div>
            <p className="text-xs text-ink-muted">
              이브이는 불꽃의돌→부스터, 물의돌→샤미드, 천둥의돌→쥬피썬더로 진화한다.
              리피아(리프의돌 진화)·글레이시아(얼음의돌 진화)는 HGSS에서 돌이 아닌
              <strong> 특정 장소에서 레벨업</strong>하는 방식으로만 진화한다.
              에브이(태양 + 친밀도·낮)·블래키(달 + 친밀도·밤)는 돌 없이 친밀도로 진화.
            </p>
          </div>
          <div className="rounded-card border border-border p-3">
            <div className="mb-1 font-bold text-ink">성별 제한 진화 (각성의돌)</div>
            <p className="text-xs text-ink-muted">
              킬리아는 <strong>♂만</strong> 각성의돌로 엘레이드가 된다.
              ♀ 킬리아는 각성의돌을 써도 아무 반응이 없으며, 레벨 30에 가디안으로 자연 진화한다.
              눈꼬마는 <strong>♀만</strong> 각성의돌로 눈여아가 된다.
              ♂ 눈꼬마는 레벨 42에 얼음귀신으로 자연 진화한다.
            </p>
          </div>
          <div className="rounded-card border border-border p-3">
            <div className="mb-1 font-bold text-ink">냄새꼬의 두 갈래 진화</div>
            <p className="text-xs text-ink-muted">
              냄새꼬는 리프의돌로 라플레시아, 태양의돌로 아르코가 된다.
              아르코가 HGSS에서 더 구하기 어려운 이유는 태양의돌이 포충대회·포켓슬론에 의존하기 때문.
              리프의돌은 이수재의 할아버지에게서 무료로 받을 수 있어 더 수월하다.
            </p>
          </div>
        </div>
      </Card>
    </GuidePageLayout>
  )
}
