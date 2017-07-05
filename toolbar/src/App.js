import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToolbarControl />
      </div>
    );
  }
}

// <ul>
//   <li><a href="#"><img src= { logo } className="App-logo" /></a></li>
//   <li><DashboardMenu /></li>
//   <li><TLink url="#" title="A" /></li>
//   <li><TLink url="#" title="B" /></li>
//   <li><TLink url="#" title="C" /></li>
// </ul>

class ToolbarControl extends Component {

  constructor() {
    super();
    this.state = {isSlideOut: false};
    this.slide = this.slide.bind(this); //: Need to check to why we must 'bind'
  }

  slide() {
    let s = !this.state.isSlideOut;
    this.setState({
      isSlideOut: s
    });
  }

  render() {
    const isSlideOut = this.state.isSlideOut;

    let toolbar = null;
    if (isSlideOut) {
      toolbar = <h1>opened</h1>;
    } else {
      toolbar = <h1>closed</h1>;
    }

    return (
      <div className="toolbar">
        <img src={logo} className="App-logo" alt="logo" onClick={this.slide}/>
        {toolbar}
      </div>
    );
  }
}


export default App;
