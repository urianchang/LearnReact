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
      user: null,
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(param1) {
    if (param1 in userlist) {
      // console.log("yay");
      this.setState({
        isLoggedIn: true,
        user: param1
      });
    }
  }

  logout() {
    this.setState({
      isLoggedIn: false,
      user: null
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const username = this.state.user;
    if (isLoggedIn) {
      return(
        <WelcomePage isLoggedIn={isLoggedIn} username={username} logout={this.logout} />
      );
    } else {
      return(
        <LoginPage login={this.login} isLoggedIn={isLoggedIn} />
      );
    }
  }
}

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("submit hit");
    this.props.login(this.state.username);
  }

  render() {
    return(
      <div>
        <h1>Please login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username: <input type="text" placeholder="e.g. 'test1'" onChange={this.handleChange} /></label>
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}


class WelcomePage extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const username = this.props.username;
    return(
      <div>
        <h1>Thanks for logging in, {username}!</h1>
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default App;
