import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  SEVII_BOSS_ROCKET_ADMINS,
  SEVII_CATCH_TABLE,
  SEVII_ITEM_TABLE,
  SEVII_LORELEI_NOTE,
  SEVII_NAME_TO_ID,
  SEVII_NATIONAL_DEX_NOTE,
  SEVII_ROCKET_WAREHOUSE,
  SEVII_STORY_RAINBOW_STEPS,
  SEVII_STORY_TRIPASS_STEPS,
  SEVII_UNOWN_NOTE,
} from '../data/sample/pokemonFireredSeviiIslands.data'

function L(text: string) {
  return linkifyPokemonNames(text, SEVII_NAME_TO_ID)
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

const ICON_POKEMON_IDS = [219, 201, 124, 147, 218, 220]

export function PokemonFireredSeviiIslandsGuidePage() {
  const style = CATEGORY_STYLE['공략']

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="text-2xl font-black text-ink">파이어레드 클리어 후 일곱섬 스토리 공략</h1>
      <p className="mb-4 text-sm text-ink-faint">다우징덱스 편집부 · 3세대(파이어레드·리프그린) 클리어 후 공략</p>

      <div className={`mb-6 grid grid-cols-3 gap-2 rounded-card px-4 py-4 sm:grid-cols-6 ${style.bannerClass}`}>
        {ICON_POKEMON_IDS.map((id) => {
          const p = findSamplePokemon(id)
          return (
            <div key={id} className="flex items-center justify-center">
              <SpriteImage
                src={p.artworkUrl ?? p.spriteUrl}
                alt={p.nameKo}
                width={96}
                height={96}
                pixelated={false}
                rounded="none"
                className="h-20 w-20 sm:h-24 sm:w-24"
              />
            </div>
          )
        })}
      </div>

      {/* 1. 개요 */}
      <Card className="mb-6 p-4">
        <SectionHeading>개요</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>대상 게임: 포켓몬스터 파이어레드 (3세대)</li>
          <li>진행 조건: 포켓몬리그(사천왕 + 챔피언) 클리어 후</li>
          <li>1~3의 섬은 트라이패스, 4~7의 섬은 레인보우패스가 필요하다.</li>
        </ul>
        <p className="mt-3 text-sm font-bold text-ink-faint">일곱섬 방문 목적</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>셀리오의 의뢰(루비석·사파이어석)를 완수해 <strong>전국도감</strong>을 해제한다.</li>
          <li>팀 로켓의 잔당 세력을 완전히 제거한다.</li>
          <li>HM07 폭포오르기 획득 및 4~7의 섬 전용 포켓몬을 포획한다.</li>
          <li>탄보비 유적을 해방해 미지(알파벳 포켓몬)를 포획한다.</li>
        </ul>
      </Card>

      {/* 2. 트라이패스 단계 */}
      <Card className="mb-6 p-4">
        <SectionHeading>트라이패스 단계 — 1~3의 섬</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          포켓몬리그 클리어 직후 빨강도시에서 배를 타고 1의 섬으로 이동. 셀리오에게서 트라이패스를 받아 1~3의 섬을 자유롭게 오갈 수 있다.
        </p>
        <GuideTable
          headers={['단계', '섬', '해야 할 일', '비고']}
          rows={SEVII_STORY_TRIPASS_STEPS.map((r) => [r.step, r.island, L(r.action), r.note])}
        />
      </Card>

      {/* 3. 화산 팀 로켓 간부전 */}
      <Card className="mb-6 p-4">
        <SectionHeading>화산 팀 로켓 간부전 (1의 섬)</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          화산 입구에서 팀 로켓 간부 2명이 방해한다. 불꽃 계열 포켓몬이 많으므로 라프라스와 물 타입을 앞세운다.
        </p>
        {SEVII_BOSS_ROCKET_ADMINS.filter((b) => b.title.includes('화산')).map((boss) => (
          <div key={boss.title} className="mb-4">
            <GuideTable
              headers={['상대 포켓몬', '추천 대응']}
              rows={boss.rows.map((r) => [L(r.opponent), L(r.answer)])}
            />
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
              {boss.notes.map((n, i) => (
                <li key={i}>{L(n)}</li>
              ))}
            </ul>
          </div>
        ))}
      </Card>

      {/* 4. 레인보우패스 단계 */}
      <Card className="mb-6 p-4">
        <SectionHeading>레인보우패스 단계 — 4~7의 섬</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          루비석을 셀리오에게 전달하면 레인보우패스를 받는다. 이후 4~7의 섬을 방문할 수 있다.
        </p>
        <GuideTable
          headers={['단계', '섬', '해야 할 일', '비고']}
          rows={SEVII_STORY_RAINBOW_STEPS.map((r) => [r.step, r.island, L(r.action), r.note])}
        />
      </Card>

      {/* 5. 칸나(로렐) 이벤트 */}
      <Card className="mb-6 p-4">
        <SectionHeading>사천왕 칸나 이벤트 (4의 섬 얼음 동굴)</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {SEVII_LORELEI_NOTE.map((n, i) => (
            <li key={i}>{L(n)}</li>
          ))}
        </ul>
        <div className="mt-3 rounded-card border border-border-strong p-3 text-sm text-ink-muted">
          <p className="font-bold text-ink-faint">HM07 폭포오르기 입수 후 가능한 일</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            <li>얼음 동굴 위층 탐험 및 포켓몬 포획</li>
            <li>일부 루트에서 폭포 위 구역 접근 가능</li>
          </ul>
        </div>
      </Card>

      {/* 6. 로켓단 창고 공략 */}
      <Card className="mb-6 p-4">
        <SectionHeading>로켓단 창고 공략 (5의 섬)</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">
          사파이어석을 되찾기 위해 5의 섬 로켓단 창고를 돌파해야 한다. 비밀번호 2개를 먼저 확보해야 진입이 가능하다.
        </p>
        <GuideTable
          headers={['절차', '내용']}
          rows={SEVII_ROCKET_WAREHOUSE.map((r) => [r.task, r.detail])}
        />
        <p className="mt-4 mb-2 text-sm font-bold text-ink-faint">창고 간부전</p>
        {SEVII_BOSS_ROCKET_ADMINS.filter((b) => b.title.includes('창고')).map((boss) => (
          <div key={boss.title}>
            <GuideTable
              headers={['상대 포켓몬', '추천 대응']}
              rows={boss.rows.map((r) => [L(r.opponent), L(r.answer)])}
            />
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
              {boss.notes.map((n, i) => (
                <li key={i}>{L(n)}</li>
              ))}
            </ul>
          </div>
        ))}
      </Card>

      {/* 7. 전국도감 해제 */}
      <Card className="mb-6 p-4">
        <SectionHeading>전국도감 해제</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {SEVII_NATIONAL_DEX_NOTE.map((n, i) => (
            <li key={i}>{L(n)}</li>
          ))}
        </ul>
      </Card>

      {/* 8. 탄보비 유적 */}
      <Card className="mb-6 p-4">
        <SectionHeading>탄보비 유적 — 미지 포획 (7의 섬)</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {SEVII_UNOWN_NOTE.map((n, i) => (
            <li key={i}>{L(n)}</li>
          ))}
        </ul>
      </Card>

      {/* 9. 섬별 포획 추천 포켓몬 */}
      <Card className="mb-6 p-4">
        <SectionHeading>섬별 포획 추천 포켓몬</SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 text-left text-xs font-bold text-ink-faint">섬</th>
                <th className="pb-2 text-left text-xs font-bold text-ink-faint">장소</th>
                <th className="pb-2 text-left text-xs font-bold text-ink-faint">포켓몬</th>
                <th className="pb-2 text-left text-xs font-bold text-ink-faint">비고</th>
              </tr>
            </thead>
            <tbody>
              {SEVII_CATCH_TABLE.map((r, i) => {
                const p = findSamplePokemon(r.pokemonId)
                return (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-2 pr-3 font-bold text-ink-faint whitespace-nowrap">{r.island}</td>
                    <td className="py-2 pr-3 text-ink-muted whitespace-nowrap">{r.location}</td>
                    <td className="py-2 pr-3 whitespace-nowrap">
                      <span className="flex items-center gap-1.5">
                        <SpriteImage
                          src={p.spriteUrl}
                          alt={p.nameKo}
                          width={28}
                          height={28}
                          className="h-7 w-7 shrink-0"
                        />
                        <PokemonLink id={r.pokemonId} label={r.pokemon} />
                      </span>
                    </td>
                    <td className="py-2 text-ink-muted">{r.note}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* 10. 섬별 주요 아이템 */}
      <Card className="p-4">
        <SectionHeading>섬별 주요 아이템</SectionHeading>
        <GuideTable
          headers={['섬', '장소', '아이템', '비고']}
          rows={SEVII_ITEM_TABLE.map((r) => [r.island, r.location, r.item, r.note])}
        />
      </Card>
    </GuidePageLayout>
  )
}
