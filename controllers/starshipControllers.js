const mongoose = require('../models/starshipModels')
const Starship = mongoose.model('starshipModels')

mongoose.connect('mongodb://localhost/sof')

mongoose.Promise = Promise

module.exports = {
    // (GET Request) List all Users
    index: (req, res) => {
        Starship.find({})
        .then(starships => {
            res.render("starshipViews/starshipIndex", { starships });
          })
    },
    //(GET Request) Render newUserform.hbs
    new: (req, res) => {
        res.render('starshipViews/newStarshipForm')
    },
    // //(POST Request) Create new user in the database
    create: (req, res) => {
            Starship.create({
                name: req.body.name,
                registry: req.body.registry,
                status: req.body.status,
                dateStatus: req.body.dateStatus,
                spacecraftClass: req.body.spacecraftClass,
            }).then(newSpaceship => {
                console.log(`Hey Check Out the New User ${newSpaceship}`)
                // res.redirect('/success')
                res.render('starshipViews/starshipIndex')
            })
        },
    // //(GET Request) Render newUserSuccessPage.hbs
    // When you create this have it forward to the newly created starships single view
    // success: (req, res) => {
    //     res.render('userViews/newUserSuccessPage')
    // },
    // // (GET Request) Render a View to Show one User Profile
    showOne: (req, res)=> {
        Starship.findOne({_id: req.params.id})
        .then(ship => {
            res.render("starshipViews/singleStarshipView", { ship });
          })
    },
    // //(DELETE Request) Delete a User Profile
    delete: (req, res) => {
    Starship.findOneAndRemove({_id: req.params.id})
        .then( (user) => {
            // res.redirect('/')
            // console.log(result)
            // releaseEvents.json(result)
            res.render('starshipViews/DeleteStarshipSuccessPage', { _id: req.params.id})
        })
    },
    
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