import { featuredProject as fp, profile, projects } from '../data/content.js'
import { ArrowUpRight } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { SectionLabel, SectionTitle } from './ui.jsx'

const tints = {
  blue: 'from-[#E3E8FF] to-page dark:from-[#1C2A6B]/60',
  green: 'from-[#E6F3EE] to-page dark:from-[#123D2C]/70',
  orange: 'from-[#FFF0E3] to-page dark:from-[#4A2A12]/70',
}

function Shot({ src, alt, label, className = '' }) {
  if (src) return <img src={src} alt={alt} className={`h-full w-full object-cover object-top ${className}`} loading="lazy" />
  return <span className="font-mono text-xs text-muted">[ {label} ]</span>
}

function Featured() {
  return (
    <Reveal as="article" className="mt-10 flex flex-col gap-4 rounded-[32px] bg-card p-4 lg:flex-row">
      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-tint to-tint-2 lg:min-h-[400px] lg:flex-[3]">
        <div className="flex h-[72%] w-[80%] items-center justify-center overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_rgba(52,81,245,0.18)]">
          <Shot src={fp.image} alt={`${fp.title} screenshot`} label={`${fp.title} screenshot`} />
        </div>
      </div>

      <div className="flex min-w-0 flex-col px-3 py-4 sm:px-5 sm:py-6 lg:flex-[2]">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-accent px-3 py-1.5 text-[13px] text-white">Featured</span>
          <span className="rounded-full bg-soft px-3 py-1.5 text-[13px]">{fp.meta}</span>
        </div>
        <h3 className="mt-5 text-4xl font-semibold tracking-[-0.03em]">{fp.title}</h3>
        <p className="mt-3 text-[17px] leading-relaxed text-muted">{fp.description}</p>
        <ul className="mt-5 flex flex-col gap-2.5 text-[15px]">
          {fp.points.map((p) => (
            <li key={p} className="flex gap-2.5">
              <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-5 font-mono text-xs text-muted">{fp.stack.join(' · ')}</p>
        <div className="mt-auto flex gap-2.5 pt-6">
          <a
            href={fp.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-1.5 rounded-full bg-solid px-5 text-[15px] font-medium text-on-solid"
          >
            Live site <ArrowUpRight size={16} />
          </a>
          <a
            href={fp.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center rounded-full border border-line px-5 text-[15px] font-medium hover:border-ink/40"
          >
            Code
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 px-5 pt-24 sm:px-6 sm:pt-32">
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

        <Featured />

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} as="article" delay={i * 90} className="group flex flex-col rounded-[28px] bg-card p-3.5">
              <div
                className={`flex h-[220px] items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br ${tints[p.tint]}`}
              >
                <Shot
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  label="screenshot"
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-3 pt-5 pb-2.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <span className="text-[13px] text-muted">{p.year}</span>
                </div>
                <p className="mt-2.5 text-base leading-normal text-muted">{p.description}</p>
                <p className="mt-3.5 font-mono text-xs text-muted">{p.stack}</p>
                <div className="mt-auto flex gap-4 pt-5 text-[15px] font-medium">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                      Live <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer" className="hover:text-accent">
                    Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
