// const mongoose = require('../db/connection')
const mongoose = require('../models/appModel')
const Schema = mongoose.Schema

const Starship = new Schema({
	name: String,
	registry: String,
	status: String,
	dateStatus: String,
	spacecraftClass: {
        name: String,
    }
    // photos: String,
	// rankingOfficers:{
    //     // This info should come from the user model
	// 	name: {
    //         firstName: String,
    //         lastName: String,
    //     },
    //     ranks: String,
    // },
    // This info should come from the user model
})

// mongoose.model('starshipModels', Starship)


// module.exports = mongoose
module.exports = mongoose.model('starshipModels', Starship)