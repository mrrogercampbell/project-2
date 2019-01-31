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
    // (GET Request) List all Users
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
    // (GET Request) Render a View to Show one User Profile
    showOne: (req, res)=> {
        User.findOne({_id: req.params.id})
        .then(user => {
            res.render("userViews/singleUserView", { user });
          })
    },
    //(DELETE Request) Delete a User Profile
    delete: (req, res) => {
    User.findOneAndRemove({_id: req.params.id})
        .then( (user) => {
            // res.redirect('/')
            // console.log(result)
            // releaseEvents.json(result)
            res.render('userViews/newUserSuccessPage', { _id: req.params.id})
        })
    },
    
    // (GET Request) Render form to update a single user
    edit: (req, res) => {
        User.findOne({_id: req.params.id})
        .then(user => {
            res.render('userviews/updateUserForm', { user });
          })
    },
    // (PUT Request) Update resource in the database
    update: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body)
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
            maritalStatus:  req.body.maritalStatus,})
        .then(user => {
            res.render("userViews/singleUserView", { user });
        })
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


    // 

}