const express = require('express')
const content = require('easy-on-the-eyes-content')
const fetchContent = require('./content').fetch
const fetchSearch = require('./search').fetch
const fetchSuggestions = require('./suggestions').fetch
const logger = require('./logger')
const morgan = require('morgan')
const path = require('path')

// For accessing public, views, and other sibling directories.
var ROOT_PATH = path.resolve(path.join(__dirname, '..'))

var app = express()

if (process.env.NODE_ENV !== 'production') {
  logger.info('Running in dev mode.')

  logger.info('winston logging level to "debug".')
  logger.level = 'debug'

  logger.info('morgan logging set to "dev".')
  app.use(morgan('dev'))
} else {
  logger.info('Running in production mode.')

  logger.info('winstoh logging level to "info".')
  logger.level = 'info'

  logger.info('morgan logging set to "combined".')
  app.use(morgan('combined'))
}

// AJAX specific content fetching.
// Assumed that if this is being called, we want content or we want to
// deliver a sane object that describes why we can't get the error.
app.get('/api/content', function (req, res) {
  var url = req.query.url
  if (url) {
    fetchContent(url).then((content) => {
      res.send(content)
    }).catch((errorContent) => {
      console.error(errorContent)
      res.status((errorContent.error && errorContent.error.code) || 500).send(errorContent)
    })
  } else {
    res.status(400).send(content.create({
      error: {
        code: 400,
        message: 'please provide url query parameter',
      }
    }))
  }
})

app.get('/api/search/:search', function (req, res) {
  var search = req.params.search
  if (search) {
    fetchSearch(search).then((results) => {
      res.send(results)
    }).catch((err) => {
      console.error(err)
      res.status((err.error && err.error.code) || 500).send(err)
    })
  } else {
    res.status(400).send(content.create({
      error: {
        code: 400,
        message: 'please search parameter in path',
      }
    }))
  }
})

app.get('/api/suggestions', function (req, res) {
  fetchSuggestions().then((suggestions) => {
    res.send(suggestions)
  }).catch((errorContent) => {
    console.error(errorContent)
    res.status((errorContent.error && errorContent.error.code) || 500).send(errorContent)
  })
})

// If something slips through still return JSON
app.use('/api', function (err, req, res, next) {
  const code = err.status || 500
  logger.debug('Unhandled `/api` error:', err)

  // use the error's status or default to 500
  res.status(code)

  // send back json data
  res.send({
    error: {
      code: code,
      message: err.message || 'Unkonwn server error.'
    }
  })
})

app.use(express.static(path.join(ROOT_PATH, 'public')))

// If we end up here, let the client deal with things.
app.get(/^\/.*/, function (req, res) {
  res.sendFile(path.join(ROOT_PATH, 'public/index.html'))
})

module.exports = app
