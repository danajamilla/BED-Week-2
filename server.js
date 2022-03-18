const express = require('express')
const app = express()
const port = process.env.PORT || 3007

app.set("view engine", "ejs")

/* hij refereert hier naar de const */
app.get('/', (req, res) => {
  const honden = [{
    naam:"Sammie",
    beschrijving:"2-jarige Labra Doodle die graag buiten is!"
  }
  // {
  //   naam:"Lilo",
  //   beschrijving:"5-jarige Corgi, gek op het bos"
  // }
];

  res.render('index', { honden: honden })
});

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