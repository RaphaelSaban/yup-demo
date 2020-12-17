//Message
// {
//   "content": "Hello World!",
//   "user_id": 12345,
//   "chat_id": 12345,
//   "created_at": timestamp,
// }

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../db");

class Message extends Model {
  toJSON() {
    const plain = this.get({ plain: true });
    return {
      ...plain,
    };
  }
}
Message.init(
  {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    chat_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "message",
    // Use Postgresql standards
    // paranoid: true,
    underscored: true,
  }
);

module.exports = Message;
