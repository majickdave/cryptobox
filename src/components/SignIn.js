import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

import './App.css'

const padding = {"paddingTop": "15px"}

const paddingTop = {"paddingTop": "50px"}



const SignInPage = ({ history }) =>
  <div style={paddingTop}>
    <h1>CryptoBox Login</h1>
    <SignInForm history={history} />
    <PasswordForgetLink ></PasswordForgetLink>
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    const isError = error === null;

    return (
      <div className="login-child">
      <form onSubmit={this.onSubmit}>
        <div className="form-group" style={paddingTop}>
        <input className="form-control"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div style={padding}>
        <input className="form-control"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
      </div>
      <div style={padding}>
        <button className="btn btn-block btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>
      </div>
      <div class="alert alert-danger" role="alert" hidden={isError}>
        { error && <p>{error.message}</p> }
      </div>
      </form>
    </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
