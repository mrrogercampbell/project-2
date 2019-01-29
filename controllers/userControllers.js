const mongoose = require('mongoose')
const userModels = require("../models/userModels")

//Need to create DB dir before bring this online
// mongoose.connect('mongodb://localhost/review')

mongoose.Promise = Promise


// const UserSchema = mongoose.model('User', UserSchema)


module.exports = {
    // (GET Request) List all items of Users
    index: (req, res) => {
            res.send("We in this bitch!")
            // userModels.find({}).then(result => {
            //     res.json(result)
            // })
        },

    // new: () => {
    //     //(GET Request) Render form to create a new instance of user
    //     (req, res) => {
    //         UserSchema.findOne({title: req.params.title})
    //             .then(result => {
    //                 res.json(result)
    //         })
    //     }
    // },

    // create: () => {
    //     //(POST Request) Create new user in the database
    //     (req, res) => {
    //         UserSchema.create(req.body).then(result => {
    //             res.json(result)
    //         })
    //     }
    // },

    // show: () => {
    //     //(GET Request) Show a single user
    //     (req, res) => {
    //         UserSchema.findOne({name: req.params.name}).then((results) => {
    //             console.log(results)
    //             res.send(results)
    //         })
    //     }
    // },

    // edit: () => {
    //     // (GET Request) Render form to update a single user
    //     (req, res) => {
           
    //     }
    // },

    // update: () => {
    //     (req, res) => {
    //         // (PUT Request) Update resource in the database
    //         UserSchema.findOneAndUpdate({title: req.params.title}, req.body).then(result => {
    //             res.json(result)
    //         })
    //     }
    // },

    // destroy: () => {
    //     //(DELETE Request) Delete a resource
    //     (req, res) => {
    //         UserSchema.findOneAndRemove({title: req.params.title}).then(result => {
    //             releaseEvents.json(result)
    //         })
    //     }
    // }
}