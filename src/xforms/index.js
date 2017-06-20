exports.exists = function (xform) {
  try {
    xform = require('./xforms/' + xform)
    return true
  } catch (e) {
    return false
  }
}

// This is going to get nasty really quick, but for now...
exports.bestGuess = function (u) {
  if (/\.wikipedia\.org\/wiki\//.test(u)) {
    return require('./xforms/wikipedia')
  } else {
    return require('./xforms/normal')
  }
}
