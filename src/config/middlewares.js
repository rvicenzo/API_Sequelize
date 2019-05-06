const fn1 = (req, res, next) => {
    console.log('Middleware fn1')
    next()
}

const fn2 = (req, res, next) => {
    console.log('Middleware fn2')
    next()
}

module.exports = { fn1, fn2 }