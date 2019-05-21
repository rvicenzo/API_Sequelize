module.exports = (req, res, next) => {    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST , OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    
    //intercepts OPTIONS method
    if (req.method === 'OPTIONS') {        
        return res.sendStatus(200)
    }else {
        next()
    }    
}