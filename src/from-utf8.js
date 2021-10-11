/**
 * Converts an array of UTF-8 bytes to a string.
 *
 * @param {number[]} bytes - Array of byte numbers
 * @returns {string} - String value.
 */
function fromUTF8(bytes) {
  let string = ''
  let i = 0
  let c, c2, c3, n

  while (i < bytes.length) {
    c = bytes[i++]
    n = c >> 4

    if (n <= 7) {
      string += String.fromCharCode(c)
    } else if (n === 12 || n === 13) {
      c2 = bytes[i++]
      string += String.fromCharCode(((c & 0x1F) << 6) | (c2 & 0x3F))
    } else if (n === 14) {
      c2 = bytes[i++]
      c3 = bytes[i++]
      string += String.fromCharCode(((c & 0x0F) << 12) | ((c2 & 0x3F) << 6) | ((c3 & 0x3F) << 0))
    }
  }

  return string
}
