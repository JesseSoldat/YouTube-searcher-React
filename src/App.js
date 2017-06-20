import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ApiKey = 'AIzaSyAqATbr65c9EON9JW6nSf5yEiHK-mtpdPg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
