import React, { Component } from 'react';
import Form from './components/form/form';

class App extends Component {

  constructor() {
    super();

    this.state = {
      isFormSubmitted: false,
      execution_id: "",
      execution_status: "",
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formBody) {
    this.setState({ isFormSubmitted: true });
    console.log(formBody);  //: For debugging purposes...
    //: Send API Request here...

    //: Get Response back (json)
    let someResponse = {
      execution_id: "1234",
      status: "OK",
    }

    this.setState({
      execution_id: someResponse.execution_id,
      execution_status: someResponse.status,
    });
  }

  render() {
    const isFormSubmitted = this.state.isFormSubmitted;

    if (isFormSubmitted) {
      const execution_id = this.state.execution_id;
      const execution_status = this.state.execution_status;
      return(
        <div>
          <h2> Thanks for submitting! </h2>
          <p>Execution id: { execution_id }</p>
          <h4>Progress Bar goes here</h4>
          <p>Status: { execution_status }</p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Please fill out the form below</h2>
          <Form submitForm={this.submitForm} />
        </div>
      );
    }

  }
}

export default App;
