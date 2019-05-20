const express = require('express')
const router = express.Router()
const userController = require('../controllers/product')
const route = '/api/products'

module.exports = (server) => {
    router.get('/', userController.find)
    router.post('/', userController.create)
    router.put('/:id', userController.update)
    router.delete('/:id', userController.remove)

    server.use(route, router)
}