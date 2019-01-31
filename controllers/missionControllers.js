const mongoose = require('../models/missionBriefModels')
const MissionBrief = mongoose.model('MissionBrief')

mongoose.connect('mongodb://localhost/sof')

mongoose.Promise = Promise

module.exports = {
    // (GET Request) List all Users
    index: (req, res) => {
        MissionBrief.find({})
        .then(missionBrief => {
            res.render("missionViews/missionIndex", { missionBrief });
          })
    },
    // //(GET Request) Render newUserform.hbs
    new: (req, res) => {
        res.render('missionViews/newMissionBriefForm')
    },
    // // //(POST Request) Create new user in the database
    create: (req, res) => {
        MissionBrief.create({
            missionTitle: req.body.missionTitle,
            missionLog: req.body.missionLog,
            missionLocated: {
                planetsVisited: req.body.planetsVisited,
            },
            }).then(MissionBrief => {
                // res.redirect('/success')
                res.redirect(`/missionBrief/${MissionBrief.id}`)
            })
        },
    // // //(GET Request) Render newUserSuccessPage.hbs
    // // When you create this have it forward to the newly created starships single view
    // // success: (req, res) => {
    // //     res.render('userViews/newUserSuccessPage')
    // // },
    // // // (GET Request) Render a View to Show one User Profile
    showOne: (req, res)=> {
        MissionBrief.findOne({_id: req.params.id})
        .then(MissionBrief => {
            res.render("missionViews/singleMissionBriefView", { MissionBrief });
          })
    },
    // // //(DELETE Request) Delete a User Profile
    delete: (req, res) => {
        MissionBrief.findOneAndRemove({_id: req.params.id})
            .then( (MissionBrief) => {
                res.redirect(`/missionBrief`)
            })
        },  
    // // // (GET Request) Render form to update a single user
    edit: (req, res) => {
        MissionBrief.findOne({_id: req.params.id})
        .then(MissionBrief => {
            res.render('missionViews/updateMissionBriefForm.hbs', { MissionBrief });
          })
    },
    // // // (PUT Request) Update resource in the database
    update: (req,res) => {
        MissionBrief.findOneAndUpdate({_id: req.params.id},{
            $set: {
                missionTitle: req.body.missionTitle,
                missionLog: req.body.missionLog,
                missionLocated: {
                    planetsVisited: req.body.planetsVisited,
                },
            }
        })
        .then(MissionBrief => {
            res.redirect(`/missionBrief/${MissionBrief.id}`)
            // res.render("starshipViews/singleStarshipView", { starship });
        })
    },
}