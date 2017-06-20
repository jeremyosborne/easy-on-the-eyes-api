//
// Remove assumed useless tags.
//
var cheerio = require('cheerio')

module.exports = {
  name: 'nocruft',
  xform: function (html) {
    var $ = cheerio.load(html)

    // Remove everything we don't want.
    // We select everything to get all potential elements no matter how deeply
    // nested because finding comments is tricky (no explicit selector).
    $.root()
      .find('*')
      .contents()
      .filter(function () {
        var tagsToRemove = {
          noscript: true,
          script: true,
          link: true,
          style: true
        }
        return this && (this.type === 'comment' || (this.tagName && this.tagName.toLowerCase() in tagsToRemove))
      })
      .remove()

    // Return everything, assumed to be further processed by other transforms.
    return $.html().trim()
  }
}
