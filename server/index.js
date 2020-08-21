const next      = require("next")
const path      = require("path")
const express   = require("express")
const LRUCache  = require("lru-cache")
const routes    = require("./routes")

const app = next({
  dev: process.env.NODE_ENV !== "production"
})

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24 // 24hour
})

const handler = routes.getRequestHandler(app)

const renderAndCache = (req, res) => {
  if (ssrCache.has(req.url)) {
    return res.send(ssrCache.get(req.url))
  } // Match route + parse params

  const { route, params } = routes.match(req.url)

  if (!route) {
    return handler(req, res)
  }

  app
    .renderToHTML(req, res, route.page, params)
    .then(html => {
      ssrCache.set(req.url, html)
      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, route.page, params)
    })
}

app.prepare().then(() => {
  const server = express()
  const port = process.env.PORT || 8080

  server.use(renderAndCache).listen(port, error => {
    if (error) {
      throw error
    }

    console.log(`> Ready on port ${port}...`)
  })
})