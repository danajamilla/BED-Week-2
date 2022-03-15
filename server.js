const express = require('express')
const app = express()
const port = process.env.PORT || 3006

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/matchpagina', (req, res) => {
  res.render('matchpagina')
})

app.get('/weather', (req, res) => {
  res.render('weather')
})

app.get('/chatpagina', (req, res) => {
  res.render('chatpagina')
})

app.get('/index', (req, res) => {
  res.render('index')
})

app.use(express.static("static"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})