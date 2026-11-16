import { useCallback, useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import { ArrowRight, ArrowUpRight, Close, Download, GitHub, LinkedIn, Mail, Menu, Moon, Sun } from './Icons.jsx'
import { isPlaceholder } from './ui.jsx'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

function MobileMenu({ active, onClose }) {
  const { links: social } = profile

  // Close on Escape and stop the page behind from scrolling while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    const onResize = () => window.innerWidth >= 768 && onClose()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [onClose])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="fade-in fixed inset-0 z-30 cursor-default bg-[#0E1116]/30 backdrop-blur-sm"
      />
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className="menu-in fixed inset-x-4 top-[76px] z-50 rounded-[28px] border border-line bg-card p-2.5 shadow-[0_24px_60px_rgba(14,17,22,0.18)]"
      >
        <ul>
          {links.map((l, i) => {
            const isActive = active === l.href
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={onClose}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex min-h-14 items-center gap-4 rounded-2xl px-4 transition-colors ${
                    isActive ? 'bg-soft' : 'hover:bg-soft'
                  }`}
                >
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  <span
                    className={`flex-1 text-[22px] font-semibold tracking-[-0.03em] ${
                      isActive ? 'text-accent dark:text-[#8FA2FF]' : 'text-ink'
                    }`}
                  >
                    {l.label}
                  </span>
                  <span className={isActive ? 'text-accent dark:text-[#8FA2FF]' : 'text-faint'}>
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-2 border-t border-line px-2 pt-3 pb-1.5">
          <div className="flex gap-2">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-solid text-[15px] font-medium text-on-solid"
            >
              Let’s talk <ArrowRight size={16} />
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                download={profile.resumeFileName}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-5 text-[15px] font-medium"
              >
                <Download size={16} /> CV
              </a>
            )}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[13px] text-muted">
              <span className="size-2 rounded-full bg-[#1F9D55] dark:bg-[#3DDC84]" />
              {profile.status}
            </span>
            <span className="flex gap-1.5">
              <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social bg-soft">
                <GitHub />
              </a>
              {!isPlaceholder(social.linkedin) && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social bg-soft">
                  <LinkedIn />
                </a>
              )}
              {!isPlaceholder(profile.email) && (
                <a href={`mailto:${profile.email}`} aria-label="Email" className="social bg-soft">
                  <Mail />
                </a>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = ['about', 'work', 'services', 'contact']
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    const onTop = () => {
      if (window.scrollY < 300) setActive('#top')
      else if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) setActive('#contact')
    }
    window.addEventListener('scroll', onTop, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onTop)
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || open ? 'bg-page/80 py-2 shadow-[0_1px_0_var(--line)] backdrop-blur-xl' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-6">
          <a href="#top" onClick={close} className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
            <span className="inline-flex size-9 items-center justify-center rounded-[10px] bg-accent font-mono text-[15px] font-medium text-white">
              m/
            </span>
            {profile.name}
          </a>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 rounded-full border border-white/80 bg-pill p-1.5 backdrop-blur md:flex dark:border-white/10"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-[15px] transition-colors ${
                  active === l.href ? 'bg-card font-medium text-ink shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-pill text-ink backdrop-blur transition-colors hover:border-ink/40"
            >
              {dark ? <Sun /> : <Moon />}
            </button>
            <a href="#contact" className="group hidden items-center gap-1 text-on-solid sm:inline-flex">
              <span className="inline-flex h-11 items-center rounded-full bg-solid px-5 text-[15px] font-medium">Let’s talk</span>
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-solid transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-solid text-on-solid transition-transform active:scale-95 md:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {open && <MobileMenu active={active} onClose={close} />}
    </>
  )
}
