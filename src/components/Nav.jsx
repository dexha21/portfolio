import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import site from '../data/site.json'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import { Close, Menu } from './Icons'

const navItems = site.nav || []
const brand = site.brand || {}
const brandMark = brand.initials || brand.shortName || 'DA'

/** Shared className builder so active state is styled consistently. */
const linkClass = (base) => ({ isActive }) =>
  `${base}${isActive ? ' is-active' : ''}`

/**
 * Nav — sticky header with brand, primary links, theme toggle, and a
 * full-screen mobile drawer.
 *
 * Accessibility: the toggle exposes aria-expanded/aria-controls, Escape closes
 * the drawer and returns focus to the toggle, body scroll is locked while the
 * drawer is open, and focus moves into the drawer when it opens.
 */
export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the drawer for keyboard/AT users.
    drawerRef.current?.querySelector('a')?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const closeDrawer = () => setOpen(false)

  return (
    <>
      <header className="site-nav">
        <Container className="site-nav__inner">
          <Link to="/" className="site-nav__brand" onClick={closeDrawer}>
            <span className="site-nav__brand-mark" aria-hidden="true">
              {brandMark}
            </span>
            <span>{brand.name}</span>
          </Link>

          <nav className="site-nav__links" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={linkClass('site-nav__link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-nav__actions">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="site-nav__toggle"
              aria-expanded={open}
              aria-controls="site-nav-drawer"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <Close size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/*
        The drawer is a SIBLING of <header>, deliberately not a child of it.
        <header> has `backdrop-filter`, which makes it the containing block for
        `position: fixed` descendants — nested inside, this drawer's `inset: 0`
        would resolve against the ~64px header box rather than the viewport, so
        its opaque background would only cover the nav strip and page content
        would show through underneath.
      */}
      {open ? (
        <div
          id="site-nav-drawer"
          ref={drawerRef}
          className="site-nav__drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="site-nav__drawer-head">
            <Link to="/" className="site-nav__brand" onClick={closeDrawer}>
              <span className="site-nav__brand-mark" aria-hidden="true">
                {brandMark}
              </span>
              <span>{brand.name}</span>
            </Link>
            <button
              type="button"
              className="site-nav__toggle"
              aria-label="Close navigation menu"
              onClick={closeDrawer}
            >
              <Close size={22} />
            </button>
          </div>

          <nav className="site-nav__drawer-links" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={closeDrawer}
                className={linkClass('site-nav__drawer-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  )
}
