/**
 * Returns an object with components parsed from a URL.
 *
 * @param {string} url - URL to parse.
 * @returns {Object} - URL components.
 */
function parseURL(url) {
  url = url ? new URL(url) : location

  return {
    protocol: url.protocol.slice(0, -1),
    port: url.port ? parseInt(url.port, 10) : 0,
    host: url.hostname,
    path: url.pathname,
    query: url.search ? url.search.slice(1) : '',
    hash: url.hash ? url.hash.slice(1) : '',
    username: url.username || '',
    password: url.password || '',
  }
}
