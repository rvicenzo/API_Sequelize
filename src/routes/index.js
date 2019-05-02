const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

module.exports = (server) => {
    fs
        .readdirSync(__dirname)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
        })
        .forEach(file => {            
            file = file.substr(0,file.indexOf('.'))
            require(`./${file}`)(server)
        })
}