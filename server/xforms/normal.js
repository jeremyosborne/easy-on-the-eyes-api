//
// Normal transform, assumed to be useful for any website.
//
var cheerio = require('cheerio')
var noCruft = require('./nocruft')

module.exports = {
  name: 'normal',
  xform: function (html) {
    var $ = cheerio.load(noCruft.xform(html))

    // Return the assumed visible content.
    return $('body').html()
  }
}
