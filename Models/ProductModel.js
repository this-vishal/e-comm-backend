const { DataTypes } = require('sequelize')
const sequelize = require('../DataBase/dbConfig')
const Category = require('./CategoryModel')

const Product = sequelize.define('Product', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
})

Product.belongsTo(Category, {
  foreignKey: 'categoryId'
})
// Category.belongsTo(Product);

module.exports = Product
