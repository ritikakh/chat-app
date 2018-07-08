import React, { Component } from 'react';
import './App.css';
import SignInForm from './components/sign-in-form.connect';
import MessageTool from "./components/message-tool.connect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Chat Tool</h1>
        </header>
        <SignInForm />
        <MessageTool />
      </div>
    );
  }
}

export default App;
