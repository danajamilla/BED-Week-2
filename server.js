const express = require('express')
const app = express()
const port = process.env.PORT || 3007

//database
const dotenv = require('dotenv').config();
const {MongoClient} = require('mongodb');

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

//middleware (wordt tussen sessies uitgevoerd, als je pagina wordt geladen wordt eerst middleware geladen)
// app.use(express.public("public"))
app.use(express.static(__dirname + '/public'));



app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
  
  connectDB().then( () => console.log( "We have a connection to mongo" )); //runt de functie database, gevonden? dan doet hij console log
  
  })
  
  //connect met database
  async function connectDB() {
  
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  });
  
  try {
  
  await client.connect();
  
  db = client.db(process.env.DB_NAME);
  
  } catch (error) {
  
  throw error;
  
  }
  
  }