import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios'
import App from '../src/App'

const PORT = process.env.PORT || 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  axios.get('http://hn.algolia.com/api/v1/search?')
    .then(news => {
      fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return res.status(500).send('An error occurred')
        }
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<App news={news.data}/>)}</div>`,
          ).replace(
            '<script id="news-data"></script>',
            `<script id="news-data">window.newsData=${JSON.stringify(news.data)}</script>`
          )
        )
    })
    })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})