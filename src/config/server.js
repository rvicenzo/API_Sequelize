const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')
const middlewares = require('./middlewares')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)

//Apply middleware
server.use('/api', middlewares.verifyToken)
server.use('/auth/me', middlewares.me)

server.listen(port, () => console.log(`Running on port: ${port}.`))

module.exports = server