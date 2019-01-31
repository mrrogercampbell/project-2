const mongoose = require('mongoose')

const MissionBrief = new mongoose.Schema({
    missionLocated: {
        planetsVisited: String,
    },
    missionNotes: String,
    // Photos: String,
    //This is where you can utilize goodle sky, mars, and moon.
})

mongoose.model('MissionBrief', MissionBrief)


module.exports = mongoose