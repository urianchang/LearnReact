import React, { Component } from 'react';

const userlist = {
  'user' : 'password',
  'user1' : 'helloworld'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: null
    }
    this.login = this.login.bind(this);
  }

  login(param1) {

  }

  render() {

    return (

    );
  }
}

class LoginPage extends Component {


}

class WelcomePage extends Component {
  render() {
    return(
      <div>
        <h1>Thanks for logging in!</h1>
      </div>
    );
  }
}

export default App;
