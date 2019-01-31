const mongoose = require('../models/starshipModels')
const seeds = require('./starshipSeedData')

const Starship = mongoose.model('starshipModels')

mongoose.Promise = Promise

Starship.remove({}).then(_ => {
  console.log('Dropped the DB')
  Starship.collection.insert(seeds).then(starship => {
    console.log(seeds)
    console.log(starship)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
