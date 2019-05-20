const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const authConfig = require('../config/auth')
const model = require('../models/index')

const register = (req, res, next) => {
    const { name, email, password } = req.body

    let hashedPassword = bcrypt.hashSync(password, 8)
    
	model.User.create({
			name,
			email,
			password: hashedPassword
		})
		.then(response => res.status(201).json({
			error: false,
			data: response,
			message: "Usuário criado com sucesso"
		}))
		.catch(error => res.json({
			error,
			data: []			
		}))
}

const login = (req, res, next) => {    
    const { email, password } = req.query    
 
    model.User.findOne({ 
            where: {
                email
            } 
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
    req.userId = null
        
    return res.status(200).send({ 
        auth: false, 
        token: null 
    })
}

const me = (req, res, next) => {
    const { id } = req.params
    
    model.User.findOne({
            where: {
                id
            }            
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
    register,
    login, 
    logout,
    me 
}