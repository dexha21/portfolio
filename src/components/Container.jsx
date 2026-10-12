/**
 * Container — centres content and applies horizontal padding.
 * Pass `narrow` for the 720px reading-width variant.
 */
export default function Container({ children, narrow = false, className = '' }) {
  const classes = ['container', narrow ? 'container--narrow' : '', className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
