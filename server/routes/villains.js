const express = require('express')
const Router = express.Router()
const Villain = require('../models/Villain')

Router.route('/api/villains')
  .post((req, res) => {
    const {name, universe, superPower, img, nemesis} = req.body
    const newVillain = {
      name,
      universe,
      superPower,
      nemesis,
      img
    }

    Villain(newVillain).save((err, villain) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Success', data: villain })
      }
    })
  })

Router.route('/api/villains')
  .get((req, res) => {
    Villain.find((err, villains) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Success', data: villains })
      }
    })
  })

Router.route('/api/villains/:villainId')
  .get((req, res) => {
    const villainId = req.params.villainId
    Villain.findById({ _id: villainId }, (err, villain) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Success!', data: villain })
      }
    })
  })

Router.route('/api/villains/:villainId')
  .delete((req, res) => {
    const villainId = req.params.villainId
    Villain.remove({ _id: villainId }, (err, villain) => {
      if (err) {
        res.json({ msg: err })
      } else {
        res.json({ msg: 'Hero deleted!', data: {} })
      }
    })
  })

module.exports = Router

