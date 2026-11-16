import { about } from '../data/content.js'
import { GraduationCap, Trophy } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { SectionLabel, SectionTitle } from './ui.jsx'

const tile = 'rounded-3xl bg-card p-5 sm:p-7'

function StatTile({ value, label, accent, delay }) {
  return (
    <Reveal
      delay={delay}
      className={`flex flex-col justify-between gap-6 rounded-3xl p-5 sm:p-7 ${accent ? 'bg-accent text-white' : 'bg-card'}`}
    >
      <div className="text-[40px] leading-none font-semibold tracking-[-0.04em] sm:text-[52px]">{value}</div>
      <div className={`text-sm leading-snug sm:text-base ${accent ? 'text-white/85' : 'text-muted'}`}>{label}</div>
    </Reveal>
  )
}

export default function About() {
  const { statement, statementMuted, stats, availability, education, achievements } = about

  return (
    <section id="about" className="scroll-mt-24 px-5 pt-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <SectionLabel>About me</SectionLabel>
        <SectionTitle>The short version</SectionTitle>

        {/* Bento grid: statement (2×2) beside four small tiles, then education and achievements. */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <Reveal className={`${tile} col-span-2 flex flex-col justify-between gap-10 sm:p-9 lg:row-span-2`}>
            <p className="text-[26px] leading-[1.18] font-medium tracking-[-0.03em] sm:text-[34px] sm:leading-[1.15]">
              {statement} <span className="text-faint">{statementMuted}</span>
            </p>
            <p className="font-mono text-xs text-muted">React · Node · C++ · Python</p>
          </Reveal>

          {stats.map((s, i) => (
            <StatTile key={s.label} {...s} delay={(i + 1) * 80} />
          ))}

          <Reveal delay={320} className={`${tile} flex flex-col justify-between gap-6`}>
            <span className="relative flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#1F9D55] opacity-50 motion-reduce:hidden dark:bg-[#3DDC84]" />
              <span className="relative inline-flex size-3 rounded-full bg-[#1F9D55] dark:bg-[#3DDC84]" />
            </span>
            <div>
              <div className="text-lg leading-snug font-semibold sm:text-xl">{availability.title}</div>
              <div className="mt-1 text-sm text-muted sm:text-base">{availability.sub}</div>
            </div>
          </Reveal>

          <Reveal className={`${tile} col-span-2 flex gap-4`}>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-soft text-accent dark:text-[#8FA2FF]">
              <GraduationCap />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-medium tracking-[0.08em] text-muted uppercase">Education</div>
              <div className="mt-2 text-lg font-semibold sm:text-xl">{education.degree}</div>
              <div className="mt-1 text-[15px] leading-snug text-muted">{education.school}</div>
              <div className="mt-2 font-mono text-xs text-muted">{education.when}</div>
            </div>
          </Reveal>

          <Reveal delay={80} className={`${tile} col-span-2 flex gap-4`}>
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4D6] text-[#8A5A00] dark:bg-[#FFC850]/15 dark:text-[#FFC850]">
              <Trophy />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-medium tracking-[0.08em] text-muted uppercase">Achievements</div>
              <ul className="mt-2 flex flex-col gap-3">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <div className="text-lg leading-snug font-semibold sm:text-xl">{a.title}</div>
                    <div className="mt-0.5 text-[15px] text-muted">{a.where}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
