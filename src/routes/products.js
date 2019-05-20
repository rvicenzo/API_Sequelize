const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const route = '/api/products'

module.exports = (server) => {
    router.get('/', productController.all)
    router.get('/:id', productController.find)
    router.post('/', productController.create)
    router.put('/:id', productController.update)
    router.delete('/:id', productController.remove)

    server.use(route, router)
}