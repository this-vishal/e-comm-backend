const sequelize = require('./dbConfig');

require('../Models/AccountModel');
require('../Models/CustomerModel');

try {
    sequelize.sync({ force: true }).then(() => {
        console.log('Database and tables created!');
    });

}
catch (err) {
    console.log(err.message);
}






