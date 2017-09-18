import React, { Component } from 'react';
import firebase from '../../firebase';  // Firebase!
import './table.css';

class InventoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
    this.eachRow = this.eachRow.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('masterSheet');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      //: ["NAME", "TYPE", "ID", "COUNT", "DESCRIPTION", "IMG_URL"]
      this.setState({ items });
    });
  }

  eachRow(params, i) {
    return(
      <TableRow key={i} index={i} cellInfoArray={params} />
    );
  }

  render() {
    if (!this.state.items) {
      return(
        <p>Checking the database...</p>
      );
    } else {
      return(
        <table>
          <tbody>
            { this.state.items.map(this.eachRow) }
          </tbody>
        </table>
      );
    }
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.makeCell = this.makeCell.bind(this);
  }

  makeCell(param, i) {
    if (i === 5 && param !== "IMG_URL") {
      // console.log(param);
      return(
        <td key={i}>
          <img src={ param } alt= { param } />
        </td>
      );
    } else {
      return(<td key={i}>{ param }</td>);
    }
  }

  render() {
    return(
      <tr>
        { this.props.cellInfoArray.map(this.makeCell) }
      </tr>
    );
  }
}

export default InventoryTable;
