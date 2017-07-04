const axios = require('axios')
const get = require('lodash').get

/**
 * Retrieve search results from wikipedia (and maybe other things in the future).
 *
 * @param {String} query plain query string to search for.
 * @return Promise api rejecting with error or resolving with an array of content
 * objects.
 */
module.exports.fetch = (query) => {
  const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&utf8&format=json&srsearch=' + encodeURIComponent(query)
  return axios.get(searchUrl)
    .then(function (response) {
      // console.log(JSON.stringify(response.data, null, 4))
      return get(response, 'data.query.search', []).map((match) => (
        {
          error: {
            code: 0,
            message: ''
          },
          content: {
            transformer: null,
            title: match.title,
            type: 'text/html',
            text: match.snippet,
            url: '//wikipedia.org/wiki/' + encodeURIComponent(match.title),
          },
        }
      ))
    })
    .catch(function (err) {
      const code = err.response ? err.response.status : 500
      // Network error OR non-okay response.
      var error = {
        error: {
          code: code,
          message: 'Could not retrieve content',
        },
        content: {
          transformer: null,
          url: searchUrl,
        },
      }
      throw error
    })
}
