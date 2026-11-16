import { ArrowUpRight } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export function SectionLabel({ children, light = false }) {
  return (
    <Reveal as="span" className={`inline-flex items-center gap-2 text-[15px] ${light ? 'text-white/85' : 'text-muted'}`}>
      <span className={`size-2 rounded-[3px] ${light ? 'bg-white' : 'bg-accent'}`} />
      {children}
    </Reveal>
  )
}

export function SectionTitle({ children, className = '' }) {
  return (
    <Reveal
      as="h2"
      delay={90}
      className={`mt-3 text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[56px] ${className}`}
    >
      {children}
    </Reveal>
  )
}

// Black pill + round arrow, the signature button.
export function PillArrowLink({ href, children, accentArrow = true, ...rest }) {
  return (
    <a href={href} className="group inline-flex items-center gap-1 text-on-solid" {...rest}>
      <span className="inline-flex h-[52px] items-center rounded-full bg-solid px-6 text-base font-medium transition-transform group-hover:-translate-x-0.5">
        {children}
      </span>
      <span
        className={`inline-flex size-[52px] items-center justify-center rounded-full text-white transition-transform group-hover:rotate-45 ${
          accentArrow ? 'bg-accent' : 'bg-solid text-on-solid'
        }`}
      >
        <ArrowUpRight size={20} />
      </span>
    </a>
  )
}

export function GhostButton({ href, children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex h-[52px] items-center gap-2 rounded-full border border-line bg-pill px-[22px] text-base font-medium text-ink backdrop-blur transition-colors hover:border-ink/40 ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Chip({ children }) {
  return <span className="rounded-full bg-soft px-3.5 py-2 text-[15px] text-ink">{children}</span>
}

export const isPlaceholder = (v) => !v || /^\[.*\]$/.test(v)
