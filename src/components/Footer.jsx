import { Link } from 'react-router-dom'
import site from '../data/site.json'
import Container from './Container'
import { GitHub, Globe, LinkedIn, Mail } from './Icons'

const navItems = site.nav || []
const brand = site.brand || {}
const footer = site.footer || {}
const contact = site.contact || {}
const contactLinks = contact.links || {}

/** Built from site.json.contact.links — only entries with a URL are rendered. */
const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn', href: contactLinks.linkedin, Icon: LinkedIn },
  { key: 'github', label: 'GitHub', href: contactLinks.github, Icon: GitHub },
  { key: 'portfolio', label: 'Portfolio', href: contactLinks.portfolio, Icon: Globe },
].filter((link) => Boolean(link.href))

/* Resolved once at module load — keeps `new Date()` out of the render path. */
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand-name">{brand.name}</p>
            <p className="site-footer__note">{brand.tagline}</p>
          </div>

          <div>
            <p className="site-footer__title">Navigate</p>
            <nav className="site-footer__links" aria-label="Footer">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer__title">Elsewhere</p>
            <div className="site-footer__links">
              {contact.email ? (
                <a href={`mailto:${contact.email}`}>
                  <Mail size={14} /> {contact.email}
                </a>
              ) : null}
              {socialLinks.map(({ key, label, href, Icon }) => (
                <a key={key} href={href} target="_blank" rel="noreferrer">
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {CURRENT_YEAR} {footer.copyright || brand.name}
          </span>
          {footer.note ? <span>{footer.note}</span> : null}
        </div>
      </Container>
    </footer>
  )
}
