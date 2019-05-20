const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const route = '/auth'

module.exports = (server) => {
    router.post('/register', authController.register)
    router.get('/login', authController.login)
    router.get('/logout', authController.logout)
    router.get('/me/:id', authController.me)

    server.use(route, router)
}