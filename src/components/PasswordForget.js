import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

const inputPadding = {"paddingTop": "15px"}
const padding = {"paddingTop": "100px"}


const PasswordForgetPage = () =>
  <div style={padding} className="container" >
    <h1>Recover Your Password</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (

      <form  onSubmit={this.onSubmit} style={padding}>
        <div style={inputPadding}>

          <div className="input-group">

            <input className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
              value={this.state.email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" disabled={isInvalid} type="submit"><i className="fa fa-envelope-o" aria-hidden="true"></i> Send</button>
            </div>
          </div>
        </div>


        { error && <p>{error.message}</p> }
      </form>

    );
  }
}

const PasswordForgetLink = () =>
  <small >
    <Link to="/pw-forget">Forgot Password?</Link>
  </small>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
