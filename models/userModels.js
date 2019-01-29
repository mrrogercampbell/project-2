const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    photo: String,
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    rank: String,
    placeOfBirth: String,
    yearOfBirth: String,
    monthOfBirth: String,
    dayOfBirth: String,
    gender: String,
    maritalStatus: String,
    serialNumber: String,
})




module.exports = mongoose.model('userModels', User)

