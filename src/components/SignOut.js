import React from 'react';
import { auth } from '../firebase';



const SignOutButton = () =>
  <button className="btn btn-outline-light" 
    type="button"
    onClick={auth.doSignOut}>
    <i className="fas fa-sign-out"></i> Logout</button>



export default SignOutButton;
