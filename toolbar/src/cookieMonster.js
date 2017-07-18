import React, { Component } from 'react';
import App from './App';
import LogReg from './components/templates/logReg/logReg';

class CookieMonster extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null
    }
    this.loginReq = this.loginReq.bind(this);
  }

  loginReq(params1) {
    console.log("Log in requested:", params1);
    this.setState({isLoggedIn: true});
  }

  render() {
    return ((this.state.isLoggedIn) ? <App /> : <LogReg loginReq={this.loginReq} />);
  }

}

export default CookieMonster;
