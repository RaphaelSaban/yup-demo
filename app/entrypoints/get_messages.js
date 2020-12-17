const { prettyDate } = require("../helpers/date.js");
// TODO: import a service instead of importing directly the model
const Message = require("../models/message");

module.exports = async function (request, response) {
  console.log("[", prettyDate(Date.now()), "] Received GET /");
  const messages = await Message.findAll({
    order: [["created_at", "ASC"]],
  });
  //response.sendStatus(200);
  response.json(messages.map((message) => message.toJSON()));
};
