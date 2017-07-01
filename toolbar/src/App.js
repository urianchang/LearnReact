import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

class Toolbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><span><a href="#"><img src= { logo } className="App-logo" /></a></span></li>
          <li><span><DashboardMenu /></span></li>
          <li><span><a href="#">Analysis</a></span></li>
          <li><span><a href="#">Data</a></span></li>
          <li><span><a href="#">Timeline</a></span></li>
        </ul>
      </div>
    );
  }
}

class DashboardMenu extends Component {
  render() {
    return (
      <ul>
        <li>hi</li>
        <li>bye</li>
      </ul>
    );
  }
}

export default App;
