import { profile, projects } from '../data/content.js'
import { ArrowUpRight } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { PillArrowLink, SectionLabel, SectionTitle } from './ui.jsx'

// Background behind each screenshot.
const tints = {
  blue: 'from-tint to-tint-2',
  violet: 'from-[#DCD8FF] to-[#EEF0FB] dark:from-[#2A2370] dark:to-[#141826]',
  green: 'from-[#D9F0E6] to-[#F1F6F4] dark:from-[#123D2C] dark:to-[#141826]',
  orange: 'from-[#FFE6D2] to-[#FBF3EE] dark:from-[#4A2A12] dark:to-[#141826]',
}

function ProjectCard({ project: p, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal
      as="article"
      className="grid gap-3 rounded-[32px] bg-card p-3 sm:gap-4 sm:p-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8"
    >
      {/* Text */}
      <div className="order-2 flex min-w-0 flex-col px-3 pt-2 pb-4 sm:px-4 lg:order-1 lg:py-5 lg:pl-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {p.featured && <span className="rounded-full bg-accent px-3 py-1.5 text-[13px] text-white">Featured</span>}
            <span className="rounded-full bg-soft px-3 py-1.5 text-[13px]">
              {p.kind} · {p.year}
            </span>
          </div>
          <span aria-hidden="true" className="text-5xl leading-none font-semibold tracking-[-0.04em] text-faint/60 tabular-nums sm:text-6xl">
            {number}
          </span>
        </div>

        <h3 className="mt-5 text-[30px] leading-tight font-semibold tracking-[-0.03em] sm:text-4xl">{p.title}</h3>
        <p className="mt-3 text-[16px] leading-relaxed text-muted sm:text-[17px]">{p.description}</p>

        {p.points?.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2.5 text-[15px]">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5">
                <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
                {pt}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-7">
          {p.live ? (
            <>
              <PillArrowLink href={p.live} target="_blank" rel="noreferrer">
                Live site
              </PillArrowLink>
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] items-center rounded-full border border-line px-6 text-base font-medium hover:border-ink/40"
              >
                Code
              </a>
            </>
          ) : (
            <PillArrowLink href={p.code} target="_blank" rel="noreferrer">
              View code
            </PillArrowLink>
          )}
        </div>
      </div>

      {/* Screenshot */}
      <div
        className={`order-1 flex items-center overflow-hidden rounded-[24px] bg-gradient-to-br px-4 py-6 sm:px-8 sm:py-10 lg:order-2 lg:px-10 ${tints[p.tint] ?? tints.blue}`}
      >
        <div className="aspect-[15/8] w-full overflow-hidden rounded-xl bg-card shadow-[0_24px_60px_rgba(14,17,22,0.16)] ring-1 ring-black/5 sm:rounded-2xl dark:ring-white/10">
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-5 pt-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <SectionTitle>Things I’ve built</SectionTitle>
          </div>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-line px-[18px] text-[15px] font-medium hover:border-ink/40"
          >
            All repos on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
