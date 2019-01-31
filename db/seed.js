const mongoose = require('../models/appModel')
// const seeds = require('./seedData')
const userSeeds = require('./userSeedData')
const starshipSeeds = require('./starshipSeedData')

const User = mongoose.model('userModels', User)
const Starship = mongoose.model('starshipModels', Starship)

mongoose.Promise = Promise

User.remove({}).then(_ => {
  console.log('Dropped the DB')
  User.collection.insert(userSeeds).then(users => {
    console.log(userSeeds)
    console.log(users)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})

Starship.remove({}).then(_ => {
  console.log('Dropped the DB')
  Starship.collection.insert(starshipSeeds).then(starship => {
    console.log(starshipSeeds)
    console.log(starship)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
