import { Link } from 'react-router-dom'
import { ArrowRight } from './Icons'
import ProjectVisual from './ProjectVisual'

/**
 * ProjectCard — renders one project from projects.json.
 *
 * Tier 1 (case study): the card is interactive — visual, title, and CTA all
 * link to /projects/:id, and the card lifts on hover.
 * Tier 2 (archive): static. No links, no hover lift.
 */
export default function ProjectCard({ project }) {
  const isCaseStudy = project.tier === 1

  const classes = [
    'project-card',
    `project-card--tier${project.tier}`,
    isCaseStudy ? 'project-card--interactive' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const visual = <ProjectVisual project={project} ratio="16x9" />

  return (
    <article className={classes}>
      {isCaseStudy ? (
        // Decorative duplicate of the title link below — hidden from AT.
        <Link
          className="project-card__visual-link"
          to={`/projects/${project.id}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          {visual}
        </Link>
      ) : (
        visual
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.year}</span>
          {project.status ? <span className="badge badge--status">{project.status}</span> : null}
        </div>

        <h3 className="project-card__title">
          {isCaseStudy ? (
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          ) : (
            project.title
          )}
        </h3>

        {project.subtitle ? <p className="project-card__subtitle">{project.subtitle}</p> : null}
        {project.summary ? <p className="project-card__summary">{project.summary}</p> : null}

        {project.stack?.length ? (
          <ul className="chips" aria-label="Technology stack">
            {project.stack.map((tech) => (
              <li className="chip" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {isCaseStudy ? (
          <div className="project-card__footer">
            <Link className="link-arrow" to={`/projects/${project.id}`}>
              Read case study <ArrowRight size={16} />
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  )
}
