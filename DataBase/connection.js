const sequelize = require('./dbConfig')

require('../Models/AccountModel')
require('../Models/CustomerModel')
require('../Models/CategoryModel')
require('../Models/ProductModel')

try {
  sequelize.sync({ force: false, alter: true }).then(() => {
    console.log('Database and tables created!')
  })
} catch (err) {
  console.log(err.message)
}
