import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import SignUpForm from '../components/signup-form';
import Info from '../components/info';


class Register extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Info />
          <SignUpForm />
          <Footer />

      </div>

        );
  }
}

export default Register;
