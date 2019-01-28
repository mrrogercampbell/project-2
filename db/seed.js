const mongoose = require('./connection')
const seeds    = require('./seedData')

const User = mongoose.model('User')

mongoose.Promise = Promise

User.remove({}).then(_ => {
  console.log('Dropped the DB')
  User.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
