const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authConfig = require('../config/auth')
const model = require('../models/index')

const login = (req, res, next) => {    
    const { email, password } = req.body
 
    model.User.findOne({            
            email            
        })
        .then(user => {
            if (!user) 
                return res.status(404).send('No user found.')

            let passwordIsValid = bcrypt.compareSync(password, user.password)
            if (!passwordIsValid) 
                return res.status(401).send({ auth: false, token: null })

            let token = jwt.sign({ id: user.id }, authConfig.secret, {
                expiresIn: 86400
            })
            
            return res.json({
                auth: true, 
                token
            })
        })
        .catch(error => res.json({
            error
        }))
}

const logout = (req, res, next) => {    
    return res.status(200).send({ 
        auth: false, 
        token: null 
    })
}

const me = (req, res, next) => {
    const { id } = req.body
    
    model.User.findOne({
            id
        })
        .then(user => {
            return res.json({
                user
            })
        })
        .catch(error => res.json({
            error
        }))

}

module.exports = { 
    login, 
    logout,
    me 
}