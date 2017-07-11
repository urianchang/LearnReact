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
    return (
      <div className="dropdown" onClick={this.dropIt}><Dropdown isDropdownOpen={isDropdownOpen} navigateTo={navigateTo} /></div>
    );
  }
}

function Dropdown(props) {
  const isDropdownOpen = props.isDropdownOpen;
  const navigateTo = props.navigateTo;
  if (isDropdownOpen) {
    return <OpenedDropdown navigateTo={navigateTo} />;
  } else {
    return <ClosedDropdown />;
  }
}

class OpenedDropdown extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(param1) {
    this.props.navigateTo(param1);
  }

  render() {
    // const navigateTo = this.props.navigateTo;
    return (
      <div>
        <p>Opened</p>
        <div className="dropdown-content">
          <a onClick={ () => this.navigate("hello") }>hello</a>
          <a onClick={ () => this.navigate("bye") }>bye</a>
        </div>
      </div>
    );
  }

}

// function OpenedDropdown() {
//   return (
//     <div>
//       <p>Opened</p>
//       <div className="dropdown-content">
//         <a href="#">hello</a>
//         <a href="#">bye</a>
//       </div>
//     </div>
//   );
// }

function ClosedDropdown() {
  return (
    <div>
      <p>Closed</p>
    </div>
  );
}

export default DropdownControl;
