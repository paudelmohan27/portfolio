import { heroTags, highlight, profile } from '../data/content.js'
import { Download, GitHub, LinkedIn, Mail, Trophy } from './Icons.jsx'
import { GhostButton, PillArrowLink, isPlaceholder } from './ui.jsx'

const tag = 'float z-20 absolute rounded-full px-3 py-2 text-[13px] sm:px-4 sm:py-2.5 sm:text-base'
const tagShadow = 'shadow-[0_10px_30px_rgba(52,81,245,0.18)]'

function Portrait() {
  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-[460px] items-end justify-center sm:h-[560px] lg:mx-0">
      {/* Phones: the faded word sits behind the photo instead of behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 text-[72px] leading-none font-bold tracking-[-0.05em] whitespace-nowrap text-ghost select-none sm:text-[120px] lg:hidden"
      >
        &lt;builder/&gt;
      </div>

      <div className="relative flex h-[340px] w-[270px] items-end justify-center overflow-hidden rounded-t-full bg-gradient-to-b from-accent to-accent-2 sm:h-[520px] sm:w-[400px]">
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

      <span className={`${tag} ${tagShadow} top-[92px] left-0 -rotate-[12deg] bg-card sm:top-[110px] sm:left-[-10px]`}>
        {heroTags[0]}
      </span>
      <span className={`${tag} ${tagShadow} float-delay top-[52px] right-1 rotate-[12deg] bg-card sm:right-0`}>
        {heroTags[1]}
      </span>
      <span className={`${tag} top-[300px] right-[-20px] hidden -rotate-6 bg-solid text-on-solid sm:inline-flex`}>
        {heroTags[2]}
      </span>

      <div className="absolute bottom-4 left-1/2 z-20 flex w-max max-w-full -translate-x-1/2 items-center gap-3 rounded-[18px] border border-white bg-card/90 px-4 py-3 shadow-[0_16px_40px_rgba(14,17,22,0.10)] backdrop-blur sm:bottom-6 sm:left-[-30px] sm:translate-x-0 sm:gap-3.5 sm:rounded-[20px] sm:px-5 sm:py-4 dark:border-white/10">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF4D6] text-[#8A5A00] sm:size-10 dark:bg-[#FFC850]/15 dark:text-[#FFC850]">
          <Trophy />
        </span>
        <span>
          <span className="block text-xs text-muted sm:text-[13px]">{highlight.label}</span>
          <span className="block text-[15px] font-semibold whitespace-nowrap sm:text-[17px]">{highlight.title}</span>
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const { links } = profile

  return (
    <section
      id="top"
      className="overflow-hidden bg-gradient-to-b from-tint via-tint-2 to-page px-5 pt-24 sm:px-6 sm:pt-32"
    >
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 lg:flex-row lg:items-end">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 hidden -translate-x-1/2 text-[220px] leading-none font-bold tracking-[-0.05em] whitespace-nowrap text-ghost select-none lg:block"
        >
          &lt;builder/&gt;
        </div>

        <div className="relative w-full flex-1 lg:pb-[72px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-card py-2 pr-3.5 pl-2.5 text-sm text-muted">
            <span className="size-2 rounded-full bg-[#1F9D55] dark:bg-[#3DDC84]" />
            {profile.status}
          </div>
          <h1>
            <span className="mt-6 block text-lg font-normal text-muted sm:mt-7 sm:text-xl">Hey, I’m {profile.name}.</span>
            <span className="mt-2 block text-[44px] leading-none font-semibold tracking-[-0.045em] sm:mt-2.5 sm:text-7xl sm:leading-[0.98] xl:text-[88px]">
              {profile.role.lead} <span className="text-accent dark:text-[#8FA2FF]">{profile.role.highlight}</span>
            </span>
          </h1>
          <p className="mt-5 max-w-[500px] text-[17px] leading-relaxed text-muted sm:mt-6 sm:text-[19px]">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <PillArrowLink href="#work">View projects</PillArrowLink>
            {profile.resume && (
              <GhostButton href={profile.resume} download={profile.resumeFileName}>
                <Download />
                Download CV
              </GhostButton>
            )}
          </div>

          <div className="mt-7 flex gap-2.5 sm:mt-8">
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
