export function Message({ message, users }) {
  const { user_id, content } = message;
  const { name } = users[user_id] || { name: "Unknown user" };
  const current_user_id = "123e4567-e89b-12d3-a456-426614174000";
  return (
    <div style={style(user_id === current_user_id)}>
      <div>
        <small>{name}</small>
      </div>
      <div>{content}</div>
    </div>
  );
}

const style = function (isCurrentUser) {
  let bubbleStyle = {
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
  };
  if (isCurrentUser) {
    bubbleStyle = {
      ...bubbleStyle,
      marginLeft: 20,
      backgroundColor: "#DCF8C6", // green
    };
  } else {
    bubbleStyle = {
      ...bubbleStyle,
      marginRight: 20,
      backgroundColor: "white",
    };
  }
  return bubbleStyle;
};
