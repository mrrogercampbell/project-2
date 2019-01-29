const mongoose = require('../models/userModels')
const seeds    = require('./seedData')

const User = mongoose.model('userModels')

mongoose.Promise = Promise

User.remove({}).then(_ => {
  console.log('Dropped the DB')
  User.collection.insert(seeds).then(users => {
    console.log(seeds)
    console.log(users)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
