import { Link } from 'react-router-dom'
import site from '../data/site.json'
import skillsData from '../data/skills.json'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { ArrowRight, CategoryIcon, Mail } from '../components/Icons'
import { getFeaturedProjects } from '../utils/formatProject'

const hero = site.hero || {}
const aboutTeaser = site.aboutTeaser || {}
const featuredHeading = site.featuredHeading || {}
const skillsTeaser = site.skillsTeaser || {}
const contact = site.contact || {}

/**
 * Home — 5 sections, all driven by site.json / projects.json / skills.json:
 *   1. Hero (eyebrow, headline, sub, 2 CTAs, highlights strip)
 *   2. About teaser
 *   3. Featured projects (tier-1 projects flagged featured)
 *   4. Skills teaser (top 3 categories)
 *   5. Contact CTA
 */
export default function Home() {
  const featured = getFeaturedProjects()
  const teaserCategories = (skillsData.categories || []).slice(0, 3)

  return (
    <>
      {/* 1 — Hero */}
      <section className="hero">
        <Container>
          <div className="hero__inner">
            {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
            <h1 className="hero__headline">{hero.headline}</h1>
            {hero.subheadline ? <p className="hero__sub">{hero.subheadline}</p> : null}

            <div className="hero__actions">
              {hero.primaryCta ? (
                <Link className="btn btn--primary" to={hero.primaryCta.path}>
                  {hero.primaryCta.label} <ArrowRight size={16} />
                </Link>
              ) : null}
              {hero.secondaryCta ? (
                <Link className="btn btn--secondary" to={hero.secondaryCta.path}>
                  {hero.secondaryCta.label}
                </Link>
              ) : null}
            </div>

            {hero.highlights?.length ? (
              <div className="hero__highlights">
                {hero.highlights.map((highlight) => (
                  <div className="hero__stat" key={highlight.label}>
                    <div className="hero__stat-value">{highlight.value}</div>
                    <div className="hero__stat-label">{highlight.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {/* 2 — About teaser */}
      <section className="section">
        <Container>
          <div className="teaser">
            <h2 className="teaser__title">{aboutTeaser.heading}</h2>
            <div>
              <p className="teaser__body">{aboutTeaser.body}</p>
              {aboutTeaser.cta ? (
                <p className="teaser__cta">
                  <Link className="link-arrow" to={aboutTeaser.cta.path}>
                    {aboutTeaser.cta.label} <ArrowRight size={16} />
                  </Link>
                </p>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* 3 — Featured projects */}
      <section className="section section--muted">
        <Container>
          <SectionHeading
            eyebrow={featuredHeading.eyebrow}
            heading={featuredHeading.heading}
            subheading={featuredHeading.subheading}
            centered
          />
          <div className="grid grid--2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4 — Skills teaser */}
      <section className="section">
        <Container>
          <SectionHeading
            heading={skillsTeaser.heading}
            subheading={skillsTeaser.subheading}
            centered
          />
          <div className="grid grid--3">
            {teaserCategories.map((category) => (
              <div className="skill-card" key={category.id}>
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <CategoryIcon name={category.icon} />
                  </span>
                  <h3 className="skill-card__name">{category.name}</h3>
                </div>
                <ul className="chips">
                  {(category.skills || []).slice(0, 6).map((skill) => (
                    <li className="chip" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {skillsTeaser.cta ? (
            <p className="text-center mt-8">
              <Link className="link-arrow" to={skillsTeaser.cta.path}>
                {skillsTeaser.cta.label} <ArrowRight size={16} />
              </Link>
            </p>
          ) : null}
        </Container>
      </section>

      {/* 5 — Contact CTA */}
      <section className="section section--muted">
        <Container>
          <div className="cta-band">
            <h2 className="cta-band__title">{contact.heading}</h2>
            {contact.subheading ? <p className="cta-band__body">{contact.subheading}</p> : null}
            <div className="cta-band__actions">
              {contact.email ? (
                <a className="btn btn--primary" href={`mailto:${contact.email}`}>
                  <Mail size={16} /> {contact.email}
                </a>
              ) : null}
              <Link className="btn btn--secondary" to="/contact">
                Contact page
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
