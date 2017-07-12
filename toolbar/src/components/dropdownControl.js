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
    const navigateTo = this.props.navigateTo;
    const currentPage = this.props.currentPage;
    return (
      <div className="dropdown" onClick={this.dropIt}>
        <Dropdown isDropdownOpen={isDropdownOpen} navigateTo={navigateTo} currentPage={currentPage} />
      </div>
    );
  }
}

function Dropdown(props) {
  const isDropdownOpen = props.isDropdownOpen;
  const navigateTo = props.navigateTo;
  const currentPage = props.currentPage;
  if (isDropdownOpen) {
    return <OpenedDropdown navigateTo={navigateTo} currentPage={currentPage} />;
  } else {
    return <ClosedDropdown />;
  }
}

class OpenedDropdown extends Component {

  // constructor() {
  //   super();
  // }

  render() {
    const navigateTo = this.props.navigateTo;
    const currentPage = this.props.currentPage;
    return (
      <div>
        <p>Opened</p>
        <div className="dropdown-content">
          <SingleDropdownElement navigateTo={navigateTo} currentPage={currentPage} name="hello" />
          <SingleDropdownElement navigateTo={navigateTo} currentPage={currentPage} name="bye" />
        </div>
      </div>
    );
  }

} //: end class

class SingleDropdownElement extends Component {

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
      <a className={'dropdown-link ' + isSelected} onClick={() => this.navigate(name)}>{name}</a>
    );
  }

}

function ClosedDropdown() {
  return (
    <div>
      <p>Closed</p>
    </div>
  );
}

export default DropdownControl;
