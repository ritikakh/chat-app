import React, { Component } from 'react';
import MessageToolInput from "./message-tool-input.connect";

export default class MessageTool extends Component {
  render() {
    const {messages, username} = this.props;
    if (!username) {
      return null;
    }

    return (
      <div>
        <div className="message-screen">
          {messages.map((message, index) => {
            return (
              <ol key={index} className="message-screen-text">
                <span className="message-username">{message.username}</span> -
                <span className="message-message">&nbsp; {message.message}</span>
              </ol>
          )
          })}
        </div>
        <MessageToolInput />
      </div>
    )
  }

}