import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default class SignInForm extends Component {

  constructor(props) {
    super(props); //calling the parent method of Component

    this.state = {term: ''}; //initializing state
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    if (e && e.target) {
      this.setState({username: e.target.value})
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.username);
  }

  render() {
    const {submit, username} = this.props;

    if (username) {
      return (
        <div>
          <h2>Welcome to the chat group, {username}</h2>
        </div>
      );
    }

    return (
        <div>
          <form onSubmit={this.onSubmit}>
            <h2>Enter your username here</h2>
            <input placeholder="Enter your username"
                   value={this.state.username}
                   onChange={this.onInputChange}
                   className="chat-input-box"/>
            <button className="btn btn-primary chat-submit-button">Submit</button>
          </form>
        </div>
      )
    }
}