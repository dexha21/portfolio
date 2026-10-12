import { useCallback, useEffect, useState } from 'react'
import site from '../data/site.json'

/**
 * useTheme — three-state theme control (dark | light | system).
 *
 * - Default is "dark".
 * - The preference is persisted to localStorage under the key configured in
 *   site.json (currently "dua-theme-preference").
 * - "system" follows the prefers-color-scheme media query live.
 * - The resolved theme is written to <html data-theme="...">, which drives the
 *   CSS variables in theme.css.
 *
 * index.html contains an identical boot script so the correct theme is applied
 * before first paint (no flash of the wrong theme).
 */

const STORAGE_KEY = site?.theme?.storageKey || 'dua-theme-preference'
const THEMES = ['dark', 'light', 'system']
const NEXT = { dark: 'light', light: 'system', system: 'dark' }

const MEDIA_QUERY = '(prefers-color-scheme: light)'

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return THEMES.includes(stored) ? stored : 'dark'
  } catch {
    // localStorage can throw in private/restricted contexts — fall back.
    return 'dark'
  }
}

function readSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark'
  return window.matchMedia(MEDIA_QUERY).matches ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setThemeState] = useState(readStoredTheme)
  const [systemTheme, setSystemTheme] = useState(readSystemTheme)

  // Keep "system" in sync when the OS preference changes.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const mediaQuery = window.matchMedia(MEDIA_QUERY)
    const handleChange = (event) => setSystemTheme(event.matches ? 'light' : 'dark')

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const resolvedTheme = theme === 'system' ? systemTheme : theme

  // Apply the resolved theme to <html> — the single source of truth for CSS.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)
  }, [resolvedTheme])

  const setTheme = useCallback((next) => {
    const value = THEMES.includes(next) ? next : 'dark'
    setThemeState(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Storage unavailable — the theme still applies for this session.
    }
  }, [])

  const cycleTheme = useCallback(() => {
    setTheme(NEXT[theme] || 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, resolvedTheme, cycleTheme }
}

export default useTheme
