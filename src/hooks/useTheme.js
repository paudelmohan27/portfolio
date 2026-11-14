import { useCallback, useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggle = useCallback(() => {
    setDark((d) => {
      const next = !d
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
