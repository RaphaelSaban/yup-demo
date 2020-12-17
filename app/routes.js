const getMessages = require("./entrypoints/get_messages");
const addMessage = require("./entrypoints/add_message");

module.exports = [
  { method: "get", path: "/messages", entrypoint: getMessages },
  { method: "post", path: "/message", entrypoint: addMessage },
];
