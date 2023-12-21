const { DataTypes } = require('sequelize');
const sequelize = require('../DataBase/dbConfig');


const Account = sequelize.define('account', {
    account_no: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    account_holder: {
        type: DataTypes.STRING,
    },
    account_type: {
        type: DataTypes.STRING,
        unique: true
    },
    bank_name: {
        type: DataTypes.STRING
    },
})


module.exports = Account;
