/**
 * Performs an HTTP request.
 *
 * @param {Object} details - Request details.
 * @param {function} callback - Callback on load, error or abort.
 */
function request({ method, url, contentType = '', timeout = 30e3, data = null }, callback = null) {
  const xhr = new XMLHttpRequest()

  xhr.timeout = timeout

  if (callback) {
    xhr.onload = function onLoad() {
      callback(null, {
        status: xhr.status,
        statusText: xhr.statusText,
        type: xhr.responseType,
        data: xhr.response,
      })
    }

    xhr.onerror = function onError() {
      callback(Error('error'))
    }

    xhr.onabort = function onAbort() {
      callback(Error('abort'))
    }
  }

  xhr.open(method.toUpperCase(), url, true)

  if (contentType) {
    xhr.setRequestHeader('Content-type', contentType)
  }

  xhr.send(data)
}

/**
 * Performs a GET request.
 *
 * @param {string} url - Request URL.
 * @param {function} callback - Callback.
 */
request.get = function get(url, callback) {
  request({ method: 'GET', url }, callback)
}

/**
 * Performs a POST request.
 *
 * @param {string} url - Request URL.
 * @param {*} data - Data to post.
 * @param {function} callback - Callback.
 */
request.post = function post(url, data = null, callback) {
  if (data && typeof data === 'object') {
    const formData = new FormData()
    const { hasOwnProperty } = Object.prototype

    for (const name in data) {
      if (hasOwnProperty.call(data, name)) {
        formData.append(name, data[name])
      }
    }

    data = formData
  }

  request({ method: 'POST', url, data }, callback)
}
