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
    console.log(req.body)
    const {name, universe, superPower, img, nemesis} = req.body
    const newSuperHero = {
      name,
      universe,
      superPower,
      nemesis,
      img
    }
    console.log(newSuperHero)

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

Router.route('/api/superheroes/:heroId')
  .put((req, res) => {
    const heroId = req.params.heroId
    SuperHero.findById({ _id: heroId }, (err, hero) => {
      if (err) {
        res.json({ msg: err })
      } else {
        hero.name = req.body.name ? req.body.name : hero.name
        hero.img = req.body.img ? req.body.img : hero.img
        hero.superPower = req.body.superPower ? req.body.superPower : hero.superPower
        hero.nemesis = req.body.nemesis ? req.body.nemesis : hero.nemesis
        hero.universe = req.body.universe ? req.body.universe : hero.universe

        hero.save((err, updatedHero) => {
          if (err) {
            console.log('ERROR SAVING HERO', err)
            res.json({error: err})
          } else {
            res.json({ msg: 'SUCCESS', data: updatedHero })
          }
        })
      }
    })
  })

module.exports = Router
