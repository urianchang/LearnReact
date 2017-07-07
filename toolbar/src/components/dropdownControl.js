import React, { Component } from 'react';
import './dropdownControl.css';


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

export default DropdownControl;
