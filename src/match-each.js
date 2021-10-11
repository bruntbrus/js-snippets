/**
 * Calls a callback for each match in a string.
 *
 * @param {string} string - String to match against.
 * @param {RegExp} regexp - Matching pattern.
 * @param {function} callback - Callback.
 */
function matchEach(string, regexp, callback) {
  let matches

  while ((matches = regexp.exec(string))) {
    callback.apply(this, matches)
  }
}
