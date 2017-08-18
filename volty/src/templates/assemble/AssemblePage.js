import React, { Component } from 'react';
import './AssemblePage.css';

class AssemblePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      isAssembled: false,
      count: 0,
    };

    this.checkStatus = this.checkStatus.bind(this);
  };

  componentDidMount() {
    var intervalId = setInterval(this.checkStatus.bind(this), 10);
    console.log('intervalid:', intervalId);
    this.setState({ intervalId : intervalId });
    // console.log("componentDidMount");
    // this.checkStatus();
  };

  checkStatus() {
    if (this.state.count === 100) {
      clearInterval(this.state.intervalId);
      this.setState({ isAssembled: true });
    } else {
      let URL = "http://localhost:3003/api/v1/execution/" + this.state.count;
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          console.log("api response received");
          this.setState({ count: parseInt(json.newCount, 10) });
        });
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
        <h4>Progress Bar goes here: { this.state.count }</h4>
      </div>
    );
  }
}

export default AssemblePage;
