import { services } from '../data/content.js'
import { ArrowRight, Cpu, Layers, Layout, Monitor } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { SectionLabel, SectionTitle } from './ui.jsx'

const icons = { layers: Layers, layout: Layout, monitor: Monitor, cpu: Cpu }

function ServiceTile({ item, index }) {
  const Icon = icons[item.icon] ?? Layers
  return (
    <Reveal delay={index * 90} className="lift flex flex-col rounded-3xl border border-line bg-card p-6 sm:p-7">
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-soft text-accent">
        <Icon />
      </span>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] sm:text-[22px]">{item.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {item.tags.map((t) => (
          <span key={t} className="rounded-full bg-soft px-3 py-1.5 text-[13px]">
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  )
}

export default function Services() {
  const { heading, items, cta } = services

  return (
    <section id="services" className="scroll-mt-24 px-5 pt-20 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-[1240px]">
        <SectionLabel>What I do</SectionLabel>
        <SectionTitle>{heading}</SectionTitle>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {items.map((item, i) => (
              <ServiceTile key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Call-to-action tile */}
          <Reveal
            variant="scale"
            delay={200}
            className="relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl bg-white p-7 text-[#0E1116] sm:p-8"
          >
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-[#3451F5]/25 blur-3xl" />
            <div aria-hidden="true" className="absolute inset-x-0 top-10 flex justify-center">
              <div className="flex size-48 items-center justify-center rounded-full border border-[#3451F5]/15">
                <div className="flex size-32 items-center justify-center rounded-full border border-[#3451F5]/20">
                  <div className="size-16 rounded-full bg-gradient-to-b from-[#3451F5] to-[#7C93FF] shadow-[0_12px_40px_rgba(52,81,245,0.45)]" />
                </div>
              </div>
            </div>
            <div className="relative mt-auto pt-56">
              <h3 className="text-[28px] leading-tight font-semibold tracking-[-0.03em]">{cta.title}</h3>
              <p className="mt-2 text-[15px] text-[#565C6B]">{cta.body}</p>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-1 text-white"
              >
                <span className="inline-flex h-12 items-center rounded-full bg-[#0E1116] px-5 text-[15px] font-medium">
                  {cta.button}
                </span>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#3451F5] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
