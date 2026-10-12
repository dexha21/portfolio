import { Link, useParams } from 'react-router-dom'
import projectsData from '../data/projects.json'
import CaseStudyLayout from '../components/CaseStudyLayout'
import ProjectVisual from '../components/ProjectVisual'
import NotFound from './NotFound'
import { findProjectById } from '../utils/formatProject'
import { ArrowLeft, ArrowRight } from '../components/Icons'

const caseStudyCta = projectsData.caseStudyCta || {}

/**
 * ProjectDetail — /projects/:id
 *  - tier 1 -> the full case study layout
 *  - tier 2 -> a simplified detail view (title, subtitle, overview, stack)
 *  - unknown id -> the 404 page
 */
export default function ProjectDetail() {
  const { id } = useParams()
  const project = findProjectById(id)

  if (!project) return <NotFound />

  if (project.tier === 1) return <CaseStudyLayout project={project} />

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
              <Link className="btn btn--primary" to={caseStudyCta.button?.path || '/projects'}>
                {caseStudyCta.button?.label || 'All Projects'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
