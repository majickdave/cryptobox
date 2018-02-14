import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import { auth, db } from '../firebase';
import * as routes from '../constants/routes';
import './App.css'






const SignUpPage = ({ history }) =>
  <div className="my-auto mx-auto">
    <h2>Sign up</h2>
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

      const widthInput = {"minWidth": "100%", "paddingLeft": "15px"}

const paddingContainer = {"paddingTop": "50px", "maxWidth": "400px"}
const padding = {"paddingTop": "15px"}


    return (
      <div style={paddingContainer} className="mx-auto">
        <div className="card bg-secondary" >
          <div className="container">
      <form  onSubmit={this.onSubmit} >
        <div className="form-group" style={padding}>
        <input className="form-control"
                 value={username}
                 onChange={event => this.setState(byPropKey('username', event.target.value))}
                 type="text"
                 placeholder="Full Name"
               />
               </div>
               <div style={padding}>
               <input className="form-control"

                 value={email}
                 onChange={event => this.setState(byPropKey('email', event.target.value))}
                 type="text"
                 placeholder="Email Address"
               />
               </div>
               <div style={padding}>
               <input className="form-control"

                 value={passwordOne}
                 onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                 type="password"
                 placeholder="Password"
               />
               </div>
               <div style={padding}>
               <input className="form-control"

                 value={passwordTwo}
                 onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                 type="password"
                 placeholder="Confirm Password"
               />
               </div>
               <div style={{"paddingBottom": "15px", "paddingTop": "15px"}}>
                 <button style={widthInput} className="btn btn-primary" disabled={isInvalid} type="submit">
                   Sign Up
                 </button>
               </div>



      </form>
      </div>
      </div>
      <div className="alert-danger">
        { error && <p>{error.message}</p> }
      </div>
      </div>
    );
  }
}
const white = {"color": "white"}
const SignUpLink = () =>

<Link to={routes.SIGN_UP}>
  <p  style={white}><button className="btn btn-secondary" >

    Don't have an account?
    {' '}Sign Up
  </button></p></Link>




export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};
