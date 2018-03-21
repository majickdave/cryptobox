import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div >

          <form className="form-group" onSubmit={this.onSubmit}>
            <div className="container p-1">
              <input className="form-control"
                value={passwordOne}
                onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                type="password"
                placeholder="New Password"
              />
            </div>
            <div className="container p-1">
              <input className="form-control"
                value={passwordTwo}
                onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                type="password"
                placeholder="Confirm New Password"
              />
            </div>
            <div className="container p-1">
              <button className="btn btn-secondary" disabled={isInvalid} type="submit" >
                Reset My Password
              </button>
            </div>

          </form>
      <div>
        { error && <p>{error.message}</p> }
      </div>
      </div>
    );
  }
}

export default PasswordChangeForm;
