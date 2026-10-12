import skillsData from '../data/skills.json'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { CategoryIcon } from '../components/Icons'

const categories = skillsData.categories || []
const highlights = skillsData.highlights || {}

/**
 * Skills — reads every category and highlight from skills.json.
 * Two columns on desktop, one column on mobile.
 */
export default function Skills() {
  return (
    <>
      <header className="page-head">
        <Container>
          {skillsData.eyebrow ? <p className="eyebrow">{skillsData.eyebrow}</p> : null}
          <h1 className="page-head__title">{skillsData.heading}</h1>
          {skillsData.subheading ? <p className="page-head__lead">{skillsData.subheading}</p> : null}
        </Container>
      </header>

      <section className="section">
        <Container>
          <SectionHeading heading={highlights.heading} />
          <div className="grid grid--2">
            {(highlights.items || []).map((item) => (
              <div className="info-card" key={item.title}>
                <h3 className="info-card__title">{item.title}</h3>
                <p className="info-card__body">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--muted">
        <Container>
          <SectionHeading
            heading="All categories"
            subheading={`${categories.length} groups of technologies and practices I use in production.`}
          />
          <div className="grid grid--2">
            {categories.map((category) => (
              <div className="skill-card" key={category.id}>
                <div className="skill-card__head">
                  <span className="skill-card__icon">
                    <CategoryIcon name={category.icon} />
                  </span>
                  <h3 className="skill-card__name">{category.name}</h3>
                </div>
                <ul className="chips">
                  {(category.skills || []).map((skill) => (
                    <li className="chip" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
