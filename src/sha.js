/**
 * Generates a SHA-x hash string.
 *
 * @param {number} length - Hash length.
 * @param {ArrayBuffer|string} buffer - Source buffer.
 * @returns {Promise} - Promise with hash string.
 */
function sha(length, buffer) {
  if (typeof buffer === 'string') {
    buffer = (new TextEncoder('utf-8')).encode(buffer)
  }

  return crypto.subtle.digest('SHA-' + length, buffer).then((buffer) => {
    const view = new DataView(buffer)
    const codes = []
    const padding = '00000000'

    for (let i = 0, length = view.byteLength; i < length; i += 4) {
      const value = view.getUint32(i).toString(16)
      codes.push((padding + value).slice(-padding.length))
    }

    return codes.join('')
  })
}
