const sequelize = require("./index");
const Message = require("../app/models/message");
(async function () {
  // await Message.destroy({ truncate: true, cascade: false });
  await Message.drop();
  await Message.sync();
  sequelize.close();
})();
