import { useTheme } from '../hooks/useTheme'
import { Monitor, Moon, Sun } from './Icons'

const ICONS = { dark: Moon, light: Sun, system: Monitor }
const NEXT_THEME = { dark: 'light', light: 'system', system: 'dark' }

/**
 * ThemeToggle — one button that cycles dark -> light -> system -> dark.
 * The active state is shown by the icon; the aria-label announces both the
 * current state and what activating it will do.
 */
export default function ThemeToggle() {
  const { theme, cycleTheme, resolvedTheme } = useTheme()

  const Icon = ICONS[theme] || Moon
  const nextTheme = NEXT_THEME[theme] || 'light'
  const label = `Theme: ${theme} (currently showing ${resolvedTheme}). Activate to switch to ${nextTheme}.`

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycleTheme}
      aria-label={label}
      title={`Theme: ${theme}`}
    >
      <Icon size={18} />
    </button>
  )
}
