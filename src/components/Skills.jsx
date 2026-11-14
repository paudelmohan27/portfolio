import { skillGroups } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { Chip, SectionLabel, SectionTitle } from './ui.jsx'

export default function Skills() {
  return (
    <section className="px-5 pt-24 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <SectionLabel>Toolbox</SectionLabel>
        <SectionTitle>What I work with</SectionTitle>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="rounded-3xl bg-card p-7">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="mt-1 text-[15px] text-muted">{g.sub}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
