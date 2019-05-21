const jwt = require('jsonwebtoken')
const authConfig = require('./auth')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']        
    if (!token)
        return res.status(403).send({ 
            auth: false, 
            message: 'No token provided.' 
        })

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err)
            return res.status(500).send({ 
                auth: false, 
                message: 'Failed to authenticate token.' 
            })
        
        req.userId = decoded.id
        next()
    })    
}

/*const me = (req, res, next) => {        
    if(req.userId !== req.params.id)
        return res.status(404).send('You do not have permission.')
    
    next()
}*/

module.exports = { verifyToken }