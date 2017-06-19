//
// For *wikipedia.org/wiki/* articles
//
var cheerio = require('cheerio')
var noCruft = require('./nocruft')

module.exports = {
  name: 'wikipedia',
  xform: function (html) {
    var $ = cheerio.load(noCruft.xform(html))

    // Grab the heading to reinsert later.
    var title = $('#firstHeading')

    $(`table, #toc, #siteSub, #contentSub, .mw-jump, .hatnote, .thumb.tright,
      .printfooter, #catlinks, .mw-editsection, .reference,
      .noprint.Inline-Template.Template-Fact, .visualClear`).each(function (i, el) {
        $(el).remove()
      })

    $('h1, h2, h3, h4, h5, h6, .references > *').each(function (i, el) {
      $(el).html($(el).text())
    })

    // Add the title back in.
    $('#mw-content-text').prepend(title)

    return $('#mw-content-text').html().trim()
  }
}
