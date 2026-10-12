import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { ArrowRight } from '../components/Icons'

/**
 * NotFound — shown for unknown routes and unknown project ids.
 */
export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <div className="not-found">
          <p className="not-found__code">404</p>
          <h1>Page not found</h1>
          <p className="not-found__text">
            The page you are looking for does not exist or may have been moved.
          </p>
          <Link className="btn btn--primary" to="/">
            Back to home <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
