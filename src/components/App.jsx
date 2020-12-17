import React, { Component } from "react";
import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  async componentDidMount() {
    const response = await fetch("http://localhost:8000/messages");
    const messages = await response.json();
    this.setState({ messages });
  }
  render() {
    const { messages } = this.state;
    const users = {
      "123e4567-e89b-12d3-a456-426614174000": { name: "MR. SMITH" },
      "123e4567-e89b-12d3-a456-426614174001": { name: "Jenny Student" },
    };
    return (
      <div style={style}>
        <Header username="MR. SMITH" status="Online" />
        <Messages messages={messages} users={users} />
        <MessageInput />
      </div>
    );
  }
}

const style = {
  width: 320,
  padding: 8,
  backgroundColor: "#e8e8e8",
};
