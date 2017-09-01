import React, { Component } from 'react';
import InventoryTable from '../InventoryTable';

export default class Home extends Component {
  render() {
    return(
      <div>
        <h2>Welcome to the Sight Machine Boutique</h2>
        <InventoryTable topic={"test"} />
      </div>
    );
  }
}
