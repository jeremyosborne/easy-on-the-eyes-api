const axios = require('axios')
const content = require('easy-on-the-eyes-content')
const xforms = require('xforms')

/**
 * Retrieve and transform web content.
 *
 * Call with a URL.
 *
 * Promise api rejecting with error or resolving with a content object.
 */
module.exports.fetch = (url) => {
  var transformer = xforms.bestGuess(url)
  return axios.get(url)
    .then(function (response) {
      return content.create({
        content: {
          transformer: transformer.name,
          url: url,
          type: 'html',
          text: transformer.xform(response.data).trim(),
        },
      })
    })
    .catch(function (err) {
      const code = err.response ? err.response.status : 500
      // Network error OR non-okay response.
      var error = content.create({
        error: {
          code: code,
          message: 'Could not retrieve content',
        },
        content: {
          transformer: transformer.name,
          url: url,
        },
      })
      throw error
    })
}
