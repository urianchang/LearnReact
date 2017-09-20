import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      isFormValid: false,
      postBody: { test_input: "", },
      errors: {
        test_input: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
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

  validateInput(n, v) {
    // console.log(`validating ${n} with value of ${v}`);
    if (n === "test_input") {
      let errors = this.state.errors;
      if (v.length <= 3) {
        errors['test_input'] = "Test input has to be more than 3 characters";
        this.setState({isFormValid: false, errors });
      } else {
        errors['test_input'] = "";
        this.setState({isFormValid: true, errors });
      }
    }
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
