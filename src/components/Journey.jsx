import { journey } from '../data/content.js'
import Reveal from './Reveal.jsx'
import { SectionLabel, SectionTitle } from './ui.jsx'

export default function Journey() {
  return (
    <section className="px-5 pt-24 sm:px-6 sm:pt-32">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 lg:flex-row lg:gap-16">
        <div className="lg:w-[220px] lg:shrink-0">
          <SectionLabel>Journey</SectionLabel>
          <SectionTitle>So far</SectionTitle>
        </div>
        <Reveal as="ol" className="min-w-0 flex-1 rounded-[28px] bg-card px-6 py-2 sm:px-7">
          {journey.map((j, i) => (
            <li
              key={j.title}
              className={`flex flex-col gap-1 py-5 sm:flex-row sm:gap-8 ${i < journey.length - 1 ? 'border-b border-line' : ''}`}
            >
              <span className="font-mono text-sm text-accent sm:w-[110px] sm:shrink-0 sm:pt-0.5 dark:text-[#8FA2FF]">{j.when}</span>
              <div>
                <div className="text-lg font-semibold sm:text-[19px]">{j.title}</div>
                <div className="mt-1 text-[15px] text-muted">{j.body}</div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
