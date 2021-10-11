/**
 * Loads and runs external JavaScript.
 *
 * @param {string} src - Source URL.
 * @returns {Promise} - Promise with event.
 */
async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')

    script.src = src
    script.async = true

    script.onload = function onLoad(event) {
      cleanup()
      resolve(event)
    }

    script.onerror = function onError(event) {
      cleanup()
      reject(event)
    }

    function cleanup() {
      script.onload = null
      script.onerror = null
    }

    document.head.appendChild(script)
  })
}
