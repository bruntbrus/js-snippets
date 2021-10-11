/**
 * Calls callback in async series.
 *
 * @param {Array} items - Items.
 * @param {function} callback - Callback.
 * @param {function} exit - Exit function.
 */
function series(items, callback, exit = null) {
  let i = -1

  function next() {
    if (++i < items.length) {
      callback(items[i], i, next, exit)
    } else if (exit) {
      exit()
    }
  }

  next()
}
