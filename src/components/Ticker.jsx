import { Fragment } from 'react'
import { skillGroups } from '../data/content.js'

// Every tool from the Toolbox, once each.
const items = [...new Set(skillGroups.flatMap((g) => g.items))]

const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-accent">
    <path fill="currentColor" d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
  </svg>
)

function Row({ hidden = false }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10">
      {items.map((item) => (
        <Fragment key={item}>
          <li className="text-2xl font-semibold tracking-[-0.03em] whitespace-nowrap text-muted transition-colors hover:text-ink sm:text-[32px]">
            {item}
          </li>
          <li aria-hidden="true">
            <Star />
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default function Ticker() {
  return (
    <section aria-label="Technologies I use" className="intro-fade ticker overflow-hidden py-8 sm:py-10" style={{ '--d': '1.1s' }}>
      {/* Rendered twice so moving by half its width loops without a gap. */}
      <div className="ticker-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  )
}
