import React, { Component } from 'react';
import firebase from '../../firebase';

class InventoryTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('masterSheet');
    itemsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return(
      <p>Check the console, yo</p>
    );
  }
}

export default InventoryTable;
