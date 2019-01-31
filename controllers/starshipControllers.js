const mongoose = require('../models/userModels')
const Starship = mongoose.model('starshipModels')

mongoose.connect('mongodb://localhost/sof')

mongoose.Promise = Promise



module.exports = {
    // (GET Request) List all Users
    index: (req, res) => {
        Starship.find({})
        .then(starships => {
            res.render("userViews/usersIndex", { starships });
          })
    },
    // //(GET Request) Render newUserform.hbs
    // new: (req, res) => {
    //     res.render('userViews/newUserForm')
    // },
    // //(POST Request) Create new user in the database
    // create: (req, res) => {
    //         User.create({
    //             name: {
    //                 firstName:      req.body.firstName,
    //                 middleName:     req.body.middleName,
    //                 lastName:       req.body.lastName,
    //                 // serialNumber: req.body.serialNumber,
    //             },
    //             rank:           req.body.rank,
    //             placeOfBirth:   req.body.placeOfBirth,
    //             yearOfBirth:    req.body.yearOfBirth,
    //             monthOfBirth:   req.body.monthOfBirth,
    //             dayOfBirth:     req.body.dayOfBirth,
    //             gender:         req.body.gender,
    //             maritalStatus:  req.body.maritalStatus,
    //         }).then(newUser => {
    //             console.log(`Hey Check Out the New User ${newUser}`)
    //             // res.redirect('/success')
    //             res.render('userViews/newUserSuccessPage')
    //         })
    //     },
    // //(GET Request) Render newUserSuccessPage.hbs
    // success: (req, res) => {
    //     res.render('userViews/newUserSuccessPage')
    // },
    // // (GET Request) Render a View to Show one User Profile
    // showOne: (req, res)=> {
    //     User.findOne({_id: req.params.id})
    //     .then(user => {
    //         res.render("userViews/singleUserView", { user });
    //       })
    // },
    // //(DELETE Request) Delete a User Profile
    // delete: (req, res) => {
    // User.findOneAndRemove({_id: req.params.id})
    //     .then( (user) => {
    //         // res.redirect('/')
    //         // console.log(result)
    //         // releaseEvents.json(result)
    //         res.render('userViews/newUserSuccessPage', { _id: req.params.id})
    //     })
    // },
    
    // // (GET Request) Render form to update a single user
    // edit: (req, res) => {
    //     User.findOne({_id: req.params.id})
    //     .then(user => {
    //         res.render('userviews/updateUserForm', { user });
    //       })
    // },
    // // (PUT Request) Update resource in the database
    // update: (req, res) => {
    //     User.findOneAndUpdate({_id: req.params.id}, req.body)
    //     User.create({
    //         name: {
    //             firstName:      req.body.firstName,
    //             middleName:     req.body.middleName,
    //             lastName:       req.body.lastName,
    //             // serialNumber: req.body.serialNumber,
    //         },
    //         rank:           req.body.rank,
    //         placeOfBirth:   req.body.placeOfBirth,
    //         yearOfBirth:    req.body.yearOfBirth,
    //         monthOfBirth:   req.body.monthOfBirth,
    //         dayOfBirth:     req.body.dayOfBirth,
    //         gender:         req.body.gender,
    //         maritalStatus:  req.body.maritalStatus,})
    //     .then(user => {
    //         res.render("userViews/singleUserView", { user });
    //     })
    // }
}