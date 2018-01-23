import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const padding = {"paddingTop": "50px", "paddingBottom": "25px"}


const AccountPage = ({ authUser }) =>
  <section style={padding}>
  <div className="container bg-dark text-light">
    <p>Logged in as: {authUser.email}</p>
    <PasswordForgetForm />
    <div><p>or</p></div>
    <div style={padding}>
      <h4>Enter New Password</h4>
      <PasswordChangeForm />
    </div>
  </div>
</section>
  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
