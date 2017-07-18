import React, { Component } from 'react';
import './logReg.css';

class LogReg extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined
    }
    this.onChange = this.onChange.bind(this);
    this.loginReq = this.loginReq.bind(this);
  }

  onChange(e) {
    // console.log(e.target.value);
    this.setState({username: e.target.value});
  }

  loginReq(e) {
    e.preventDefault();
    // console.log(this.state.username);
    this.props.loginReq(this.state.username);
  }

  render() {
    return(
      <div>
        <h1>Please log in</h1>
        <form onSubmit={this.loginReq} >
          <label>Username: <input type="text" onChange={this.onChange} /></label>
          <button type="Submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default LogReg;