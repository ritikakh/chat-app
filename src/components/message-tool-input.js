import React, { Component } from 'react';

export default class MessageToolInput extends Component {

  constructor(props) {
    super(props);
    this.state = {userMessage: ""};

    this.onSubmit = this.onSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {
      if(e && e.target) {
        this.setState({
          userMessage: e.target.value
        })
    }
  }

  onSubmit(e) {
    const {handleSubmit} = this.props;
    const {userMessage} = this.state;
    handleSubmit(userMessage);
    this.setState({
      userMessage: ""
    })
  }

  render() {
    const {userMessage} = this.state;
    return (
      <div className="message-tool-input-div">
        <input className="message-tool-input"
               value={userMessage}
               placeholder="Your message here"
               onChange={this.inputChange}
        />
        <button className="btn btn-primary send-button" onClick={this.onSubmit}>Send</button>
      </div>
    )
  }
}