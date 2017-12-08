const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__superhero_DB__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/superheroes', (req, res) => {
  const {name, universe, superPower, img, nemesis} = req.body
  const newSuperHero = {
    name,
    universe,
    superPower,
    nemesis,
    img
  }

  SuperHero(newSuperHero).save((err, hero) => {
    if (err) {
      res.json({ msg: err })
    } else {
      res.json({ msg: 'Success', data: hero })
    }
  })
})

app.get('/api/superheroes', (req, res) => {
  SuperHero.find((err, superheroes) => {
    if (err) {
      res.json({ error: err })
    } else {
      res.json({ msg: 'Success!', data: superheroes })
    }
  })
})

app.get('/api/superheroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.findById({ _id: heroId }, (err, hero) => {
    if (err) {
      res.json({ msg: err })
    } else {
      res.json({ msg: 'Success! Hero found', data: hero })
    }
  })
})

app.delete('/api/superheroes/:heroId', (req, res) => {
  const heroId = req.params.heroId
  SuperHero.remove({ _id: heroId }, (err, hero) => {
    if (err) {
      res.json({ msg: err })
    } else {
      res.json({ msg: 'Hero deleted!', data: {} })
    }
  })
})
const server = app.listen(port, () => console.log(` 🎾 Running on port: ${port} 🎾 `))

module.exports = server
