/**
 * ProjectVisual — renders a project's image when one exists, otherwise a
 * deterministic gradient block with the project's initials.
 *
 * Every project in projects.json currently has an empty `image` string, so the
 * gradient fallback is what renders today — but the <img> path is live and will
 * take over as soon as an image is added to the JSON.
 */

/* Eight curated gradient pairs. The pair is chosen from a hash of the project
   id, so a given project always gets the same colours across renders/sessions. */
const GRADIENTS = [
  ['#1e3a8a', '#0ea5e9'],
  ['#4c1d95', '#8b5cf6'],
  ['#831843', '#db2777'],
  ['#7c2d12', '#f59e0b'],
  ['#064e3b', '#10b981'],
  ['#0f766e', '#22d3ee'],
  ['#7f1d1d', '#ef4444'],
  ['#334155', '#94a3b8'],
]

function hashString(value) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 2147483647
  }
  return Math.abs(hash)
}

/** First letters of the first two words: "X CBT" -> "XC", "De Learn" -> "DL". */
function initialsFromTitle(title) {
  const words = String(title || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()
}

export default function ProjectVisual({ project, ratio = '16x9', className = '' }) {
  const image = typeof project?.image === 'string' ? project.image.trim() : ''
  const title = project?.title || 'Project'
  const ratioClass = ratio === '21x9' ? 'project-visual--21x9' : 'project-visual--16x9'
  const classes = ['project-visual', ratioClass, className].filter(Boolean).join(' ')

  if (image) {
    return (
      <div className={classes}>
        <img className="project-visual__img" src={image} alt={title} loading="lazy" />
      </div>
    )
  }

  const key = project?.id || title
  const [from, to] = GRADIENTS[hashString(key) % GRADIENTS.length]

  return (
    <div
      className={classes}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${title} — placeholder graphic`}
    >
      <span className="project-visual__glow" aria-hidden="true" />
      <span className="project-visual__initials" aria-hidden="true">
        {initialsFromTitle(title)}
      </span>
    </div>
  )
}
