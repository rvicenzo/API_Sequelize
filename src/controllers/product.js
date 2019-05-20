const model = require('../models/index')

const all = (req, res, next) => {
	model.Product.findAll({})
		.then(response => res.json({
			error: false,
			data: response
		}))
		.catch(error => res.json({
			error,
			data: []			
		}))
}

const find = (req, res, next) => {
    const id = req.params.id

	model.Product.findOne({
            id            
        })
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
    
    const { title, description, price } = req.body
    
	model.Product.create({
			title,
			description,
			price
		})
		.then(response => res.status(201).json({
			error: false,
			data: response,
			message: "Produto cadastrado com sucesso"
		}))
		.catch(error => res.json({
			error,
			data: []			
		}))
}

const update = (req, res, next) => {
 
    const id = req.params.id
    const { title, description, price } = req.body
 
    model.Product.update({            
            title,
            description,
            price
        }, {
            where: {
                id
            }
        })
        .then(response => res.json({
            error: false,
            data: response,
            message: 'Produto atualizado com sucesso'
        }))
        .catch(error => res.json({
            error
        }))
}

const remove = (req, res, next) => {
 
    const id = req.params.id
 
    model.Product.destroy({
            where: {
                id
            }
        })
        .then(response => res.json({
            error: false,
            data: response,
            message: 'Produto removido com sucesso'
        }))
        .catch(error => res.json({
            error
        }))
}

module.exports = { 
    all,
    find,
    create,
    update,
    remove 
}