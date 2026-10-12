/**
 * slugify — converts an arbitrary string into a kebab-case slug.
 * Useful for anchors/ids derived from titles.
 *
 *   slugify('Hello, World!')  -> 'hello-world'
 *   slugify('  De Learn — LMS ') -> 'de-learn-lms'
 */
export function slugify(input) {
  if (typeof input !== 'string') return ''

  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics
    .replace(/['’`]/g, '') // drop apostrophes
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // non-alphanumerics -> hyphen
    .replace(/^-+|-+$/g, '') // trim leading/trailing hyphens
}

export default slugify
