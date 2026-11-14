import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import { ArrowRight, Close, Menu, Moon, Sun } from './Icons.jsx'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

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
    const ids = ['about', 'work', 'contact']
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-page/75 py-2 shadow-[0_1px_0_var(--line)] backdrop-blur-xl' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
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
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-solid text-on-solid md:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="mx-5 mt-3 rounded-3xl border border-line bg-card p-3 shadow-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-lg font-medium hover:bg-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
