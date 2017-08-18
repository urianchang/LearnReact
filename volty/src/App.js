import React, { Component } from 'react';
import Form from './components/form/form';
import AssemblePage from './templates/assemble/AssemblePage';

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
    // console.log(formBody);  //: For debugging purposes...
    //: Send Request to create a Voltron
    const endpoint = "http://localhost:3003/api/v1/workflows/create_ma_service_environment";
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody),
    })
      .then(res => res.json())
      .then(json => {
        // console.log("API RESPONSE:", json);
        this.setState({
          execution_id: json.execution_id,
          execution_status: json.status,
        });
      });
  } //: End of submitForm

  render() {
    // const isFormSubmitted = this.state.isFormSubmitted;

    if (this.state.isFormSubmitted) {
      return(
        <AssemblePage
          execution_id = {this.state.execution_id}
          execution_status = {this.state.execution_status}
        />
      );
    } else {
      return (
        <div>
          <h2>Please fill out the form below</h2>
          <Form submitForm={this.submitForm} />
        </div>
      );
    }

  } //: end of render
}

export default App;
