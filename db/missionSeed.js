const mongooseUser = require('../models/missionBriefModels')

// const seeds = require('./seedData')
const missionSeeds = require('./missionSeedData')


const MissionBrief = mongoose.model('MissionBrief')


mongoose.Promise = Promise

missionSeeds.remove({}).then(_ => {
  console.log('Dropped the DB')
  MissionBrief.collection.insert(missionSeeds).then(users => {
    console.log(missionSeeds)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
})
