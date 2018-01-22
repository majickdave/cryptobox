import React from 'react';
import { auth } from '../firebase';


const Color = {"backgroundColor": "#415772", "color": "#f2f2f2", "border": "none"}

const SignOutButton = () =>
  <button className="btn" style={Color}
    type="button"
    onClick={auth.doSignOut}>
    <p><i className="fa fa-sign-out"></i> Logout</p></button>



export default SignOutButton;
