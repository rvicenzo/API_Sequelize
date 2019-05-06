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
server.use('/', middlewares.fn1)
server.use('/api', middlewares.fn2)

server.listen(port, () => console.log(`Running on port: ${port}.`))

module.exports = server