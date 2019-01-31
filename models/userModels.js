const mongoose = require('../models/appModel')
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
    dayOfBirth: Number,
    dayOfBirth: String,
    gender: String,
    maritalStatus: String,
    serialNumber: String,
})

mongoose.model('userModels', User)

module.exports = mongoose
