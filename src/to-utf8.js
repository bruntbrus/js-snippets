/**
 * Converts a string to a UTF-8 byte array.
 *
 * @param {string} string - Source string.
 * @returns {number[]} - Array of byte values.
 */
function toUTF8(string) {
  const bytes = []
  let p = 0

  for (let i = 0, length = string.length; i < length; i++) {
    let c = string.charCodeAt(i)

    if (c < 128) {
      bytes[p++] = c
    } else if (c < 2048) {
      bytes[p++] = (c >> 6) | 192
      bytes[p++] = (c & 63) | 128
    } else if (((c & 0xFC00) === 0xD800) && (i + 1) < length && ((string.charCodeAt(i + 1) & 0xFC00) === 0xDC00)) {
      c = 0x10000 + ((c & 0x03FF) << 10) + (string.charCodeAt(++i) & 0x03FF)
      bytes[p++] = (c >> 18) | 240
      bytes[p++] = ((c >> 12) & 63) | 128
      bytes[p++] = ((c >> 6) & 63) | 128
      bytes[p++] = (c & 63) | 128
    } else {
      bytes[p++] = (c >> 12) | 224
      bytes[p++] = ((c >> 6) & 63) | 128
      bytes[p++] = (c & 63) | 128
    }
  }

  return bytes
}
