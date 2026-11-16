import { Fragment, useEffect, useRef } from 'react'
import { heroTags, profile } from '../data/content.js'
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

function Portrait() {
  return (
    <div className="parallax-fast relative flex h-[440px] w-full max-w-[460px] items-end justify-center sm:h-[560px]">
      <div
        className="intro-scale relative flex h-[400px] w-[300px] items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-accent to-accent-2 sm:h-[520px] sm:w-[400px]"
        style={d(0.15)}
      >
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            className="relative z-10 h-[94%] w-auto max-w-none object-contain object-bottom"
          />
        ) : (
          <>
            <svg viewBox="0 0 300 380" className="w-[75%]" aria-hidden="true">
              <circle cx="150" cy="130" r="72" fill="rgba(255,255,255,0.28)" />
              <path d="M20 380c0-80 58-140 130-140s130 60 130 140z" fill="rgba(255,255,255,0.28)" />
            </svg>
            <span className="absolute inset-x-0 top-[46%] text-center font-mono text-[13px] text-white">
              [ your photo, cut out ]
            </span>
          </>
        )}
      </div>

      <span
        className="float z-20 absolute top-[110px] left-0 -rotate-[14deg] rounded-full bg-card px-4 py-2.5 text-[15px] shadow-[0_10px_30px_rgba(52,81,245,0.18)] sm:left-[-10px] sm:text-base"
        style={d(0.7)}
      >
        {heroTags[0]}
      </span>
      <span
        className="float float-delay z-20 absolute top-[50px] right-2 rotate-[12deg] rounded-full bg-card px-4 py-2.5 text-[15px] shadow-[0_10px_30px_rgba(52,81,245,0.18)] sm:right-0 sm:text-base lg:right-3"
        style={d(0.82)}
      >
        {heroTags[1]}
      </span>
      <span
        className="float z-20 absolute top-[260px] right-0 -rotate-6 rounded-full bg-solid px-4 py-2.5 text-[15px] text-on-solid sm:top-[300px] sm:right-[-20px] lg:right-0"
        style={d(0.94)}
      >
        {heroTags[2]}
      </span>
    </div>
  )
}

export default function Hero() {
  const { links } = profile
  const sectionRef = useScrollProgress()
  const leadWords = profile.role.lead.split(' ').length

  return (
    <section
      id="top"
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-tint via-tint-2 to-page px-5 pt-28 sm:px-6 sm:pt-32"
    >
      <div className="relative mx-auto flex max-w-[1240px] flex-col-reverse items-center gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div aria-hidden="true" className="parallax-slow pointer-events-none absolute inset-0">
          <div
            className="intro-fade absolute top-6 left-1/2 -translate-x-1/2 text-[22vw] leading-none font-bold tracking-[-0.05em] whitespace-nowrap text-ghost select-none lg:top-10 lg:text-[220px]"
            style={d(0.1)}
          >
            &lt;builder/&gt;
          </div>
        </div>

        <div className="relative w-full flex-1 pb-16 lg:max-w-[600px] lg:pb-[72px] xl:max-w-[660px]">
          <div className="intro inline-flex items-center gap-2 rounded-full bg-card py-2 pr-3.5 pl-2.5 text-sm text-muted" style={d(0)}>
            <span className="size-2 rounded-full bg-[#1F9D55] dark:bg-[#3DDC84]" />
            {profile.status}
          </div>
          <h1>
            <span className="intro mt-7 block text-xl font-normal text-muted" style={d(0.1)}>
              Hey, I’m {profile.name}.
            </span>
            <span className="mt-2.5 block text-5xl leading-[0.98] font-semibold tracking-[-0.045em] sm:text-7xl xl:text-[88px]">
              <Words text={profile.role.lead} start={0.18} />
              <span className="text-accent dark:text-[#8FA2FF]">
                <Words text={profile.role.highlight} start={0.18 + leadWords * WORD_STEP} />
              </span>
            </span>
          </h1>
          <p className="intro mt-6 max-w-[500px] text-lg leading-relaxed text-muted sm:text-[19px]" style={d(0.32)}>
            {profile.intro}
          </p>

          <div className="intro mt-9 flex flex-wrap gap-3" style={d(0.44)}>
            <PillArrowLink href="#work">View projects</PillArrowLink>
            {profile.resume && (
              <GhostButton href={profile.resume} download={profile.resumeFileName}>
                <Download />
                Download CV
              </GhostButton>
            )}
          </div>

          <div className="intro mt-8 flex gap-2.5" style={d(0.56)}>
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
        </div>

        <Portrait />
      </div>
    </section>
  )
}
