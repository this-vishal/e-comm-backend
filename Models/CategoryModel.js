const { DataTypes } = require('sequelize')
const sequelize = require('../DataBase/dbConfig')

const Category = sequelize.define('Category', {
  categoryTitle: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Category
