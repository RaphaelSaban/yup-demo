import React, { Component } from "react";
export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    return (
      <div style={style}>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button onClick={this.submit}>SEND</button>
      </div>
    );
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ content: value });
  };
  submit = () => {
    const message = {
      content: this.state.content,
      user_id: 1,
    };
    fetch("http://localhost:8000/message", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    this.setState({ content: "" });
  };
}

const style = {
  padding: 8,
  backgroundColor: "#f9f9f9",
  textAlign: "center",
};
