const { DataTypes } = require('sequelize');
const sequelize = require('../DataBase/dbConfig');
const Account = require('./AccountModel');
const CustomerAddress = require('./CustomerAddress');

const Customer = sequelize.define('customer', {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  birthdate: {
    type: DataTypes.DATE,
  },
})

// one to many relationship
Customer.hasMany(Account);
Account.belongsTo(Customer);

// one to many relationship
Customer.hasMany(CustomerAddress);
CustomerAddress.belongsTo(Customer);


module.exports = Customer;
