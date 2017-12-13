const express = require('express')
const Router = express.Router()
const SuperHero = require('../models/SuperHero')

Router.route('/api/superheroes')
  .get((req, res) => {
    SuperHero.find((err, superheroes) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'Success!', data: superheroes })
      }
    })
  })

Router.route('/api/superheroes')
  .post((req, res) => {
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

Router.route('/api/superheroes/:heroId')
  .get((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({ _id: heroId }, (err, hero) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Success! Hero found', data: hero })
      }
    })
  })

Router.route('/api/superheroes/:heroId')
  .delete((req, res) => {
    const heroId = req.params.heroId
    SuperHero.remove({ _id: heroId }, (err, hero) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Hero deleted!', data: {} })
      }
    })
  })

module.exports = Router
