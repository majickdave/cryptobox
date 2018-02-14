import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const padding = {"paddingBottom": "25px"}
const paddingContainer = {"maxWidth": "400px"}

const AccountPage = ({ authUser }) =>
<div className="my-auto mx-auto" style={paddingContainer}>


  <div className="card bg-dark text-light">
    <div className="container">
      {'logged in as: '+authUser.email}
      <div className="p-1">
          <PasswordForgetForm />
      </div>
      <div style={padding}>
        <h4>Enter New Password</h4>
        <PasswordChangeForm />
      </div>
    </div>
  </div>
  </div>


  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
