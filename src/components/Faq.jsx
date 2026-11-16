import { useState } from 'react'
import { faq } from '../data/content.js'
import { ArrowRight, Plus } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { SectionLabel, SectionTitle } from './ui.jsx'

function Item({ item, index, open, onToggle }) {
  const id = `faq-${index}`
  return (
    <Reveal delay={index * 70} className="rounded-2xl bg-card">
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-[17px] font-semibold sm:px-6"
        >
          {item.q}
          <span
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-soft transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <Plus size={16} />
          </span>
        </button>
      </h3>
      <div id={`${id}-a`} role="region" aria-labelledby={`${id}-q`} className="accordion-panel" data-open={open}>
        <div>
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:px-6">{item.a}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  const { heading, aside, items } = faq

  return (
    <section id="faq" className="scroll-mt-24 px-5 pt-20 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <SectionLabel>FAQ</SectionLabel>
        <SectionTitle>{heading}</SectionTitle>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal
            variant="scale"
            className="relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-tint to-tint-2 p-7 sm:p-8 lg:min-h-0"
          >
            <div aria-hidden="true" className="glow -top-20 -left-16 size-72 bg-[#3451F5]/30" />
            <h3 className="relative text-[28px] leading-tight font-semibold tracking-[-0.03em] sm:text-[32px]">{aside.title}</h3>
            <p className="relative mt-2 text-[15px] text-muted">{aside.body}</p>
            <a href="#contact" className="group relative mt-6 inline-flex w-max items-center gap-1 text-on-solid">
              <span className="inline-flex h-12 items-center rounded-full bg-solid px-5 text-[15px] font-medium">Ask me</span>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </a>
          </Reveal>

          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <Item
                key={item.q}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
