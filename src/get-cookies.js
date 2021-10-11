/**
 * Returns an object with all cookies.
 *
 * @returns {Object} - Cookies.
 */
function getCookies() {
  const cookies = {}

  if (!document.cookie) {
    return cookies
  }

  document.cookie.split(/\s*;\s*/).forEach((cookie) => {
    const parts = cookie.split('=')
    const decode = decodeURIComponent

    cookies[decode(parts[0])] = decode(parts[1])
  })

  return cookies
}
