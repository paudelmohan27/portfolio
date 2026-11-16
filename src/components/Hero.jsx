import { Fragment, useEffect, useRef } from 'react'
import { heroStats, heroTags, profile } from '../data/content.js'
import { Download, GitHub, LinkedIn, Mail } from './Icons.jsx'
import { GhostButton, PillArrowLink, isPlaceholder } from './ui.jsx'

// Entrance delay helper: <div className="intro" style={d(0.2)}> starts 0.2s after load.
const d = (seconds) => ({ '--d': `${seconds}s` })

const WORD_STEP = 0.07

// Splits text into words that each rise out of their own mask, one after another.
function Words({ text, start }) {
  return text.split(' ').map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="word">
        <span style={d(start + i * WORD_STEP)}>{word}</span>
      </span>{' '}
    </Fragment>
  ))
}

// Sets --p on the element from 0 to 1 over the first screen of scrolling, for parallax.
function useScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const p = Math.min(1, Math.max(0, window.scrollY / window.innerHeight))
      el.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
  return ref
}

const tagBase = 'float absolute z-20 rounded-full px-4 py-2.5 text-[15px] whitespace-nowrap sm:text-base'
const tagLight = `${tagBase} bg-card shadow-[0_10px_30px_rgba(52,81,245,0.18)]`

// Centred portrait: the arch and photo fade out at the bottom so the headline can overlap them.
function Portrait() {
  return (
    <div className="relative z-10 mx-auto mt-2 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
      <div className="parallax-fast relative h-[380px] w-[290px] sm:h-[520px] sm:w-[400px] lg:h-[600px] lg:w-[420px] xl:h-[660px] xl:w-[460px]">
        <div
          className="intro-scale arch-fade absolute inset-0 flex items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-accent to-accent-2"
          style={d(0.15)}
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fetchPriority="high"
              className="relative h-[92%] w-auto max-w-none object-contain object-bottom"
            />
          ) : (
            <svg viewBox="0 0 300 380" className="w-[75%]" aria-hidden="true">
              <circle cx="150" cy="130" r="72" fill="rgba(255,255,255,0.28)" />
              <path d="M20 380c0-80 58-140 130-140s130 60 130 140z" fill="rgba(255,255,255,0.28)" />
            </svg>
          )}
        </div>

        <span className={`${tagLight} top-[30%] left-[-9%] -rotate-[14deg] lg:left-[-12%] xl:left-[-16%]`} style={d(0.7)}>
          {heroTags[0]}
        </span>
        <span className={`${tagLight} float-delay top-[11%] right-[-3%] rotate-[12deg] lg:right-[-8%]`} style={d(0.82)}>
          {heroTags[1]}
        </span>
        <span className={`${tagBase} top-[47%] right-[-10%] -rotate-6 bg-solid text-on-solid lg:top-[36%] lg:right-[-4%] xl:top-[40%] xl:right-[-22%]`} style={d(0.94)}>
          {heroTags[2]}
        </span>
      </div>
    </div>
  )
}

function Socials({ className = '' }) {
  const { links } = profile
  return (
    <div className={`flex gap-2.5 ${className}`}>
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social">
        <GitHub />
      </a>
      {!isPlaceholder(links.linkedin) && (
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social">
          <LinkedIn />
        </a>
      )}
      {!isPlaceholder(profile.email) && (
        <a href={`mailto:${profile.email}`} aria-label="Email" className="social">
          <Mail />
        </a>
      )}
    </div>
  )
}

function Actions({ compact = false }) {
  return (
    <div className="flex flex-wrap gap-3">
      <PillArrowLink href="#work">View projects</PillArrowLink>
      {profile.resume && (
        <GhostButton href={profile.resume} download={profile.resumeFileName} aria-label="Download CV">
          <Download />
          {compact ? 'CV' : 'Download CV'}
        </GhostButton>
      )}
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-[20px] border border-white/80 bg-card/75 px-6 py-5 shadow-[0_16px_40px_rgba(14,17,22,0.06)] backdrop-blur dark:border-white/10">
      <span className="max-w-[150px] text-[15px] leading-snug text-muted">{label}</span>
      <span className="text-[34px] leading-none font-semibold tracking-[-0.04em]">{value}</span>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useScrollProgress()
  const leadWords = profile.role.lead.split(' ').length

  return (
    <section
      id="top"
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-tint via-tint-2 to-page px-5 pt-24 pb-10 sm:px-6 sm:pt-28 lg:pb-0"
    >
      <div className="relative mx-auto flex max-w-[1240px] flex-col lg:block lg:h-[680px] xl:h-[740px]">
        {/* Faded word behind the portrait */}
        <div aria-hidden="true" className="parallax-slow pointer-events-none absolute inset-0">
          <div
            className="intro-fade absolute top-14 left-1/2 -translate-x-1/2 text-[23vw] leading-none font-bold tracking-[-0.05em] whitespace-nowrap text-ghost select-none lg:top-20 lg:text-[230px]"
            style={d(0.1)}
          >
            &lt;builder/&gt;
          </div>
        </div>

        {/* Top row: availability on the left, socials on the right */}
        <div className="relative z-20 flex items-center justify-between gap-4">
          <div className="intro inline-flex items-center gap-2 rounded-full bg-card py-2 pr-3.5 pl-2.5 text-sm text-muted" style={d(0)}>
            <span className="size-2 rounded-full bg-[#1F9D55] dark:bg-[#3DDC84]" />
            {profile.status}
          </div>
          <div className="intro hidden lg:block" style={d(0.1)}>
            <Socials />
          </div>
        </div>

        <Portrait />

        {/* Greeting and headline, overlapping the faded bottom of the portrait */}
        <div className="relative z-20 -mt-20 sm:-mt-24 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:max-w-[600px] lg:pb-12 xl:max-w-[760px]">
          <h1>
            <span className="intro block text-lg font-normal text-muted sm:text-xl" style={d(0.1)}>
              Hey, I’m {profile.name}
            </span>
            <span className="mt-2 block text-[44px] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[64px] xl:text-[86px]">
              <Words text={profile.role.lead} start={0.18} />
              <span className="text-accent dark:text-[#8FA2FF]">
                <Words text={profile.role.highlight} start={0.18 + leadWords * WORD_STEP} />
              </span>
            </span>
          </h1>

          {/* Phones and tablets: actions under the headline */}
          <div className="intro mt-7 lg:hidden" style={d(0.44)}>
            <Actions />
            <Socials className="mt-6" />
          </div>
        </div>

        {/* Desktop: quick facts and actions, bottom right */}
        <div className="absolute right-0 bottom-12 z-20 hidden w-[310px] flex-col gap-3 lg:flex xl:w-[330px]">
          {heroStats.map((s, i) => (
            <div key={s.label} className="intro" style={d(0.5 + i * 0.12)}>
              <StatCard {...s} />
            </div>
          ))}
          <div className="intro mt-2" style={d(0.78)}>
            <Actions compact />
          </div>
        </div>
      </div>
    </section>
  )
}
