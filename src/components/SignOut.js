import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button className="btn btn-block btn-outline-danger"
    type="button"
    onClick={auth.doSignOut}>
    <i className="fa fa-sign-out"></i> Sign Out</button>



export default SignOutButton;
