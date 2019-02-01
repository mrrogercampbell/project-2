const express = require('express')
const router = express.Router()
//Need to create DB dir before bring this online
// const mongoose = require('../db/connection')


router.get('/', (req, res)=> {
    res.render("homepage.hbs")
})
router.use('/user', require("./userRoutes"))
router.use('/starship', require("./starshipRoutes"))
router.use('/missionBrief', require("./missionRoutes"))



module.exports = router