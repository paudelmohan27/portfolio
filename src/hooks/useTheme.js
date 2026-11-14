import { useCallback, useEffect, useState } from 'react'

export function useTheme() {
  // Start as light so the prerendered HTML and the first client render match.
  // The real theme is already on <html> (set by the inline script in index.html),
  // so colors are right from the first paint; this only syncs the toggle icon.
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch {
        /* storage blocked: theme still switches for this visit */
      }
      return next
    })
  }, [])

  return { dark, toggle }
}
