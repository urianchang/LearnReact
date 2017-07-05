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

class ToolbarControl extends Component {
  constructor() {
    super();
    this.state = {isSlideOut: false};
    this.slide = this.slide.bind(this); //: Need to check to why we must 'bind'
  }
  slide() {
    let s = !this.state.isSlideOut;
    this.setState({ isSlideOut: s });
  }
  render() {
    const isSlideOut = this.state.isSlideOut;
    // let toolbar = null;
    // if (isSlideOut) {
    //   toolbar = <h1>opened</h1>;
    // } else {
    //   toolbar = <h1>closed</h1>;
    // }
    return (
      <div className="toolbar">
        <img src={logo} className="App-logo" alt="logo" onClick={this.slide}/>
        <Toolbar isSlideOut={isSlideOut} />
      </div>
    );
  }
}

function Toolbar(props) {
  const isSlideOut = props.isSlideOut;
  if (isSlideOut) {
    return <OpenedToolbar />;
  } else {
    return <ClosedToolbar />;
  }
}

function OpenedToolbar() {
  return (
    <div className="toolbar-content">
      <DropdownControl />
      <ul>
        <li><a href="#">A</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">C</a></li>
      </ul>
    </div>
  );
}

function ClosedToolbar() {
  return (<div></div>);
}

class DropdownControl extends Component {
  constructor() {
    super();
    this.state = {isDropdownOpen: false};
    this.dropIt = this.dropIt.bind(this);
  }
  dropIt() {
    let d = !this.state.isDropdownOpen;
    this.setState({ isDropdownOpen: d });
  }
  render() {
    const isDropdownOpen = this.state.isDropdownOpen;
    // let dropdown = null;
    // if (isDropdownOpen) {
    //   dropdown = <h1>opened</h1>;
    // } else {
    //   dropdown = <h1>closed</h1>;
    // }
    return (
      <div className="dropdown" onClick={this.dropIt}><Dropdown isDropdownOpen={isDropdownOpen}/></div>
    );
  }
}

function Dropdown(props) {
  const isDropdownOpen = props.isDropdownOpen;
  if (isDropdownOpen) {
    return <OpenedDropdown />;
  } else {
    return <ClosedDropdown />;
  }
}

function OpenedDropdown() {
  return (
    <div>
      <p>Opened</p>
      <div className="dropdown-content">
        <a href="#">hello</a>
        <a href="#">bye</a>
      </div>
    </div>
  );
}

function ClosedDropdown() {
  return (
    <div>
      <p>Closed</p>
    </div>
  );
}

export default App;
