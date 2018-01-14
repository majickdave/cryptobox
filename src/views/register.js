import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import SignUpForm from '../components/signup-form';
import Info from '../components/info';


class Register extends Component {
  render() {

    var padding = {"paddingTop":"30px"}
    return (
      <div>
        <Navigation />
        <div style={padding}>
          <header role="banner">

            <h1>CryptoBox</h1>
            <h2>cryptocurrency in the cloud.</h2>
          </header>
        </div>

        <Info />
          <SignUpForm />
          <Footer />

      </div>

        );
  }
}

export default Register;
