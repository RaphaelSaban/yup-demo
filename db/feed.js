const sequelize = require("./index");
const Message = require("../app/models/message");

// Feed some data
(async function () {
  await Message.create({
    content: "Hi Mr.",
    user_id: "123e4567-e89b-12d3-a456-426614174001",
    chat_id: "123e4567-e89b-12d3-a456-426614174000",
  });
  await Message.create({
    content: "Hi Jenny. How can I help you today?",
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    chat_id: "123e4567-e89b-12d3-a456-426614174000",
  });
  sequelize.close();
})();
