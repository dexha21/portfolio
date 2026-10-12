/**
 * SectionHeading — the consistent eyebrow / heading / subheading block.
 *
 * @param eyebrow    small uppercase accent label (optional)
 * @param heading    the heading text (required)
 * @param subheading supporting sentence (optional)
 * @param centered   centre the block (used on the home page)
 * @param as         heading element, defaults to h2
 * @param id         optional id, useful for anchor links
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = false,
  as: Heading = 'h2',
  id,
}) {
  const classes = ['section-heading', centered ? 'section-heading--centered' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {heading ? (
        <Heading className="section-heading__title" id={id}>
          {heading}
        </Heading>
      ) : null}
      {subheading ? <p className="section-heading__sub">{subheading}</p> : null}
    </div>
  )
}
