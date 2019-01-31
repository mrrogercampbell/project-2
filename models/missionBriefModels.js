const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const MissionBrief = Schema({
    missionTitle: String,
    missionLog: String,
    missionLocated: {
        planetsVisited: String,
    },
    // Photos: String,
    //This is where you can utilize goodle sky, mars, and moon.
})

mongoose.model('MissionBrief', MissionBrief)


module.exports = mongoose