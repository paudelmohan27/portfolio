import { closing, profile } from '../data/content.js'
import { ArrowRight, ArrowUp, ArrowUpRight, Download, GitHub, LinkedIn, Mail } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { isPlaceholder } from './ui.jsx'

const navTiles = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const { links } = profile
  const hasEmail = !isPlaceholder(profile.email)

  return (
    <footer className="band relative mx-2 mt-20 mb-2 overflow-hidden rounded-[32px] px-5 pt-16 pb-8 sm:mx-4 sm:mt-32 sm:mb-4 sm:rounded-[44px] sm:px-10 sm:pt-24">
      <div aria-hidden="true" className="glow -bottom-40 left-1/2 h-80 w-[70%] -translate-x-1/2 bg-[#3451F5]/60" />

      <div className="relative mx-auto max-w-[1240px]">
        <Reveal as="h2" className="max-w-[760px] text-[44px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-7xl">
          {closing.heading}
        </Reveal>

        <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
          {hasEmail && (
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-1 text-[#0E1116]">
              <span className="inline-flex h-[52px] items-center rounded-full bg-white px-6 text-base font-medium">{closing.button}</span>
              <span className="inline-flex size-[52px] items-center justify-center rounded-full bg-[#3451F5] text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight />
              </span>
            </a>
          )}
          {profile.resume && (
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-line px-6 text-base font-medium hover:bg-soft"
            >
              <Download /> Download CV
            </a>
          )}
        </Reveal>

        <nav aria-label="Footer" className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {navTiles.map((t, i) => (
            <Reveal key={t.href} delay={i * 70} variant="scale">
              <a
                href={t.href}
                className="group flex h-full min-h-24 flex-col justify-between rounded-2xl border border-line bg-card p-4 transition-colors hover:bg-soft"
              >
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
                <span className="flex items-center justify-between text-lg font-semibold">
                  {t.label}
                  <span className="text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink">
                    <ArrowUpRight size={17} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </nav>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
          <div className="flex items-center gap-2">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social bg-soft">
              <GitHub />
            </a>
            {!isPlaceholder(links.linkedin) && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social bg-soft">
                <LinkedIn />
              </a>
            )}
            {hasEmail && (
              <a href={`mailto:${profile.email}`} aria-label="Email" className="social bg-soft">
                <Mail />
              </a>
            )}
            <a href="#top" aria-label="Back to top" className="social ml-2 bg-white text-[#0E1116] hover:text-[#3451F5]">
              <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
