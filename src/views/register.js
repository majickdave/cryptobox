import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import SignUpForm from '../components/signup-form';
import Info from '../components/info';


class Register extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <header role="banner">

          <h1>CryptoBox</h1>
          <h2>cryptocurrency in the cloud.</h2>
        </header>
        <Info />
          <SignUpForm />
          <Footer />

      </div>

        );
  }
}

export default Register;
