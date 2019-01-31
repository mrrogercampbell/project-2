const express = require('express')
const router = express.Router()
const starShipController = require('../controllers/starshipControllers')


router.get('/', starShipController.index)

router.get('/new', starShipController.new)

router.post('/', starShipController.create)

router.get('/:id', starShipController.showOne)

router.delete('/:id', starShipController.delete)

router.get('/:id/edit', starShipController.edit)

router.put('/:id', starShipController.update)




module.exports = router