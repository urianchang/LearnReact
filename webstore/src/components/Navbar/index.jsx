import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './SM_logo.png';

export default class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="Navlinks">
          <li><Link className="Navlink" to="/">Home</Link></li>
          <li><Link className="Navlink" to="/patches">Patches</Link></li>
          <li><Link className="Navlink" to="/forms">Forms</Link></li>
        </ul>
      </div>
    );
  }
}
