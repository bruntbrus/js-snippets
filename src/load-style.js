/**
 * Loads and applies external CSS.
 *
 * @param {string} url - Source URL.
 * @returns {Promise} - Promise with event.
 */
async function loadStyle(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')

    link.href = url
    link.rel = 'stylesheet'

    link.onload = function onLoad(event) {
      cleanup()
      resolve(event)
    }

    link.onerror = function onError(event) {
      cleanup()
      reject(event)
    }

    function cleanup() {
      link.onload = null
      link.onerror = null
    }

    document.head.appendChild(link)
  })
}
