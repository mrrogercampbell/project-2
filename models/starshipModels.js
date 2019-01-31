const mongoose = require('../models/appModel')

const StarshipSchema = new mongoose.Schema({
	name: String,
	registry: String,
	status: String,
	dateStatus: String,
	spacecraftClass: String,
	rankingOfficers:{
        // This info should come from the user model
		name: {
            firstName: String,
            lastName: String,
        },
        ranks: String,
    },
    photos: String,
    // This info should come from the user model
})

mongoose.model('Starship', StarshipSchema)


module.exports = mongoose