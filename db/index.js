const { Sequelize } = require("sequelize");

if (!process.env["DATABASE_URL"]) {
  console.error(
    'No database set. Please run `export DATABASE_URL="<your local db>"`'
  );
  process.exit(-1);
}

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
