import React, { Component } from 'react';
import InventoryTable from '../InventoryTable';
import './home.css';

export default class Home extends Component {
  render() {
    return(
      <div>
        <h2>Welcome to the Sight Machine Boutique</h2>
        <h3>Current Inventory:</h3>
        <InventoryTable topic={"test"} />
      </div>
    );
  }
}
