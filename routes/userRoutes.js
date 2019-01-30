const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')


router.get('/', userController.index)

router.get('/new', userController.new)

router.post('/', userController.create)

// router.get('/:id', userController.show)

// router.get('/:id/edit', userController.edit)

// router.put('/:id', userController.update)

// router.get('/:id', userController.destroy)



module.exports = router