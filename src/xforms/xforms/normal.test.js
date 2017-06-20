/* eslint-env mocha */
//
// Normal transform, assumed to be useful for any website.
//
var assert = require('assert')
var transformer = require('./normal')

describe('normal', function () {
  var input = `<html>
    <head><title></title><script></script><link></link><style></style></head>
    <body><noscript></noscript>Hello world.</body>
  </html>`
  var output = 'Hello world.'

  it('returns expected output', function () {
    assert.strictEqual(transformer.xform(input), output)
  })
})
