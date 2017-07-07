import React, { Component } from 'react';
import logo from '../logo.svg';
import './toolbarControl.css';
import DropdownControl from './dropdownControl'

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

export default ToolbarControl;
