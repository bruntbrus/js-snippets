/**
 * Clones a value.
 *
 * @param {*} value - Value to clone.
 * @returns {*} - Clone of value.
 */
function clone(value) {
  if (value === null || typeof value !== 'object') {
    return value
  }

  if (Array.isArray(value)) {
    return value.map(clone)
  }

  const object = Object.create(Object.getPrototypeOf(value))
  const { hasOwnProperty } = Object.prototype

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      object[key] = clone(value[key])
    }
  }

  return object
}
