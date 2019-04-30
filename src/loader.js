const server = require('./config/server')
const alias = '/api'

//Default
const indexRouter = require('./routes/index')
server.use('/', indexRouter)

//Users Routers
const usersRouter = require('./routes/users')
server.use(`${alias}/users`, usersRouter)