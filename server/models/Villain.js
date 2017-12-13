const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VillainSchema = new Schema({
  name: String,
  universe: String,
  superPower: String,
  img: String,
  nemesis: String
})

module.exports = mongoose.model('Villain', VillainSchema)
