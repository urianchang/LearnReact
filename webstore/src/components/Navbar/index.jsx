import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patches">Patches</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    );
  }
}
