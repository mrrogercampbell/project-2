const mongoose = require('../models/userModels')
const Schema = mongoose.Schema

const Starship = new Schema({
	name: String,
	registry: String,
	status: String,
	dateStatus: String,
	spacecraftClass: {
        name: String,
    },
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

mongoose.model('starshipModels', Starship)


module.exports = mongoose