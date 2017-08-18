import React, { Component } from 'react';
import './AssemblePage.css';

class AssemblePage extends Component {

  constructor(props){
    super(props);

    this.state = {
      isAssembled: false,
      count: 0,
      create_namespace: "Building...",
      setup_ma_common: "Building...",
      setup_postgresql: "Building...",
      setup_rabbitmq: "Building...",
      setup_mongodb: "Building...",
      setup_ma: "Building...",
    };

    this.checkStatus = this.checkStatus.bind(this);
  };

  componentDidMount() {
    var intervalId = setInterval(this.checkStatus.bind(this), 1000);
    this.setState({ intervalId : intervalId });
  };

  checkStatus() {
    if (this.state.count === 6) {
      clearInterval(this.state.intervalId);
      this.setState({ isAssembled: true });
    } else {
      let URL = "http://localhost:3003/api/v1/execution/" + this.state.count;
      fetch(URL)
        .then(res => res.json())
        .then(json => {
          /*
            This section needs to be reworked when the full system is up and running
          */
          let taskName = json.taskComplete.name;
          let taskState = json.taskComplete.state;

          switch (taskName) {
            case "create_namespace":
              this.setState({ create_namespace : taskState });
              break;
            case "setup_ma_common":
              this.setState({ setup_ma_common : taskState });
              break;
            case "setup_postgresql":
              this.setState({ setup_postgresql : taskState });
              break;
            case "setup_rabbitmq":
              this.setState({ setup_rabbitmq : taskState });
              break;
            case "setup_mongodb":
              this.setState({setup_mongodb : taskState });
              break;
            case "setup_ma":
              this.setState({setup_ma : taskState});
              break;
            default:
              console.log(`ERROR - Unknown Task: ${ taskName }`);
          }
          let newCount = this.state.count + 1;
          this.setState({ count : newCount });
        });
    }
  };

  render() {
    const execution_id = this.props.execution_id;
    let execution_status = (!this.state.isAssembled) ? "Assembling..." : "Done!";
    return(
      <div>
        <h2>Thanks for submitting your request!</h2>
        <p>This is your job id: { execution_id }</p>
        <p>Status: { execution_status }</p>
        <h4>Progress Bar goes here: { this.state.count }</h4>
        <ul>
          <li>Creating namespace: { this.state.create_namespace }</li>
          <li>Setting up ma common: { this.state.setup_ma_common }</li>
          <li>Setting up PostgreSQL: { this.state.setup_postgresql }</li>
          <li>Setting up RabbitMQ: {this.state.setup_rabbitmq }</li>
          <li>Setting up MongoDB: { this.state.setup_mongodb }</li>
          <li>Setting up ma: { this.state.setup_ma }</li>
        </ul>
      </div>
    );
  }
}

export default AssemblePage;
