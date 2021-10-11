/**
 * Returns an escaped string for a RegExp.
 *
 * @param {string} string - String to escape.
 * @returns {string} - Escaped string.
 */
function regExpEscape(string) {
  return string.replace(/[\\^$().+\-?*[\]{}]/g, '\\$&')
}
