import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { PokemonCard } from '../components/pokemon/PokemonCard'
import { SpriteImage } from '../components/pokemon/SpriteImage'
import { GuideTable } from '../components/guide/GuideTable'
import { PokemonLink } from '../components/guide/PokemonLink'
import { linkifyPokemonNames } from '../lib/linkifyPokemonNames'
import { SAMPLE_POKEMON, findSamplePokemon } from '../data/sample/pokemon.sample'
import { CATEGORY_STYLE } from '../lib/guideCategory'
import {
  FIRERED_STORY_CAUTIONS,
  FIRERED_STORY_CATCH_TABLE,
  FIRERED_STORY_CHAMPION_NOTES,
  FIRERED_STORY_CHAMPION_ROWS,
  FIRERED_STORY_ELITE4,
  FIRERED_STORY_FINAL_PARTY_IDS,
  FIRERED_STORY_FINAL_ROLES,
  FIRERED_STORY_GOALS,
  FIRERED_STORY_GYMS,
  FIRERED_STORY_HM_TABLE,
  FIRERED_STORY_MOVESETS,
  FIRERED_STORY_NAME_TO_ID,
  FIRERED_STORY_STAGES,
  FIRERED_STORY_STONE_EVO_TABLE,
  FIRERED_STORY_SUMMARY_TABLE,
  FIRERED_STORY_SUPPORT,
  FIRERED_STORY_TEMP_POKEMON,
  FIRERED_STORY_TM_NOTES,
  FIRERED_STORY_TM_OPTIONAL,
  FIRERED_STORY_TM_PRIORITY,
} from '../data/sample/pokemonFireredStory.data'

function L(text: string) {
  return linkifyPokemonNames(text, FIRERED_STORY_NAME_TO_ID)
}

function SectionHeading({ children }: { children: string }) {
  return <h2 className="mb-3 text-lg font-black text-ink">{children}</h2>
}

export function PokemonFireredStoryGuidePage() {
  const style = CATEGORY_STYLE['공략']
  const finalParty = FIRERED_STORY_FINAL_PARTY_IDS.map((id) => SAMPLE_POKEMON.find((p) => p.id === id)).filter(Boolean)

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <div className="mb-2 flex items-center gap-2">
        <Link to="/guides" className="text-sm font-bold text-ink-muted hover:text-ink">
          ← 공략 목록
        </Link>
        <span className={`rounded-chip bg-white px-2 py-0.5 text-xs font-bold ${style.pillClass}`}>공략</span>
      </div>

      <h1 className="text-2xl font-black text-ink">포켓몬 파이어레드 스토리 엔트리 공략</h1>
      <p className="mb-4 text-sm text-ink-faint">다우징덱스 편집부 · 3세대(파이어레드) 공략 / 파이리 스타팅</p>

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
          <li>대상 게임: 포켓몬스터 파이어레드 (FireRed)</li>
          <li>세대 기준: 3세대 (파이어레드/리프그린)</li>
          <li>스타팅 포켓몬: 파이리</li>
          <li>제외 기준: 포켓몬스터 레드버전(1세대), 파이어레드 섬 퀘스트(전국도감 이후), 버그·글리치 활용</li>
        </ul>
        <p className="mt-3 text-sm font-bold text-ink-faint">목적</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {FIRERED_STORY_GOALS.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Card>

      {/* 2. 최종 추천 엔트리 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 추천 엔트리</SectionHeading>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {finalParty.map((p) => p && <PokemonCard key={p.id} pokemon={p} onClick={() => {}} />)}
        </div>
        <GuideTable
          headers={['포켓몬', '주요 역할']}
          rows={FIRERED_STORY_FINAL_ROLES.map((r) => [L(r.pokemon), r.role])}
        />
      </Card>

      {/* 3. 초중반 보조 포켓몬 */}
      <Card className="mb-6 p-4">
        <SectionHeading>초중반 보조 포켓몬</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">최종 엔트리 합류 전까지 임시로 운용하는 포켓몬이다.</p>
        <GuideTable
          headers={['포켓몬', '역할', '교체 시점']}
          rows={FIRERED_STORY_TEMP_POKEMON.map((r) => [L(r.pokemon), r.role, r.switchTiming])}
        />
      </Card>

      {/* 4. 포획 및 합류 시점 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포획 및 합류 시점</SectionHeading>
        <GuideTable
          headers={['시점', '포켓몬', '확보 방법 및 목적']}
          rows={FIRERED_STORY_CATCH_TABLE.map((r) => [
            r.timing,
            <PokemonLink key={r.pokemonId} id={r.pokemonId} label={r.pokemon} />,
            r.note,
          ])}
        />
      </Card>

      {/* 5. 돌 진화 타이밍 */}
      <Card className="mb-6 p-4">
        <SectionHeading>돌 진화 타이밍</SectionHeading>
        <GuideTable
          headers={['포켓몬', '진화 도구', '권장 진화 타이밍', '이유']}
          rows={FIRERED_STORY_STONE_EVO_TABLE.map((r) => [L(r.pokemon), r.item, r.timing, r.reason])}
        />
      </Card>

      {/* 6. 포켓몬별 기술 배치 */}
      <Card className="mb-6 p-4">
        <SectionHeading>포켓몬별 기술 배치</SectionHeading>
        <div className="flex flex-col gap-6">
          {FIRERED_STORY_MOVESETS.map((m) => {
            const pokemon = findSamplePokemon(m.pokemonId)
            return (
              <div key={m.pokemonId} className="rounded-card border border-border-strong p-3">
                <Link to={`/pokemon/${m.pokemonId}`} className="mb-2 flex items-center gap-2">
                  <SpriteImage src={pokemon.spriteUrl} alt={pokemon.nameKo} width={48} height={48} className="h-12 w-12" />
                  <span className="text-base font-black text-ink hover:underline">{pokemon.nameKo}</span>
                </Link>

                <p className="mb-1 text-xs font-bold text-ink-faint">최종 기술 배치</p>
                <ul className="mb-3 list-disc space-y-0.5 pl-5 text-sm text-ink">
                  {m.finalMoves.map((move) => (
                    <li key={move}>{move}</li>
                  ))}
                </ul>

                <GuideTable headers={['기술', '용도']} rows={m.moveTable.map((t) => [t.move, t.usage])} />

                <p className="mt-3 mb-1 text-xs font-bold text-ink-faint">메모</p>
                <ul className="list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
                  {m.notes.map((n, i) => (
                    <li key={i}>{L(n)}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Card>

      {/* 7. 비전머신 배분 */}
      <Card className="mb-6 p-4">
        <SectionHeading>비전머신 배분 및 입수 위치</SectionHeading>
        <GuideTable
          headers={['HM', '기술', '추천 담당', '입수 위치', '필드 사용 조건', '비고']}
          rows={FIRERED_STORY_HM_TABLE.map((r) => [r.hm, r.move, L(r.pokemon), r.location, r.badge, r.note])}
        />
        <p className="mt-3 text-sm text-ink-muted">
          파이어레드는 HM이 7개다. 3세대에서는 기술 지우기 타운이 있어 HM을 나중에 지울 수 있지만, 스토리 중에는 전용 HM 담당 포켓몬을 지정해 두는 편이 편하다.
        </p>
      </Card>

      {/* 8. 기술머신 배분 */}
      <Card className="mb-6 p-4">
        <SectionHeading>기술머신 배분 및 입수 위치</SectionHeading>
        <p className="mb-2 text-sm font-bold text-ink-faint">최우선 기술머신</p>
        <GuideTable
          headers={['TM', '기술', '추천 대상', '입수 위치', '우선순위', '설명']}
          rows={FIRERED_STORY_TM_PRIORITY.map((r) => [r.tm, r.move, L(r.target), r.location, r.priority, r.desc])}
        />
        <p className="mt-4 mb-2 text-sm font-bold text-ink-faint">선택 기술머신</p>
        <GuideTable
          headers={['TM', '기술', '추천 대상', '입수 위치', '우선순위', '설명']}
          rows={FIRERED_STORY_TM_OPTIONAL.map((r) => [r.tm, r.move, L(r.target), r.location, r.priority, r.desc])}
        />
        <p className="mt-4 mb-1 text-sm font-bold text-ink-faint">기술머신 사용 메모</p>
        <ul className="list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
          {FIRERED_STORY_TM_NOTES.map((n, i) => (
            <li key={i}>{L(n)}</li>
          ))}
        </ul>
      </Card>

      {/* 9. 진행 단계별 파티 구성 */}
      <Card className="mb-6 p-4">
        <SectionHeading>진행 단계별 파티 구성</SectionHeading>
        <div className="flex flex-col gap-4">
          {FIRERED_STORY_STAGES.map((stage) => (
            <div key={stage.title} className="rounded-card border border-border-strong p-3">
              <p className="mb-2 text-sm font-black text-ink">{stage.title}</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {stage.members.map((m, i) => (
                  <span key={i} className="rounded-chip bg-surface-hover px-2.5 py-1 text-xs font-bold text-ink">
                    {L(m)}
                  </span>
                ))}
              </div>
              <ul className="list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
                {stage.goals.map((g, i) => (
                  <li key={i}>{L(g)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* 10. 체육관 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>체육관 대응</SectionHeading>
        <div className="flex flex-col gap-4">
          {FIRERED_STORY_GYMS.map((gym) => (
            <div key={gym.title}>
              <p className="mb-2 text-sm font-black text-ink">{gym.title}</p>
              <GuideTable
                headers={['상대 포켓몬', '추천 대응']}
                rows={gym.rows.map((r) => [L(r.opponent), L(r.answer)])}
              />
              {gym.notes && gym.notes.length > 0 && (
                <ul className="mt-2 list-disc space-y-0.5 pl-5 text-xs text-ink-muted">
                  {gym.notes.map((n, i) => (
                    <li key={i}>{L(n)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 11. 사천왕 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>사천왕 대응</SectionHeading>
        <div className="flex flex-col gap-4">
          {FIRERED_STORY_ELITE4.map((boss) => (
            <div key={boss.title}>
              <p className="mb-2 text-sm font-black text-ink">{boss.title}</p>
              <GuideTable
                headers={['상대 포켓몬', '추천 대응']}
                rows={boss.rows.map((r) => [L(r.opponent), L(r.answer)])}
              />
              {boss.notes && boss.notes.length > 0 && (
                <ul className="mt-2 list-disc space-y-0.5 pl-5 text-xs text-ink-muted">
                  {boss.notes.map((n, i) => (
                    <li key={i}>{L(n)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* 12. 챔피언전 대응 */}
      <Card className="mb-6 p-4">
        <SectionHeading>챔피언전 대응</SectionHeading>
        <p className="mb-2 text-sm text-ink-faint">파이리를 스타팅으로 선택하면 라이벌의 최종 스타팅은 거북왕이다.</p>
        <GuideTable
          headers={['챔피언 포켓몬', '추천 대응']}
          rows={FIRERED_STORY_CHAMPION_ROWS.map((r) => [L(r.opponent), L(r.answer)])}
        />
        <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm text-ink-muted">
          {FIRERED_STORY_CHAMPION_NOTES.map((n, i) => (
            <li key={i}>{L(n)}</li>
          ))}
        </ul>
      </Card>

      {/* 13. 최종 요약 */}
      <Card className="mb-6 p-4">
        <SectionHeading>최종 요약</SectionHeading>
        <p className="mb-2 text-sm font-bold text-ink-faint">최종 엔트리</p>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {finalParty.map((p) => p && <PokemonCard key={p.id} pokemon={p} onClick={() => {}} />)}
        </div>
        <p className="mb-2 text-sm font-bold text-ink-faint">핵심 전략</p>
        <GuideTable
          headers={['구간', '핵심 전략']}
          rows={FIRERED_STORY_SUMMARY_TABLE.map((r) => [r.stage, L(r.strategy)])}
        />
      </Card>

      {/* 14. 보조 포켓몬 운용 */}
      <Card className="mb-6 p-4">
        <SectionHeading>보조 포켓몬 운용</SectionHeading>
        <p className="mb-3 text-sm text-ink-muted">필요 시 다음 보조 포켓몬을 별도로 운용한다.</p>
        <GuideTable
          headers={['포켓몬', '용도']}
          rows={FIRERED_STORY_SUPPORT.map((r) => [
            <span key={r.pokemonId} className="flex items-center gap-2">
              <SpriteImage src={findSamplePokemon(r.pokemonId).spriteUrl} alt={r.pokemon} width={28} height={28} className="h-7 w-7" />
              <PokemonLink id={r.pokemonId} label={r.pokemon} />
            </span>,
            r.usage,
          ])}
        />
      </Card>

      {/* 15. 주의사항 */}
      <Card className="p-4">
        <SectionHeading>주의사항</SectionHeading>
        <ul className="list-disc space-y-1 pl-5 text-sm text-ink">
          {FIRERED_STORY_CAUTIONS.map((c, i) => (
            <li key={i}>{L(c)}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
