/**
 * Serializes a value into a string.
 *
 * @param {*} value - Value to serialize.
 * @returns {string} - Serialized string value.
 */
function serialize(value) {
  if (value === undefined || value === null) {
    return '' + value
  }

  let replacer = null

  if (typeof value === 'object') {
    replacer = (key, value) => typeof value !== 'function' ? value : undefined
  }

  return JSON.stringify(value, replacer)
}
