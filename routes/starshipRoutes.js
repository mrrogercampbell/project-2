const express = require('express')
const router = express.Router()
const starShipController = require('../controllers/starshipControllers')


router.get('/', starShipController.index)

router.get('/new', starShipController.new)

router.post('/', starShipController.create)

router.get('/:id', starShipController.showOne)

// router.get('/:id/edit', starShipController.edit)

// router.put('/:id', starShipController.update)

// router.get('/:id', starShipController.destroy)



module.exports = router