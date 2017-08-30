import React, { Component } from 'react';
import 'fixed-data-table/dist/fixed-data-table.min.css';

const { Table, Column, Cell } = require('fixed-data-table');

//: Create Reusable Cells
class MyTextCell extends Component {
  render() {
    const { rowIndex, field, data, ...props } = this.props;
    return(
      <Cell {...props}>
        { data[rowIndex][field] }
      </Cell>
    );
  }
}

class MyLinkCell extends Component {
  render() {
    const { rowIndex, field, data, ...props } = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={ link }>{ link }</a>
      </Cell>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTableData: [
        {name: 'Rylan', email: "something@gmail.com"},
        {name: 'Amelia', email: "another@gmail.com"},
        {name: 'Estevan', email: "anotherone@gmail.com"},
        {name: 'Florence', email: "pow@hotmail.com"},
        {name: 'Tressa', email: "helloworld@test.com"},
      ],
    };
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
          cell = {
            <MyTextCell
              data = { this.state.myTableData }
              field = "name"
            />
          }
          width = { 200 }
        />
        <Column
          header={ <Cell>Email</Cell> }
          cell = {
            <MyLinkCell
              data = { this.state.myTableData }
              field = "email"
            />
          }
          width = { 200 }
        />
      </Table>
    );
  }
}

export default App;
