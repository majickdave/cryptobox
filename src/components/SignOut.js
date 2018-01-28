import React from 'react';
import { auth } from '../firebase';


const Color = {"backgroundColor": "#415772", "color": "#f2f2f2"}

const SignOutButton = () =>
  <button className="btn btn-ouline-light" style={Color}
    type="button"
    onClick={auth.doSignOut}>
    <i className="fas fa-sign-out"></i> Logout</button>



export default SignOutButton;
