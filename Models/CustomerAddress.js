const { DataTypes } = require('sequelize');
const sequelize = require('../DataBase/dbConfig');



const CustomerAddress = sequelize.define('Address', {

    city: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    pincode: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING
    }

})

module.exports = CustomerAddress;

