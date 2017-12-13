const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VillainSchema = new Schema({
  name: String,
  universe: String,
  superPower: String,
  img: String,
  nemasis: String
})

module.exports = mongoose.model('Villain', VillainSchema)
