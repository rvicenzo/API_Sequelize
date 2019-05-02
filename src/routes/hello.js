const express = require('express')
const router = express.Router()
const indexController = require('../controllers/hello')
const route = '/'

module.exports = (server) => {
    router.get('/', indexController.index)

    server.use(route, router)
}