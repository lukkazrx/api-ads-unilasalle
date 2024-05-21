const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000 


// Modelo do Banco de dados E validaçao de dados.
// Caso a adiçao de filme nao atenda as exigencias, o programa encerra.
const FilmSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  genere: { type: String, required: true},
  description: { type: String, required: true, minlength: 10 },
  image_url: { type: String, required: false},
  trailer_url: { type: String, required: false},
});
const Film = mongoose.model("Film", FilmSchema);

//CREATE
app.post('/', async (req, res) => {
  const film = new Film ({
    title: req.body.title,
    genere: req.body.genere,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  })
  await film.save()
  return res.send(film)
})

//READ (Todos)
app.get('', async (req, res) => {
  try {
    const films = await Film.find()
    return res.send(films)
  } catch (error) {
    return res.status(500).send({ error: 'Internal Server Error' })
  }
})

//READ (apenas um por ID)
app.get('/:id',async(req, res) => {
  const films = await Film.findById(req.params.id)
  return res.send(films)
})

//UPDATE
app.put('/:id', async(req, res) => {
  const film = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genere: req.body.genere,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  }, {
    new: true
  })
  return res.send(film)
})

//DELETE
app.delete('/:id', async(req, res) =>{
  const film = await Film.findByIdAndDelete(req.params.id)
  return res.send(film)
})

// API 'Ouvindo'
app.listen(port, () => {
  mongoose.connect('mongodb+srv://lucasrnunes2398:bWppS8swII4RbaMk@api-ads-unilasalle.0qwwjov.mongodb.net/?retryWrites=true&w=majority&appName=api-ads-unilasalle');
  console.log('✔️ API Iniciada')
})

