const { prettyDate } = require("../helpers/date.js");
// TODO: import a service instead of importing directly the model
const Message = require("../models/message");

module.exports = async function (request, response) {
  console.log("[", prettyDate(Date.now()), "] Received POST /message");
  const message = request.body;
  console.log("RECEIVED", message);

  // Save to database
  // TODO: remove await and push OK status when saved
  // get user_id from current session, not from the client
  await Message.create({
    content: message.content,
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    chat_id: "123e4567-e89b-12d3-a456-426614174000",
  });

  response.sendStatus(200);
};
