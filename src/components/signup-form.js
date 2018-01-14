import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class SignUpForm extends Component {
  render() {
    var signup = {"paddingTop": "10px"}
    return (
      <div className="signup-form">
        <section>
          <header>
            <h3>Let CryptoBox manage your cryptocurrency</h3>
          </header>

          <div>
            <form className='signup-form'>
                <div style={signup}>
                  <Link to="/settings"><button className="btn btn-round btn-outline-dark" type='submit'><h3>Try It Free!</h3></button></Link>
                </div>
            </form>
          </div>

        </section>

        </div>
        );
  }
}

export default SignUpForm;
