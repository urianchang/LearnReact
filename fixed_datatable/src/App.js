import React, { Component } from 'react';
import 'fixed-data-table/dist/fixed-data-table.min.css';

const { Table, Column, Cell } = require('fixed-data-table');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTableData: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'},
      ],
    }
  }

  render() {
    return (
      <Table
        rowsCount = {this.state.myTableData.length}
        rowHeight = { 50 }
        headerHeight = { 50 }
        width = { 1000 }
        height = { 300 } >
        <Column
          header = { <Cell>Name</Cell> }
          cell = { props => (
            <Cell {...props}>
              { this.state.myTableData[props.rowIndex].name }
            </Cell>
          )}
          width = { 200 }
        />
      </Table>
    );
  }
}

export default App;
