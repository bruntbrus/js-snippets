/**
 * Triggers a file download.
 *
 * @param {*} data - Data to download.
 * @param {string} fileName - File name.
 * @param {string} type - MIME type.
 */
function download(data, fileName = 'download.txt', type = 'text/plain') {
  const blob = new Blob([data], { type })
  const a = document.createElement('a')

  a.href = URL.createObjectURL(blob)
  a.download = fileName

  a.dispatchEvent(new MouseEvent('click'))
}
