import React, { Component } from 'react';
import App from './App';
import LogReg from './components/templates/logReg/logReg';

const users = {
  "test": "",
  "urian": ""
}

class CookieMonster extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null,
      err: null
    }
    this.loginReq = this.loginReq.bind(this);
  }

  loginReq(params1) {
    // console.log("Log in requested:", params1);
    if (params1 in users) {
      this.setState({isLoggedIn: true});
    } else {
      this.setState({err: "User does not exist!"});
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return(<App />);
    } else {
      return(<LogReg loginReq={this.loginReq} error={this.state.err} />);
    }
  }

}

export default CookieMonster;
