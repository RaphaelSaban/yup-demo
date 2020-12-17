import { Fragment } from "react";
import { Message } from "./Message";

export default function Messages({ messages, users }) {
  return (
    <Fragment>
      {messages.map((message) => (
        <Message key={message.id} message={message} users={users} />
      ))}
    </Fragment>
  );
}
