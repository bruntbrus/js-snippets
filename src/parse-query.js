/**
 * Parses a query string into an object.
 *
 * @param {string} query - Query string.
 * @returns {Object} - Object with query parameters.
 */
function parseQuery(query = location.search) {
  const params = {}

  if (query.startsWith('?')) {
    query = query.slice(1)
  }

  if (query) {
    query.split('&').forEach((part) => {
      const pair = part.split('=')
      const decode = decodeURIComponent

      params[decode(pair[0])] = pair.length > 1 ? decode(pair[1]) : ''
    })
  }

  return params
}
