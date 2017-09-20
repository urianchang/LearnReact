import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      isFormValid: false,
      postBody: {
        test_input: "",
      },
      errors: {
        test_input: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleSubmit(event) {
    console.log("form submitted");
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(name, value);  //: For debugging...
    let postBody = this.state.postBody;
    postBody[name] = value;
    this.setState({ postBody }, this.validateInput(name, value));
  }

  validateInput(fieldName, fieldValue) {
    // console.log(`validating ${n} with value of ${v}`);
    let errors = this.state.errors;
    if (fieldName === "test_input") {
      if (fieldValue.length <= 3) {
        errors['test_input'] = "Test input has to be more than 3 characters";
      } else {
        errors['test_input'] = "";
      }
    }
    this.setState({ errors }, this.validateForm());
  }

  validateForm() {
    let isFormValid = this.state.isFormValid;
    for (let key in this.state.errors) {
      isFormValid = this.state.errors[key] ? false : true;
    }
    this.setState({ isFormValid });
  }

  render() {
    return(
      <div className="form-area">
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label>Test input: </label>
            <input
              type="text"
              name="test_input"
              onChange={ this.handleInputChange }
              />
            <span className="error-msg">{ this.state.errors.test_input }</span>
          </div>
          <input
            className={!this.state.isFormValid ? 'submit-button disabled' : "submit-button" }
            type="submit"
            value="Submit"
            disabled={ !this.state.isFormValid }
            />
        </form>
      </div>
    );
  }
};
