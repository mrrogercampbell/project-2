const mongooseUser = require('../models/userModels')
const mongooseStarship = require('../models/starshipModels')
// const seeds = require('./seedData')
const userSeeds = require('./userSeedData')
const starshipSeeds = require('./starshipSeedData')

const User = mongooseUser.model('userModels', User)
const Starship = mongooseStarship.model('starshipModels', Starship)

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
