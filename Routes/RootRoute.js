const router = require('express').Router()

const ProductRoute = require('../Routes/PruductRoute')
const CategoryRoute = require('../Routes/CategoryRoute')

router.use('/products', ProductRoute)

router.use('/category', CategoryRoute)

module.exports = router
