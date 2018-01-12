import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class SignUpForm extends Component {
  render() {
    var register = {"border": "1px solid black", "width": "150px"}
    return (
      <div className="signup-form">
                  <h3>Let CryptoBox manage your cryptocurrency</h3>
              <form className='signup-form'>
                  <div>
                    <label for="first-name">First name</label>
                    <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                  </div>
                  <div>
                    <label for="last-name">Last name</label>
                    <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                  </div>
                  <div>
                    <label for="username">Email</label>
                    <input type="text" name='username' id='username' />
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <input type="password" name='password' id='password' />
                  </div>
                  <Link to="/settings"><button style={register} type='submit'><p>Sign Up</p></button></Link>
              </form>
            </div>
        );
  }
}

export default SignUpForm;
