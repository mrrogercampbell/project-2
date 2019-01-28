const mongoose = require('mongoose')

const MissionBriefSchema = new mongoose.Schema({
    missionLocated: {
        planetsVisited: String,
    },
    missionNotes: String,
    Photos: String,
    //This is where you can utilize goodle sky, mars, and moon.
})

mongoose.model('MissionBrief', MissionBriefSchema)


module.exports = mongoose