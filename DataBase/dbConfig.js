const { Sequelize } = require("sequelize");
const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "postgres",
});

// testConnection.js
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the PostgreSQL database has been established successfully."
    );
  } catch (error) {
    console.error(
      "Unable to connect to the PostgreSQL database:",
      error.message
    );
  } finally {
    // Close the Sequelize connection (optional)
    await sequelize.close();
  }
}

testConnection();

module.exports = sequelize;
