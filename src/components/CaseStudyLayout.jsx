import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'
import { ArrowLeft, ArrowRight, Check } from './Icons'
import ProjectVisual from './ProjectVisual'

const caseStudyCta = projectsData.caseStudyCta || {}

/**
 * CaseStudyLayout — the full tier-1 case study page.
 * Every value comes from the project object in projects.json.
 */
export default function CaseStudyLayout({ project }) {
  return (
    <article className="case-study">
      <div className="container">
        <Link className="link-arrow case-study__back" to="/projects">
          <ArrowLeft size={16} /> All projects
        </Link>

        <header className="case-study__hero">
          <ProjectVisual project={project} ratio="21x9" />

          <h1 className="case-study__title">{project.title}</h1>
          {project.subtitle ? <p className="case-study__subtitle">{project.subtitle}</p> : null}

          <div className="case-study__meta">
            <span>{project.year}</span>
            {project.status ? <span className="badge badge--status">{project.status}</span> : null}
          </div>

          {project.metrics?.length ? (
            <div className="metrics">
              {project.metrics.map((metric) => (
                <div className="metric" key={`${metric.value}-${metric.label}`}>
                  <div className="metric__value">{metric.value}</div>
                  <div className="metric__label">{metric.label}</div>
                </div>
              ))}
            </div>
          ) : null}
        </header>

        {project.overview ? <p className="case-study__overview">{project.overview}</p> : null}

        {(project.sections || []).map((section) => (
          <section className="case-study__section" key={section.heading}>
            <h2 className="case-study__section-title">{section.heading}</h2>

            {section.body ? <p className="case-study__section-body">{section.body}</p> : null}

            {Array.isArray(section.items) && section.items.length ? (
              <ul className="bullet-list">
                {section.items.map((item) => (
                  <li className="bullet-list__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        {project.outcomes?.length ? (
          <section className="case-study__section">
            <h2 className="case-study__section-title">Outcomes</h2>
            <ul className="check-list">
              {project.outcomes.map((outcome) => (
                <li className="check-list__item" key={outcome}>
                  <Check size={18} />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.stack?.length ? (
          <div className="case-study__stack">
            <p className="case-study__stack-title">Stack</p>
            <ul className="chips">
              {project.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="case-study__cta">
          <div className="cta-band">
            <h2 className="cta-band__title">{caseStudyCta.heading}</h2>
            <p className="cta-band__body">{caseStudyCta.subheading}</p>
            <div className="cta-band__actions">
              <Link
                className="btn btn--primary"
                to={caseStudyCta.button?.path || '/projects'}
              >
                {caseStudyCta.button?.label || 'All Projects'} <ArrowRight size={16} />
              </Link>
              <Link className="btn btn--secondary" to="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
