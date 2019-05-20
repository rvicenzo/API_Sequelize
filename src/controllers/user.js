const bcrypt = require('bcryptjs')
const model = require('../models/index')

const find = (req, res, next) => {
	model.User.findAll({})
		.then(response => res.json({
			error: false,
			data: response
		}))
		.catch(error => res.json({
			error,
			data: []			
		}))
}


const create = (req, res, next) => {
    
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

const update = (req, res, next) => {
 
    const id = req.params.id
    const { name, email, password } = req.body
 
    model.User.update({            
            name,
            email,
            password
        }, {
            where: {
                id
            }
        })
        .then(response => res.json({
            error: false,
            data: response,
            message: 'Usuário atualizado com sucesso'
        }))
        .catch(error => res.json({
            error
        }))
}

const remove = (req, res, next) => {
 
    const id = req.params.id
 
    model.User.destroy({
            where: {
                id
            }
        })
        .then(response => res.json({
            error: false,
            data: response,
            message: 'Usuário removido com sucesso'
        }))
        .catch(error => res.json({
            error
        }))
}

module.exports = { 
    find,
    create,
    update,
    remove 
}