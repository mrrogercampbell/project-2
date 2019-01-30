// const mongoose = require('mongoose')
// const mongoose = require('../db/connection')
const mongoose = require('../models/userModels')
// const User = require('../models/userModels')
const User = mongoose.model('userModels')

//Need to create DB dir before bring this online
mongoose.connect('mongodb://localhost/sof')

mongoose.Promise = Promise



// const UserSchema = mongoose.model('User', UserSchema)


module.exports = {
    // (GET Request) List all items of Users
    index: (req, res) => {
        User.find({})
        // .sort({ createdAt: -1 })
        // .populate('title')
        // .populate('author')
        .then(users => {
            res.render("userViews/usersIndex", { users });
          })
        // .catch(err => console.log(err))
    },
    //(GET Request) Render newUserform.hbs
    new: (req, res) => {
        res.render('userViews/newUserForm')
    },
    //(POST Request) Create new user in the database
    create: (req, res) => {
            User.create({
                name: {
                    firstName:      req.body.firstName,
                    middleName:     req.body.middleName,
                    lastName:       req.body.lastName,
                    // serialNumber: req.body.serialNumber,
                },
                rank:           req.body.rank,
                placeOfBirth:   req.body.placeOfBirth,
                yearOfBirth:    req.body.yearOfBirth,
                monthOfBirth:   req.body.monthOfBirth,
                dayOfBirth:     req.body.dayOfBirth,
                gender:         req.body.gender,
                maritalStatus:  req.body.maritalStatus,
            }).then(newUser => {
                console.log(`Hey Check Out the New User ${newUser}`)
                // res.redirect('/success')
                res.render('userViews/newUserSuccessPage')
            })
        },
    //(GET Request) Render newUserSuccessPage.hbs
    success: (req, res) => {
        res.render('userViews/newUserSuccessPage')
    },
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