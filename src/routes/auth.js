const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const route = '/auth'

module.exports = (server) => {
    router.get('/login', authController.login)
    router.get('/logout', authController.logout)
    router.get('/me', authController.me)

    server.use(route, router)
}