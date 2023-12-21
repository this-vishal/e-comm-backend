const {
  addProducts,
  getAllProducts,
  getProductById,
  deleteProductById,
  deleteAllProducts,
  updateProductById
} = require('../Controllers/Product')

const routes = require('express').Router()

routes.post('/', addProducts)

routes.get('/', getAllProducts)

routes.get('/:id', getProductById)

routes.delete('/:id', deleteProductById)

routes.delete('/', deleteAllProducts)

routes.put('/:id', updateProductById)

module.exports = routes
