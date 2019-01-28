const express = require('express')
const router = express.Router()
const missionController = require('../controllers/userControllers')
//Need to create DB dir before bring this online
// const mongoose = require('../db/connection')


router.get('/', missionController.index)

router.get('/new', missionController.new)

router.post('/', missionController.create)

router.get('/:id', missionController.show)

router.get('/:id/edit', missionController.edit)

router.put('/:id', missionController.update)

router.get('/:id', missionController.destroy)



module.exports = router