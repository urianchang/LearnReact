import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    };
  }

  signUp() {
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error});
      });
  }

  render() {
    return(
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            style={{marginRight: '5px'}}
            onChange={e => this.setState({email: e.target.value})}
            />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            style={{marginRight: '5px'}}
            onChange={e => this.setState({password: e.target.value})}
            />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
            >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Sign in instead</Link></div>
      </div>
    );
  }
}

export default SignUp;
