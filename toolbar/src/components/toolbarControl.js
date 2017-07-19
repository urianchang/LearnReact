import React, { Component } from 'react';
import logo from '../smLogo_gray.png';
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
    const currentPage = this.props.currentPage;
    const isMobile = (this.props.isMobile) ? "mobile" : "";
    return (
      <div className={"toolbar " + isMobile } >
        <img src={logo} className="App-logo" alt="logo" onClick={this.slide}/>
        <Toolbar isSlideOut={isSlideOut} navigateTo={navigateTo} currentPage={currentPage} />
      </div>
    );
  }
}

function Toolbar(props) {
  const isSlideOut = props.isSlideOut;
  const navigateTo = props.navigateTo;
  const currentPage = props.currentPage;
  if (isSlideOut) {
    return <OpenedToolbar navigateTo={navigateTo} currentPage={currentPage} />;
  } else {
    return <ClosedToolbar />;
  }
}

class OpenedToolbar extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(param1) {
    this.props.navigateTo(param1);
  }

  render() {
    // let links = this.props.links;
    const navigateTo = this.props.navigateTo;
    const currentPage = this.props.currentPage;
    return (
      <div className="toolbar-content">
        <DropdownControl navigateTo={navigateTo} currentPage={currentPage} />
        <ul>
          <SingleToolbarElement navigateTo={navigateTo} name="Home" currentPage={currentPage} />
          <SingleToolbarElement navigateTo={navigateTo} name="A" currentPage={currentPage} />
          <SingleToolbarElement navigateTo={navigateTo} name="B" currentPage={currentPage} />
          <SingleToolbarElement navigateTo={navigateTo} name="C" currentPage={currentPage} />
        </ul>
      </div>
    );
  }

}

class SingleToolbarElement extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(param1) {
    this.props.navigateTo(param1);
  }

  render() {
    let name = this.props.name;
    let isSelected = (this.props.currentPage === name) ? "selected" : "";
    return (
      <li className={'toolbar-link ' + isSelected}><a onClick={() => this.navigate(name) }>{name}</a></li>
    );
  }

}

function ClosedToolbar() {
  return (<div></div>);
}

export default ToolbarControl;
