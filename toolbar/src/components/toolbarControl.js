import React, { Component } from 'react';
import logo from '../logo.svg';
import './toolbarControl.css';
import DropdownControl from './dropdownControl'

class ToolbarControl extends Component {
  constructor() {
    super();
    this.state = {isSlideOut: false};
    this.slide = this.slide.bind(this);
  }
  slide() {
    let s = !this.state.isSlideOut;
    // this.props.navigateTo(); //: works
    this.setState({ isSlideOut: s });
  }
  render() {
    const isSlideOut = this.state.isSlideOut;
    const navigateTo = this.props.navigateTo;
    return (
      <div className="toolbar">
        <img src={logo} className="App-logo" alt="logo" onClick={this.slide}/>
        <Toolbar isSlideOut={isSlideOut} navigateTo={navigateTo} />
      </div>
    );
  }
}

function Toolbar(props) {
  const isSlideOut = props.isSlideOut;
  const navigateTo = props.navigateTo;
  if (isSlideOut) {
    return <OpenedToolbar navigateTo={navigateTo} />;
  } else {
    return <ClosedToolbar />;
  }
}

class OpenedToolbar extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    console.log(this);
    this.props.navigateTo();
  }

  render() {
    return (
      <div className="toolbar-content">
        <DropdownControl />
        <ul>
          <li><a onClick={this.navigate}>A</a></li>
          <li><a onClick={this.navigate}>B</a></li>
          <li><a onClick={this.navigate}>C</a></li>
        </ul>
      </div>
    );
  }

}

// function OpenedToolbar() {
//   return (
//     <div className="toolbar-content">
//       <DropdownControl />
//       <ul>
//         <li><a href="#">A</a></li>
//         <li><a href="#">B</a></li>
//         <li><a href="#">C</a></li>
//       </ul>
//     </div>
//   );
// }

function ClosedToolbar() {
  return (<div></div>);
}

export default ToolbarControl;
