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
    const links = this.props.links;
    // console.log(links);
    return (
      <div className="toolbar">
        <img src={logo} className="App-logo" alt="logo" onClick={this.slide}/>
        <Toolbar isSlideOut={isSlideOut} navigateTo={navigateTo} links={links} />
      </div>
    );
  }
}

function Toolbar(props) {
  const isSlideOut = props.isSlideOut;
  const navigateTo = props.navigateTo;
  const links = props.links;
  if (isSlideOut) {
    return <OpenedToolbar navigateTo={navigateTo} links={links} />;
  } else {
    return <ClosedToolbar />;
  }
}

class OpenedToolbar extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(p) {
    // console.log(p);
    this.props.navigateTo(p);
  }

  render() {
    let links = this.props.links;
    return (
      <div className="toolbar-content">
        <DropdownControl />
        <ul>
          <li><a onClick={ () => this.navigate(links[0]) }>{ links[0] }</a></li>
          <li><a onClick={ () => this.navigate(links[1]) }>{ links[1] }</a></li>
          <li><a onClick={ () => this.navigate(links[2]) }>{ links[2] }</a></li>
        </ul>
      </div>
    );
  }

}

// <li><a onClick={this.navigate}>{this.props.links[0]}</a></li>
// <li><a onClick={this.navigate}>{this.props.links[1]}</a></li>
// <li><a onClick={this.navigate}>{this.props.links[2]}</a></li>

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
