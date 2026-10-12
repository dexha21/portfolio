import { Link } from 'react-router-dom'
import about from '../data/about.json'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { ArrowRight, Check } from '../components/Icons'

const timeline = about.timeline || []
const howIWork = about.howIWork?.items || []
const currently = about.currently?.items || []

/**
 * About — every block reads from about.json:
 * intro, origin story, "what I do now", "how I work", timeline, "currently", CTA.
 */
export default function About() {
  return (
    <>
      <header className="page-head">
        <Container>
          {about.eyebrow ? <p className="eyebrow">{about.eyebrow}</p> : null}
          <h1 className="page-head__title">{about.heading}</h1>
          {about.intro ? <p className="page-head__lead">{about.intro}</p> : null}
        </Container>
      </header>

      {/* Origin story */}
      <section className="section">
        <Container>
          <div className="teaser">
            <h2 className="teaser__title">{about.origin?.heading}</h2>
            <p className="teaser__body">{about.origin?.body}</p>
          </div>
        </Container>
      </section>

      {/* What I do now */}
      <section className="section section--muted">
        <Container>
          <div className="teaser">
            <h2 className="teaser__title">{about.whatIdo?.heading}</h2>
            <p className="teaser__body">{about.whatIdo?.body}</p>
          </div>
        </Container>
      </section>

      {/* How I work */}
      <section className="section">
        <Container>
          <SectionHeading heading={about.howIWork?.heading} />
          <div className="grid grid--2">
            {howIWork.map((item) => (
              <div className="info-card" key={item.title}>
                <h3 className="info-card__title">{item.title}</h3>
                <p className="info-card__body">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section section--muted">
        <Container>
          <SectionHeading heading="Timeline" />
          <ol className="timeline">
            {timeline.map((entry, index) => (
              <li
                className={`timeline__item${index % 2 === 1 ? ' timeline__item--right' : ''}`}
                key={`${entry.year}-${entry.title}`}
              >
                <span className="timeline__dot" aria-hidden="true" />
                <div className="timeline__card">
                  <span className="timeline__year">{entry.year}</span>
                  <h3 className="timeline__title">{entry.title}</h3>
                  <p className="timeline__body">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Currently */}
      <section className="section">
        <Container>
          <SectionHeading heading={about.currently?.heading} />
          <ul className="currently-list">
            {currently.map((item) => (
              <li className="currently-list__item" key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <Container>
          <div className="cta-band">
            <h2 className="cta-band__title">{about.cta?.heading}</h2>
            <p className="cta-band__body">{about.cta?.body}</p>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" to={about.cta?.button?.path || '/contact'}>
                {about.cta?.button?.label || 'Get in touch'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
