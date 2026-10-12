import projectsData from '../data/projects.json'

/**
 * All projects in JSON order: the four tier-1 case studies first, then the
 * eleven tier-2 cards. Content is never duplicated here — everything is read
 * from src/data/projects.json.
 */
export const allProjects = [...projectsData.tier1, ...projectsData.tier2]

/** Theme filter options as defined in the JSON. */
export const themes = projectsData.themes

/** "2026" -> 2026 (string years in the JSON are normalised for sorting). */
function yearValue(year) {
  const parsed = Number.parseInt(String(year), 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

/** A project is featured only when `featured === true` (tier 2 has no field). */
export function isFeatured(project) {
  return project?.featured === true
}

/** Featured first, then newest year first. */
export function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    const featuredDiff = (isFeatured(b) ? 1 : 0) - (isFeatured(a) ? 1 : 0)
    if (featuredDiff !== 0) return featuredDiff
    return yearValue(b.year) - yearValue(a.year)
  })
}

/**
 * Filter projects by theme id.
 * A missing theme, 'all', or any falsy value returns the full list.
 */
export function filterByTheme(projects, themeId) {
  if (!themeId || themeId === 'all') return projects
  return projects.filter((project) => project.theme === themeId)
}

/** Every project, unsorted (JSON order). */
export function getAllProjects() {
  return allProjects
}

/** Every project, sorted featured-first then year-descending. */
export function getSortedProjects() {
  return sortProjects(allProjects)
}

/** The tier-1 projects flagged as featured (used by the home page). */
export function getFeaturedProjects() {
  return sortProjects(allProjects.filter(isFeatured))
}

/** Look a project up by its slug id. Returns null when not found. */
export function findProjectById(id) {
  return allProjects.find((project) => project.id === id) || null
}

export function getThemes() {
  return themes
}

/** Human-readable label for a theme id (falls back to the raw id). */
export function getThemeLabel(themeId) {
  const match = themes.find((theme) => theme.id === themeId)
  return match ? match.label : themeId
}

export function isTier1(project) {
  return project?.tier === 1
}
