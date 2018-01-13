import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class SignUpForm extends Component {
  render() {
    var register = {"border": "1px solid black", "width": "150px"}
    var signup = {"paddingTop": "10px"}
    return (
      <div className="signup-form">
        <h3>Let CryptoBox manage your cryptocurrency</h3>
          <form className='signup-form'>
              <div style={signup}>
                <Link to="/settings"><button style={register} type='submit'><h3>Sign Up</h3></button></Link>
              </div>
          </form>
        </div>
        );
  }
}

export default SignUpForm;
