/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var transformer = require('./nocruft')

describe('noCruft', function () {
  var input = `<html>
    <head><title></title><script></script><link></link><style></style></head>
    <body><noscript></noscript></body>
  </html>`
  var output = `<html>
    <head><title></title></head>
    <body></body>
  </html>`

  it('returns expected output', function () {
    assert.strictEqual(transformer.xform(input), output)
  })
})
