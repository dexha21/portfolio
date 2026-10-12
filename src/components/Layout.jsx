import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import site from '../data/site.json'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { findProjectById } from '../utils/formatProject'
import Footer from './Footer'
import Nav from './Nav'

/** Static route -> title fragment. Home uses the role so the tab reads
 *  "Backend & Full-Stack Engineer — Destiny Uyi Akugbe". */
const PAGE_TITLES = {
  '/': site?.brand?.role,
  '/about': 'About',
  '/projects': 'Projects',
  '/skills': 'Skills',
  '/contact': 'Contact',
}

/** Derive a document title from the current pathname. */
function resolveTitle(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'

  if (Object.prototype.hasOwnProperty.call(PAGE_TITLES, clean)) {
    return PAGE_TITLES[clean]
  }

  const segments = clean.split('/').filter(Boolean)
  if (segments[0] === 'projects' && segments.length === 2) {
    const project = findProjectById(decodeURIComponent(segments[1]))
    return project ? project.title : 'Project not found'
  }

  return 'Page not found'
}

/**
 * Layout — app shell: sticky nav, main content, footer.
 * Handles the per-route document title and scrolls to the top on navigation.
 */
export default function Layout({ children }) {
  const { pathname } = useLocation()

  useDocumentTitle(resolveTitle(pathname))

  useEffect(() => {
    // Force an instant jump; the global `scroll-behavior: smooth` would
    // otherwise animate the reset on every navigation.
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [pathname])

  return (
    <div className="app-shell">
      <Nav />
      <main className="site-main" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
