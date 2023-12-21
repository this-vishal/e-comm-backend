const { addCategory } = require('../Controllers/Category.js')

const routes = require('express').Router()

routes.post('', addCategory)

module.exports = routes
