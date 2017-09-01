import React, { Component } from 'react';
import firebase from '../../firebase';

class InventoryTable extends Component {
  constructor(props) {
    super(props);
    // console.log(`Table topic: ${this.props.topic}`);
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('masterSheet');
    itemsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    if (!this.state.items) {
      return(
        <p>Checking the database...</p>
      );
    } else {
      return(
        <p>Check the console</p>
      );
    }
  }
}

export default InventoryTable;
