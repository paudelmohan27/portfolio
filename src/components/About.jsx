import { about } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { SectionLabel } from './ui.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 pt-24 sm:px-6 sm:pt-32">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="lg:w-[220px] lg:shrink-0">
          <h2>
            <SectionLabel>About me</SectionLabel>
          </h2>
        </div>
        <div className="min-w-0 flex-1">
          <Reveal as="p" className="text-3xl leading-[1.15] font-medium tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            {about.statement} <span className="text-faint">{about.statementMuted}</span>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {about.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className={`rounded-3xl p-7 ${s.accent ? 'bg-accent text-white' : 'bg-card'}`}
              >
                <div className="text-[52px] leading-none font-semibold tracking-[-0.04em]">{s.value}</div>
                <div className={`mt-3 text-base ${s.accent ? 'text-white/85' : 'text-muted'}`}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
