import { useEffect } from 'react'
import site from '../data/site.json'

/**
 * useDocumentTitle — sets document.title to `${title} — ${brand.name}`.
 * Pass no title to fall back to the brand name alone.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const brand = site?.brand?.name || ''
    document.title = title ? `${title} — ${brand}` : brand
  }, [title])
}

export default useDocumentTitle
