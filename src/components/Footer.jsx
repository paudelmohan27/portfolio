import { profile } from '../data/content.js'
import { isPlaceholder } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="px-5 pt-10 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </span>
        <span className="flex gap-5">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          {!isPlaceholder(profile.links.linkedin) && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          )}
          {profile.resume && (
            <a href={profile.resume} className="hover:text-ink">
              Resume
            </a>
          )}
        </span>
      </div>
    </footer>
  )
}
