import site from '../data/site.json'
import Container from '../components/Container'
import { GitHub, Globe, LinkedIn, Mail, MapPin, Phone } from '../components/Icons'

const contact = site.contact || {}
const links = contact.links || {}

/**
 * Contact — email-first, no form.
 * Details and social links are read from site.json.contact.
 */
export default function Contact() {
  const details = [
    contact.phone
      ? {
          label: 'Phone',
          value: contact.phone,
          href: `tel:${contact.phone.replace(/\s+/g, '')}`,
          Icon: Phone,
        }
      : null,
    contact.location
      ? { label: 'Location', value: contact.location, href: null, Icon: MapPin }
      : null,
    links.linkedin
      ? { label: 'LinkedIn', value: 'Destiny Akugbe', href: links.linkedin, Icon: LinkedIn }
      : null,
    links.github ? { label: 'GitHub', value: links.github, href: links.github, Icon: GitHub } : null,
    links.portfolio
      ? { label: 'Portfolio', value: links.portfolio, href: links.portfolio, Icon: Globe }
      : null,
  ].filter(Boolean)

  return (
    <>
      <header className="page-head">
        <Container>
          <p className="eyebrow">Contact</p>
          <h1 className="page-head__title">{contact.heading}</h1>
          {contact.subheading ? <p className="page-head__lead">{contact.subheading}</p> : null}
        </Container>
      </header>

      <section className="section">
        <Container>
          <div className="contact-layout">
            <p className="contact__sub">
              Email is the fastest way to reach me — I read everything and usually reply within a
              day.
            </p>

            {contact.email ? (
              <a className="contact__email" href={`mailto:${contact.email}`}>
                <Mail size={20} />
                {contact.email}
              </a>
            ) : null}

            <div className="contact__grid">
              {details.map(({ label, value, href, Icon }) => {
                const content = (
                  <>
                    <span className="contact-item__label">
                      <Icon size={14} /> {label}
                    </span>
                    <span className="contact-item__value">{value}</span>
                  </>
                )

                const isExternal = Boolean(href) && href.startsWith('http')

                return href ? (
                  <a
                    className="contact-item"
                    key={label}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact-item" key={label}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
