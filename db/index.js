const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env["DATABASE_URL"]);

module.exports = sequelize;

// Test connection
(async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
