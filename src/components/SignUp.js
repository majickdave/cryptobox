import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';

import { auth, db } from '../firebase';
import * as routes from '../constants/routes';

const padding = {"padding": "100px"}
const inputPadding = {"padding": "15px"}

const SignUpPage = ({ history }) =>
  <div style={padding}>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};



class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <div style={inputPadding}>
        <input
                 value={username}
                 onChange={event => this.setState(byPropKey('username', event.target.value))}
                 type="text"
                 placeholder="Full Name"
               />
               </div>
               <div style={inputPadding}>
               <input

                 value={email}
                 onChange={event => this.setState(byPropKey('email', event.target.value))}
                 type="text"
                 placeholder="Email Address"
               />
               </div>
               <div style={inputPadding}>
               <input

                 value={passwordOne}
                 onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                 type="password"
                 placeholder="Password"
               />
               </div>
               <div style={inputPadding}>
               <input

                 value={passwordTwo}
                 onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                 type="password"
                 placeholder="Confirm Password"
               />
               </div>
               <div style={inputPadding}>
                 <button className="btn btn-primary" disabled={isInvalid} type="submit">
                   Sign Up
                 </button>
               </div>


               { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
