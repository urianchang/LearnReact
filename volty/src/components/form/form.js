import React, { Component } from 'react';
import './form.css';


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company_long_name: "",
      company_short_name: "",
      customer_email: "",
      customer_full_name: "",
      region: "gcp-us-west",
      sightmachine_owner_email: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log("form submitted");
    const postBody = this.state;
    // console.log(postBody);
    event.preventDefault();
    this.props.submitForm(postBody);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // console.log(name, value);  //: For debugging...

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Company long name: </label>
          <input name="company_long_name" type="text" value={this.state.company_long_name} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Company short name: </label>
          <input name="company_short_name" type="text" value={this.state.company_short_name} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Customer e-mail: </label>
          <input name="customer_email" type="text" value={this.state.customer_email} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Customer full name: </label>
          <input name="customer_full_name" type="text" value={this.state.customer_full_name} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Region: </label>
          <input name="region" type="text" value={this.state.region} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Sight Machine owner e-mail: </label>
          <input name="sightmachine_owner_email" type="text" value={this.state.sightmachine_owner_email} onChange={this.handleInputChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default Form;
