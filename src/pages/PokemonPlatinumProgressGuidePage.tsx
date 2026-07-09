import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { GuideTable } from '../components/guide/GuideTable'
import { CATEGORY_STYLE } from '../lib/guideCategory'

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

function SubHeading({ children }: { children: string }) {
  return <h3 className="mb-2 mt-5 text-sm font-black text-ink">{children}</h3>
}

// ─── HM 일람 ──────────────────────────────────────────────────────────────────

const HM_TABLE = [
  {
    id: 'HM01',
    move: '풀베기',
    badge: '1관 탄광배지',
    obtain: '영원시티 — 갤럭시단 본부 이벤트 해결 후 NPC 수령',
    unlocks: '204번도로·영원숲 풀베기 나무 제거. 영원시티 이후 진행 필수',
  },
  {
    id: 'HM02',
    move: '공중날기',
    badge: '3관 철권배지',
    obtain: '장막시티 — 갤럭시단 창고 이벤트 후 갤럭시 그런트가 드롭',
    unlocks: '이동 편의성. 공중날기로 방문한 마을 어디든 즉시 이동',
  },
  {
    id: 'HM03',
    move: '파도타기',
    badge: '5관 유산배지',
    obtain: '봉신마을 — 갤럭시단 이벤트 후 박사 할머니에게서 수령',
    unlocks: '수중 이동 전체. 218번도로로 운하시티 진입. 6관 이후 필수',
  },
  {
    id: 'HM04',
    move: '괴력',
    badge: '6관 광산배지',
    obtain: '특정 NPC (게임 중반~후반 구간)',
    unlocks: '일부 동굴·경로의 무거운 바위 제거. 천관산 일부 경로',
  },
  {
    id: 'HM05',
    move: '안개걷기',
    badge: '2관 숲배지',
    obtain: '대습초원 구역 NPC 또는 들판시티 인근',
    unlocks: '210번도로 북부 안개 제거. 안개 속에서 자유 이동 가능',
  },
  {
    id: 'HM06',
    move: '바위깨기',
    badge: '4관 파수배지',
    obtain: '들판시티 인근 NPC (갤럭시단 이벤트 해결 후)',
    unlocks: '경로·동굴 내 장애물 바위 제거. 천관산·승리로드 통과',
  },
  {
    id: 'HM07',
    move: '폭포오르기',
    badge: '8관 등대배지',
    obtain: '물가시티 — 특정 NPC에게서 수령',
    unlocks: '폭포 등반. 승리로드 내 폭포. 8관 배지 직후 사천왕 진출 경로 개방',
  },
  {
    id: 'HM08',
    move: '바위오르기',
    badge: '7관 고드름배지',
    obtain: '217번도로 인근 또는 선단시티 주변 NPC',
    unlocks: '절벽 등반. 210번도로 동쪽 절벽 → 물가시티 진입 필수',
  },
]

// ─── 체육관별 사전 조건 ────────────────────────────────────────────────────────

const GYM_PREREQS = [
  {
    gym: '1관 무쇠시티 — 강석 (바위)',
    steps: [
      { label: '구릉터 탄광 방문', detail: '무쇠시티 동쪽 탄광. 강석이 체육관이 아닌 탄광 안에 있다. 탄광에서 대화 후 체육관 개방' },
    ],
    tip: '탄광은 짧은 던전. 박사가 준 포켓몬만 있어도 진입 가능',
  },
  {
    gym: '2관 영원시티 — 유채 (풀)',
    steps: [
      { label: '탄광배지(1관) 취득', detail: 'HM01 풀베기 필드 사용 조건. 1관을 먼저 깨야 한다' },
      { label: '꽃향기마을 바람발전소 갤럭시단 이벤트', detail: '발전소 앞에서 갤럭시단이 점거 중. 이벤트 해결 후 영원숲 방향 진행 가능' },
      { label: 'HM01 풀베기 + 영원숲 나무 제거', detail: '영원숲 입구 나무를 풀베기로 자른 뒤 숲을 통과해 영원시티 진입' },
      { label: '영원시티 갤럭시단 본부 이벤트', detail: '갤럭시단 영원 본부에 잡혀 있는 NPC를 구출. 완료 후 HM01 획득 가능 + 2관 도전 가능' },
    ],
    tip: 'HM01은 갤럭시단 본부 이벤트가 끝나야 받을 수 있다. 먼저 본부를 클리어할 것',
  },
  {
    gym: '3관 장막시티 — 자두 (격투) ★플래티넘 기준 3번째',
    steps: [
      { label: '숲배지(2관) 취득', detail: 'HM05 안개걷기 필드 사용 조건' },
      { label: '자전거 입수', detail: '영원시티 자전거 가게. 갤럭시단 본부 이벤트 완료 후 가게 주인에게서 무상으로 받음. 206번도로 자전거 도로 통과에 필수' },
      { label: '연고시티 경유', detail: '영원시티 → 연고시티 경유 후 장막시티 방향 진행. 연고시티 5관(멜리사)은 이 시점에서는 아직 도전 불가' },
      { label: '장막시티 갤럭시단 창고 이벤트', detail: '갤럭시단 창고를 조사하면 이벤트. 완료 후 HM02 공중날기 입수 가능. 3관은 이벤트와 무관하게 도전 가능' },
    ],
    tip: '★다이아몬드·펄에서는 자두가 4관이지만 플래티넘에서는 3관. 진행 순서가 다름을 주의',
  },
  {
    gym: '4관 들판시티 — 맥실러 (물) ★플래티넘 기준 4번째',
    steps: [
      { label: '철권배지(3관) 취득', detail: 'HM02 공중날기 필드 사용 조건' },
      { label: '자전거 도로(206번도로) 통과 또는 우회', detail: '자전거 없이는 자전거 도로를 통과할 수 없다. 영원시티에서 자전거를 받아야 함' },
      { label: '212번도로(진흙길) 통과', detail: '연고시티 → 212번도로 남쪽 → 들판시티. 비가 내리는 진흙탕 구간으로 이동이 느리지만 HM 불필요' },
      { label: '대습초원 갤럭시단 이벤트 해결', detail: '들판시티 북쪽 대습초원 앞에서 갤럭시단이 등장. 이벤트 해결 후 HM06 바위깨기 입수 가능. 4관 체육관 자체는 직접 도전 가능' },
    ],
    tip: '★다이아몬드·펄에서는 멜리사가 3관이었으나 플래티넘에서는 맥실러(물)가 4관. 순서 혼동 주의',
  },
  {
    gym: '5관 연고시티 — 멜리사 (고스트) ★플래티넘 기준 5번째',
    steps: [
      { label: '파수배지(4관) 취득', detail: 'HM06 바위깨기 필드 사용 조건. 멜리사는 4관 취득 후 연고시티로 돌아온다' },
      { label: '멜리사 복귀 확인', detail: '처음 연고시티에 도착했을 때 멜리사는 자리를 비운 상태. 4관 배지를 취득하면 체육관에 복귀함' },
    ],
    tip: '★멜리사는 게임 초반부터 연고시티 체육관에 있지 않다. 4관을 먼저 깨고 돌아와야 5관 도전 가능',
  },
  {
    gym: '6관 운하시티 — 동관 (강철)',
    steps: [
      { label: '유산배지(5관) 취득', detail: 'HM03 파도타기 필드 사용 조건' },
      { label: 'HM03 파도타기 입수', detail: '봉신마을에서 박사 할머니에게서 받음. 봉신마을 갤럭시단 이벤트 완료 후 수령' },
      { label: '봉신마을 도달 경로', detail: '연고시티 → 동쪽 209번도로 → 신수마을 → 210번도로 → 봉신마을. 210번도로 북부는 안개(HM05+2관 배지) 구간' },
      { label: '218번도로 파도타기로 운하시티 이동', detail: '축복시티 서쪽 218번도로는 수중 구간. 파도타기로 건너야 운하시티 도달 가능' },
    ],
    tip: '6관 운하시티는 수중으로 가로막혀 있다. 파도타기 없이는 절대 진입 불가',
  },
  {
    gym: '7관 선단시티 — 무청 (얼음)',
    steps: [
      { label: '광산배지(6관) 취득', detail: 'HM04 괴력 필드 사용 조건' },
      { label: '북쪽 경로 통과', detail: '210번도로 → 천관산 북쪽 입구 → 216번도로 → 217번도로 → 선단시티. 천관산 내 HM06 바위깨기 필요 구간 있음' },
      { label: '217번도로 설원 구간', detail: '눈이 많이 쌓인 구간. 아이스 코트에서 이동이 어렵지만 HM 없이 통과 가능' },
    ],
    tip: '선단시티 자체까지는 HM08 바위오르기가 없어도 도달 가능. 바위오르기는 7관 배지 후 사용',
  },
  {
    gym: '8관 물가시티 — 전진 (전기)',
    steps: [
      { label: '고드름배지(7관) 취득', detail: 'HM08 바위오르기 필드 사용 조건' },
      { label: '갤럭시단 최종 이벤트 완료', detail: '천관산 → 스피어필라 → 분열세계(기라티나 이벤트). 이 이벤트를 완료해야 물가시티에 입장 가능' },
      { label: 'HM08 바위오르기 + 210번도로 절벽', detail: '210번도로 동쪽 절벽을 바위오르기로 내려가면 물가시티 방향 진입 경로 확보' },
      { label: '전진 이벤트', detail: '물가시티 체육관에 전진이 없다. 등대에 있는 전진을 찾아가 대화 → 체육관으로 돌아옴 → 8관 도전 가능' },
    ],
    tip: '★분열세계 이벤트를 완료하지 않으면 물가시티 자체에 진입할 수 없다. 7관 후 바로 가려 해도 막힘',
  },
  {
    gym: '사천왕 도전 (승리로드)',
    steps: [
      { label: '등대배지(8관) 취득', detail: 'HM07 폭포오르기 필드 사용 조건' },
      { label: 'HM07 폭포오르기 입수', detail: '물가시티 NPC에게서 수령' },
      { label: '승리로드 통과', detail: '풀베기(HM01)·바위깨기(HM06)·괴력(HM04)·바위오르기(HM08) 등 다수 필요. 폭포오르기(HM07)로 내부 폭포 등반 필수' },
    ],
    tip: '승리로드는 신오지방에서 HM이 가장 많이 필요한 구간. 파티에 HM 담당 포켓몬 필수',
  },
]

// ─── 갤럭시단 스토리 이벤트 흐름 ─────────────────────────────────────────────

const GALACTIC_EVENTS = [
  { step: 1, location: '축복시티', event: '갤럭시단원 2명 처치 + 뉴스 취재 이벤트. 이후 갤럭시단 전면 등장' },
  { step: 2, location: '꽃향기마을 바람발전소', event: '갤럭시단이 발전소 점거. 열쇠 수거 후 발전소 진입 → 간부 마르스 격파 → 발전소 해방' },
  { step: 3, location: '영원시티 갤럭시단 본부', event: '건물에 잡혀 있는 NPC 구출. 완료 후 HM01 풀베기 입수' },
  { step: 4, location: '장막시티 갤럭시단 창고', event: '갤럭시 창고 탐색 → HM02 공중날기 획득 (그런트 드롭). 이후 갤럭시단 추격 이벤트' },
  { step: 5, location: '들판시티 대습초원', event: '갤럭시단이 포켓몬 포획 시도. 간부 새턴 격파 → HM06 바위깨기 입수' },
  { step: 6, location: '봉신마을 유적', event: '갤럭시단이 유적 조사 중. 격파 후 박사 할머니에게서 HM03 파도타기 수령' },
  { step: 7, location: '운하시티 강철섬', event: 'Buck와 함께 강철섬 탐색 → 갤럭시단 격파 → Buck가 강철섬 탈출. 루카리오 달걀 이벤트' },
  { step: 8, location: '장막시티 갤럭시 본부 (재방문)', event: '갤럭시 열쇠 입수 → 본부 내부 탐색 → 간부 격파 → 포켓몬 해방' },
  { step: 9, location: '천관산 → 스피어필라', event: '기아루가·알기아를 소환하는 수장 키쿠이 저지. 기라티나가 개입 → 분열세계로 이동' },
  { step: 10, location: '분열세계 (기라티나 영역)', event: '분열세계를 탐색해 기라티나와 조우. 포획 or 격파 후 현실로 귀환. 물가시티 진입 개방' },
]

// ─── 주요 지역 진입 조건 ──────────────────────────────────────────────────────

const AREA_REQS = [
  {
    area: '영원숲',
    requirement: 'HM01 풀베기 + 1관 탄광배지',
    detail: '204번도로에서 영원숲 진입 시 나무가 막고 있다. 풀베기로 제거 후 진입',
  },
  {
    area: '206번도로 자전거 도로',
    requirement: '자전거 (영원시티 자전거 가게)',
    detail: '도로 전체가 자전거 전용 구간. 자전거 없이는 한 발자국도 진입 불가',
  },
  {
    area: '210번도로 북부 안개 구간',
    requirement: 'HM05 안개걷기 + 2관 숲배지',
    detail: '신수마을 ~ 봉신마을 사이 안개 구간. 안개걷기를 쓰지 않으면 시야가 좁아 이동이 불가에 가깝다',
  },
  {
    area: '212번도로 남부 진흙길',
    requirement: '없음 (HM 불필요)',
    detail: '연고시티 → 들판시티 연결 구간. 비가 내리며 진흙탕이 깔린다. 이동 속도가 느려지는 것 외에 특별한 진입 조건 없음',
  },
  {
    area: '운하시티',
    requirement: 'HM03 파도타기 + 5관 유산배지',
    detail: '218번도로 전체가 수중. 파도타기 없이는 축복시티 서쪽으로 나갈 수 없어 운하시티 진입 불가',
  },
  {
    area: '천관산 상층부',
    requirement: 'HM06 바위깨기 + 4관 파수배지, HM04 괴력 + 6관 광산배지',
    detail: '천관산 중층~상층으로 올라갈수록 여러 HM이 필요. 스피어필라 도달을 위해 두 HM 모두 필수',
  },
  {
    area: '분열세계',
    requirement: '갤럭시단 스토리 이벤트 자동 진행 (HM 불필요)',
    detail: '스피어필라에서 키쿠이 격파 후 기라티나가 자동으로 이끈다. 플레이어가 자유 의지로 진입·탈출할 수 없음',
  },
  {
    area: '물가시티',
    requirement: '갤럭시단 최종 이벤트(분열세계) 완료 + HM08 바위오르기 + 7관 고드름배지',
    detail: '분열세계 이벤트 완료 전까지 물가시티로 들어가는 길 자체가 막힌다. 완료 후 210번도로 동쪽 절벽을 바위오르기로 내려가 진입',
  },
  {
    area: '승리로드',
    requirement: 'HM01·06·04·08·07 다수 필요',
    detail: '풀베기·바위깨기·괴력·바위오르기·폭포오르기를 전부 사용하는 구간이 있다. 파티에 HM 담당 포켓몬 배치 필수',
  },
]

export function PokemonPlatinumProgressGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="text-2xl font-black text-ink">플래티넘 진행 조건 가이드</h1>
      <p className="mb-1 text-sm text-ink-faint">다우징덱스 편집부 · 4세대 포켓몬스터 플래티넘(기라티나 버전)</p>
      <p className="mb-6 text-sm text-ink-muted">
        체육관을 깨려면 무엇을 먼저 해야 하는지, 어느 지역에 HM이 필요한지, 갤럭시단 이벤트 순서는 어떻게 되는지 — 막히는 포인트를 한 곳에 정리했다.
      </p>

      {/* HM 일람 */}
      <Card className="mb-6 p-4">
        <SectionHeading>HM 일람 — 어디서 얻고 어떤 배지가 필요한가</SectionHeading>
        <p className="mb-3 text-xs text-ink-muted">필드에서 HM 기술을 사용하려면 해당 배지가 있어야 한다. 기술 자체를 가르치는 것만으로는 부족하다.</p>
        <div className="overflow-x-auto">
          <GuideTable
            headers={['HM', '기술', '입수처', '배지 조건', '열리는 경로']}
            rows={HM_TABLE.map((r) => [
              <span key={r.id} className="font-bold text-brand-red">{r.id}</span>,
              r.move,
              r.obtain,
              r.badge,
              r.unlocks,
            ])}
          />
        </div>
      </Card>

      {/* 체육관별 사전 조건 */}
      <Card className="mb-6 p-4">
        <SectionHeading>체육관별 — 도전 전에 해야 할 일</SectionHeading>
        <p className="mb-4 text-xs text-ink-muted">★ 플래티넘은 다이아몬드·펄과 체육관 순서가 다르다. 특히 3관(격투·자두)과 5관(고스트·멜리사)의 순서 변경에 주의.</p>
        <div className="space-y-4">
          {GYM_PREREQS.map((g) => (
            <div key={g.gym} className="rounded-card border border-border p-3">
              <p className="mb-2 text-sm font-black text-ink">{g.gym}</p>
              <ul className="mb-2 space-y-1.5">
                {g.steps.map((s) => (
                  <li key={s.label} className="flex gap-2 text-xs text-ink">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-red" />
                    <span>
                      <span className="font-bold">{s.label}</span>
                      {' — '}
                      <span className="text-ink-muted">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              {g.tip && (
                <p className="rounded-chip bg-brand-red/5 px-3 py-1.5 text-xs font-bold text-brand-red">
                  {g.tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 갤럭시단 이벤트 흐름 */}
      <Card className="mb-6 p-4">
        <SectionHeading>갤럭시단 스토리 이벤트 흐름</SectionHeading>
        <p className="mb-3 text-xs text-ink-muted">갤럭시단 이벤트는 단순히 "스토리"가 아니라 HM 입수와 지역 개방에 직결된다. 건너뛰면 진행이 막힌다.</p>
        <div className="overflow-x-auto">
          <GuideTable
            headers={['순서', '장소', '이벤트 내용']}
            rows={GALACTIC_EVENTS.map((e) => [
              <span key={e.step} className="font-bold text-brand-red">{e.step}</span>,
              e.location,
              e.event,
            ])}
          />
        </div>
      </Card>

      {/* 주요 지역 진입 조건 */}
      <Card className="mb-6 p-4">
        <SectionHeading>주요 지역 진입 조건</SectionHeading>
        <div className="space-y-3">
          {AREA_REQS.map((a) => (
            <div key={a.area} className="rounded-card border border-border p-3">
              <div className="mb-1 flex flex-wrap items-start gap-2">
                <span className="text-sm font-black text-ink">{a.area}</span>
                <span className="rounded-chip bg-surface-hover px-2 py-0.5 text-xxs font-bold text-ink-muted">
                  {a.requirement}
                </span>
              </div>
              <p className="text-xs text-ink-muted">{a.detail}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 헷갈리는 포인트 */}
      <Card className="mb-6 p-4">
        <SectionHeading>헷갈리는 포인트 Q&A</SectionHeading>
        <div className="space-y-4">
          <div>
            <SubHeading>Q. 영원시티에 왔는데 체육관이 잠겨 있다</SubHeading>
            <p className="text-sm text-ink-muted">갤럭시단 본부 이벤트를 먼저 해결해야 한다. 시내 북쪽의 갤럭시단 건물에 진입해 내부를 클리어하면 2관이 개방된다. HM01 풀베기도 이 이벤트 완료 후 받는다.</p>
          </div>
          <div>
            <SubHeading>Q. 연고시티에 왔는데 멜리사 체육관이 잠겨 있다</SubHeading>
            <p className="text-sm text-ink-muted">플래티넘에서 멜리사는 5관이다. 처음 연고시티에 도착했을 때는 멜리사가 자리를 비운 상태. 장막(3관) → 들판(4관)을 먼저 깨고 돌아오면 멜리사가 복귀해 있다.</p>
          </div>
          <div>
            <SubHeading>Q. 물가시티로 가는 길이 막혀 있다</SubHeading>
            <p className="text-sm text-ink-muted">천관산 → 스피어필라 → 분열세계(기라티나 이벤트)를 완료해야 물가시티 진입 경로가 열린다. 7관을 깬 직후에도 이 이벤트를 완료하기 전에는 갈 수 없다. 210번도로 동쪽 절벽을 HM08 바위오르기로 내려가는 경로가 열린다.</p>
          </div>
          <div>
            <SubHeading>Q. 운하시티(6관)로 가려면 어떻게 하나</SubHeading>
            <p className="text-sm text-ink-muted">축복시티 서쪽의 218번도로가 수중 구간이라 파도타기가 필수다. 파도타기는 봉신마을 갤럭시단 이벤트를 해결한 후 박사 할머니에게서 받는다. 5관 유산배지가 있어야 필드에서 사용 가능.</p>
          </div>
          <div>
            <SubHeading>Q. 봉신마을(파도타기 입수)까지 어떻게 가나</SubHeading>
            <p className="text-sm text-ink-muted">연고시티 → 동쪽 209번도로 → 신수마을 → 210번도로 북쪽 → 봉신마을. 210번도로 북부는 안개 구간이므로 HM05 안개걷기 + 2관 숲배지가 있어야 편하게 통과할 수 있다.</p>
          </div>
          <div>
            <SubHeading>Q. 전진이 체육관에 없다</SubHeading>
            <p className="text-sm text-ink-muted">물가시티 등대에 있다. 등대에 올라가 전진과 대화하면 체육관으로 돌아온다. 그 후 8관 도전 가능.</p>
          </div>
          <div>
            <SubHeading>Q. 212번도로 진흙탕을 어떻게 통과하나</SubHeading>
            <p className="text-sm text-ink-muted">특별한 아이템이나 HM이 필요하지 않다. 비가 내리며 발이 느려지는 구간으로, 그냥 천천히 걸어 통과하면 된다. 연고시티에서 들판시티로 이어지는 일반 경로다.</p>
          </div>
          <div>
            <SubHeading>Q. 강석이 체육관에 없다</SubHeading>
            <p className="text-sm text-ink-muted">1관 무쇠시티의 체육관 관장 강석은 처음에 구릉터 탄광 안에 있다. 무쇠시티 동쪽 탄광을 찾아가 강석을 만나고 탄광을 탐색한 후 돌아오면 1관 체육관이 개방된다.</p>
          </div>
        </div>
      </Card>
    </GuidePageLayout>
  )
}
