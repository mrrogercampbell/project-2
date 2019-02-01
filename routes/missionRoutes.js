const express = require('express')
const router = express.Router()
const missionController = require('../controllers/missionControllers')

router.get('/', missionController.index)

router.get('/new', missionController.new)

router.post('/', missionController.create)

router.get('/:id', missionController.showOne)

router.get('/:id/edit', missionController.edit)

router.put('/:id', missionController.update)

router.delete('/:id', missionController.delete)



module.exports = router