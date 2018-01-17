import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import {Link} from 'react-router-dom';
import TextInput from '../components/text-input';


export default class SignUp extends Component {

  render () {
    var padding = {"paddingTop": "40px"};
    return (
            <div className="link-account">
              <Navigation />

              <div>
                <div className="card">
                <form>
                  <TextInput type="text" name="Enter your name" />
                  <TextInput type="text" name="Desired username" />
                  <TextInput type="email" name="Enter Email" />
                  <TextInput type="text" name="Enter Password" />
                  <TextInput type="text" name="Confirm Password" />
                    <button className="btn btn-outline-dark" type="button">Submit</button>
                </form>
              </div>
                <div style={padding}>
                  <Link className="btn btn-primary" type="link" to="/settings"><span role="img" aria-labelledby="skip">Skip to Dashboard 👉</span></Link>
                </div>
              </div>
              <div>
                <Footer />
              </div>
            </div>
        );
  }
}
