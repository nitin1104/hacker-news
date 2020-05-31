import path from 'path'
import fs from 'fs'

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import axios from 'axios';
import App from '../src/App'
import { configureStore } from '../src/redux/store';
import {Provider} from 'react-redux';

const PORT = process.env.PORT || 3100
const app = express()
const router = express.Router()
const store = configureStore();

const serverRenderer = (req, res, next) => {
  axios.get('https://hn.algolia.com/api/v1/search', {params: req.query})
    .then(news => {
      fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return res.status(500).send('An error occurred')
        }
        store.dispatch({
          type: 'FETCH_NEWS',
          payload: news.data
        })
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<Provider store={store}><App/></Provider>)}</div>`,
          ).replace(
            '<script id="news-data"></script>',
            `<script id="news-data">window.newsData=${JSON.stringify(store.getState())}</script>`
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