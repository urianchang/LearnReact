import React, { Component } from 'react';
import './AssemblePage.css';

class AssemblePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      isAssembled: false,
    };
  };

  componentDidMount() {
    setInterval(fun, 10);
    function fun() {
      console.log('from component did Mount');
    }
  };

  render() {
    const execution_id = this.props.execution_id;
    const execution_status = this.props.execution_status;
    return(
      <div>
        <h2>Thanks for submitting!</h2>
        <p>This is your execution id (mongoDB ID): { execution_id }</p>
        <p>Status: { execution_status }</p>
        <h4>Progress Bar goes here</h4>
      </div>
    );
  }
}

export default AssemblePage;
