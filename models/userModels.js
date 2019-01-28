const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    photo: String,
    name: {
        firstName: String,
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

mongoose.model('User', UserSchema)


module.exports = mongoose