import { useSearchParams } from 'react-router-dom'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import { filterByTheme, getSortedProjects, getThemeLabel, getThemes } from '../utils/formatProject'

const ALL = 'all'

/**
 * Projects — the full archive.
 * Tier 1 and tier 2 are shown together, sorted featured-first then newest.
 * The active theme filter lives in the URL (?theme=education) so filtering is
 * shareable and back/forward works.
 */
export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedTheme = searchParams.get('theme')
  const themes = getThemes()

  const activeTheme =
    requestedTheme && themes.some((theme) => theme.id === requestedTheme) ? requestedTheme : ALL

  const allSorted = getSortedProjects()
  const projects = filterByTheme(allSorted, activeTheme)

  const selectTheme = (themeId) => {
    if (themeId === ALL) setSearchParams({})
    else setSearchParams({ theme: themeId })
  }

  const activeLabel = getThemeLabel(activeTheme)

  return (
    <>
      <header className="page-head">
        <Container>
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-head__title">Projects</h1>
          <p className="page-head__lead">
            {allSorted.length} production systems — {allSorted.filter((p) => p.tier === 1).length}{' '}
            full case studies and the rest of the archive.
          </p>
        </Container>
      </header>

      <section className="section">
        <Container>
          <div className="filter-bar" role="group" aria-label="Filter projects by theme">
            <button
              type="button"
              className={`filter-btn${activeTheme === ALL ? ' is-active' : ''}`}
              aria-pressed={activeTheme === ALL}
              onClick={() => selectTheme(ALL)}
            >
              All
            </button>

            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                className={`filter-btn${activeTheme === theme.id ? ' is-active' : ''}`}
                aria-pressed={activeTheme === theme.id}
                onClick={() => selectTheme(theme.id)}
              >
                {theme.label}
              </button>
            ))}
          </div>

          <p className="projects-count" aria-live="polite">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
            {activeTheme === ALL ? '' : ` in ${activeLabel}`}
          </p>

          {projects.length ? (
            <div className="grid grid--3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="empty-state">No projects match this filter yet.</div>
          )}
        </Container>
      </section>
    </>
  )
}
