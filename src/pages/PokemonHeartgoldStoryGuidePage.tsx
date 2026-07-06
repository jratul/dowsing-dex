import { Link } from 'react-router-dom'
import { GuidePageLayout } from '../components/guide/GuidePageLayout'
import { Card } from '../components/ui/Card'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { SAMPLE_POKEMON, findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  HG_STORY_CAUTIONS,
  HG_STORY_CATCH_TABLE,
  HG_STORY_CHAMPION,
  HG_STORY_ELITE4,
  HG_STORY_EVOLUTION_TIMING,
  HG_STORY_FINAL_PARTY_IDS,
  HG_STORY_FINAL_ROLES,
  HG_STORY_GOALS,
  HG_STORY_HM_TABLE,
  HG_STORY_JOHTO_GYMS,
  HG_STORY_KANTO_GYMS,
  HG_STORY_MOVESETS,
  HG_STORY_NAME_TO_ID,
  HG_STORY_RED,
  HG_STORY_STAGES,
  HG_STORY_SUMMARY_TABLE,
  HG_STORY_SUPPORT,
  HG_STORY_TM_NOTES,
  HG_STORY_TM_OPTIONAL,
  HG_STORY_TM_PRIORITY,
} from '../data/sample/pokemonHeartgoldStory.data'

function L(text: string) {
  return linkifyPokemonNames(text, HG_STORY_NAME_TO_ID)
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

export function PokemonHeartgoldStoryGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const finalParty = HG_STORY_FINAL_PARTY_IDS.map((id) => SAMPLE_POKEMON.find((p) => p.id === id)).filter(Boolean)

  return (
    <GuidePageLayout>
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="text-2xl font-black text-ink">포켓몬 하트골드버전 스토리 엔트리 공략</h1>
      <p className="mb-4 text-sm text-ink-faint">다우징덱스 편집부 · 4세대(하트골드·소울실버) 공략 / 브케인 스타팅</p>

      <div className={`mb-6 grid grid-cols-3 gap-2 rounded-card px-4 py-4 sm:grid-cols-6 ${style.bannerClass}`}>
        {finalParty.map(
          (p) =>
            p && (
              <div key={p.id} className="flex items-center justify-center">
                <SpriteImage src={p.artworkUrl ?? p.spriteUrl} alt={p.nameKo} width={96} height={96} pixelated={false} rounded="none" className="h-20 w-20 sm:h-24 sm:w-24" />
              </div>
            ),
        )}
      </div>

      {/* 1. 기준 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기준</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          <li>대상 게임: 포켓몬스터 하트골드버전</li>
          <li>세대 기준: 4세대 리메이크(HGSS). 2세대 골드버전과는 물리/특수 분리, 진화 추가 등 차이가 있음</li>
          <li>스타팅 포켓몬: 브케인 → 블레이범</li>
          <li>제외 기준: 통신교환 진화 필수 운영, 버그·글리치 활용</li>
        </ul>
        <p className="mt-3 text-sm font-bold text-ink-faint">목적</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {HG_STORY_GOALS.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Card>

      {/* 2. 최종 추천 엔트리 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 추천 엔트리</SectionHeading>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {finalParty.map((p) => p && <PokemonCard key={p.id} pokemon={p} to={`/pokemon/${p.id}`} />)}
        </div>
        <GuideTable
          headers={['포켓몬', '주요 역할']}
          rows={HG_STORY_FINAL_ROLES.map((r) => [L(r.pokemon), r.role])}
        />
      </Card>

      {/* 3. 포획 시점 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포획 시점</SectionHeading>
        <GuideTable
          headers={['시점', '포켓몬', '설명']}
          rows={HG_STORY_CATCH_TABLE.map((r) => [
            r.timing,
            <PokemonLink key={r.pokemonId} id={r.pokemonId} label={r.pokemon} />,
            r.note,
          ])}
        />
      </Card>

      {/* 4. 기술 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술 배치</SectionHeading>
        <div className="space-y-6">
          {HG_STORY_MOVESETS.map((s) => (
            <div key={s.pokemonId}>
              <div className="mb-2 flex items-center gap-2">
                <SpriteImage src={findSamplePokemon(s.pokemonId).spriteUrl} alt={s.pokemon} width={40} height={40} className="h-10 w-10" />
                <span className="font-black text-ink">{s.pokemon}</span>
                <span className="text-xs text-ink-faint">최종 기술 구성</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {s.finalMoves.map((m) => (
                  <span key={m} className="rounded-chip bg-brand-red/10 px-3 py-1 text-xs font-bold text-brand-red">
                    {m}
                  </span>
                ))}
              </div>
              <GuideTable
                headers={['기술', '용도']}
                rows={s.moveTable.map((m) => [m.move, m.usage])}
              />
              {s.notes.length > 0 && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-ink-muted">
                  {s.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 5. HM 배분 */}
      <Card className="mb-6 p-4">
        <SectionHeading>HM 배분</SectionHeading>
        <GuideTable
          headers={['HM', '기술', '담당', '획득처', '필요배지', '메모']}
          rows={HG_STORY_HM_TABLE.map((r) => [r.hm, r.move, L(r.pokemon), r.location, r.badge, r.note])}
        />
      </Card>

      {/* 6. TM 우선순위 */}
      <Card className="mb-6 p-4">
        <SectionHeading>TM 우선순위</SectionHeading>
        <GuideTable
          headers={['TM', '기술', '배정 대상', '획득처', '우선순위', '설명']}
          rows={HG_STORY_TM_PRIORITY.map((r) => [r.tm, r.move, L(r.target), r.location, r.priority, r.desc])}
        />
        {HG_STORY_TM_OPTIONAL.length > 0 && (
          <>
            <p className="mb-2 mt-4 text-sm font-bold text-ink-faint">선택 TM</p>
            <GuideTable
              headers={['TM', '기술', '배정 대상', '획득처', '우선순위', '설명']}
              rows={HG_STORY_TM_OPTIONAL.map((r) => [r.tm, r.move, L(r.target), r.location, r.priority, r.desc])}
            />
          </>
        )}
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-ink-muted">
          {HG_STORY_TM_NOTES.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </Card>

      {/* 7. 단계별 파티 */}
      <Card className="mb-6 p-4">
        <SectionHeading>단계별 파티</SectionHeading>
        <div className="space-y-4">
          {HG_STORY_STAGES.map((stage) => (
            <div key={stage.title} className="rounded-card border border-border p-3">
              <p className="mb-2 text-sm font-black text-ink">{stage.title}</p>
              <div className="mb-2 flex flex-wrap gap-1">
                {stage.members.map((m) => (
                  <span key={m} className="rounded-chip border border-border-strong px-2 py-0.5 text-xs text-ink">
                    {m}
                  </span>
                ))}
              </div>
              <ul className="list-disc space-y-1 pl-5 text-xs text-ink-muted">
                {stage.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 8. 성도 체육관 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>성도 체육관 대응</SectionHeading>
        <div className="space-y-4">
          {HG_STORY_JOHTO_GYMS.map((boss) => (
            <div key={boss.title} className="rounded-card border border-border p-3">
              <p className="mb-1 text-sm font-black text-ink">{boss.title}</p>
              <p className="mb-2 text-xs text-ink-muted">{boss.note}</p>
              <GuideTable
                headers={['상대 포켓몬', '대응책']}
                rows={boss.rows.map((r) => [r.opponent, L(r.answer)])}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 9. 관동 체육관 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>관동 체육관 대응</SectionHeading>
        <div className="space-y-4">
          {HG_STORY_KANTO_GYMS.map((boss) => (
            <div key={boss.title} className="rounded-card border border-border p-3">
              <p className="mb-1 text-sm font-black text-ink">{boss.title}</p>
              <p className="mb-2 text-xs text-ink-muted">{boss.note}</p>
              <GuideTable
                headers={['상대 포켓몬', '대응책']}
                rows={boss.rows.map((r) => [r.opponent, L(r.answer)])}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 10. 사천왕 */}
      <Card className="mb-6 p-4">
        <SectionHeading>사천왕</SectionHeading>
        <div className="space-y-4">
          {HG_STORY_ELITE4.map((boss) => (
            <div key={boss.title} className="rounded-card border border-border p-3">
              <p className="mb-1 text-sm font-black text-ink">{boss.title}</p>
              <p className="mb-2 text-xs text-ink-muted">{boss.note}</p>
              <GuideTable
                headers={['상대 포켓몬', '대응책']}
                rows={boss.rows.map((r) => [r.opponent, L(r.answer)])}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 11. 챔피언 목호 */}
      <Card className="mb-6 p-4">
        <SectionHeading>챔피언 목호</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">{HG_STORY_CHAMPION.note}</p>
        <GuideTable
          headers={['상대 포켓몬', '대응책']}
          rows={HG_STORY_CHAMPION.rows.map((r) => [r.opponent, L(r.answer)])}
        />
      </Card>

      {/* 12. 레드 (마운트실버) */}
      <Card className="mb-6 p-4">
        <SectionHeading>레드 (마운트실버)</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">{HG_STORY_RED.note}</p>
        <GuideTable
          headers={['상대 포켓몬', '대응책']}
          rows={HG_STORY_RED.rows.map((r) => [r.opponent, L(r.answer)])}
        />
      </Card>

      {/* 13. 요약 */}
      <Card className="mb-6 p-4">
        <SectionHeading>요약</SectionHeading>
        <GuideTable
          headers={['구간', '전략']}
          rows={HG_STORY_SUMMARY_TABLE.map((r) => [r.stage, r.strategy])}
        />
      </Card>

      {/* 14. 보조 포켓몬 */}
      {HG_STORY_SUPPORT.length > 0 && (
        <Card className="mb-6 p-4">
          <SectionHeading>보조 포켓몬</SectionHeading>
          <GuideTable
            headers={['포켓몬', '역할', '획득 시점']}
            rows={HG_STORY_SUPPORT.map((r) => [
              <PokemonLink key={r.pokemonId} id={r.pokemonId} label={r.pokemon} />,
              r.role,
              r.obtainedAt,
            ])}
          />
        </Card>
      )}

      {/* 15. 진화 타이밍 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 진화·친밀도 진화 적정 타이밍</SectionHeading>
        <GuideTable
          headers={['포켓몬', '진화 조건', '적정 타이밍', '비고']}
          rows={HG_STORY_EVOLUTION_TIMING.map((r) => [r.pokemon, r.condition, r.timing, r.note])}
        />
      </Card>

      {/* 16. 주의사항 */}
      <Card className="mb-6 p-4">
        <SectionHeading>주의사항</SectionHeading>
        <ul className="list-disc space-y-2 pl-5 text-sm text-ink">
          {HG_STORY_CAUTIONS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Card>
    </GuidePageLayout>
  )
}
