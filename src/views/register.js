import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Info from '../components/info';
import {Link} from 'react-router-dom';


class Register extends Component {
  render() {
    var padding = {"padding":"50px"}
    var buttonPadding = {"paddingTop":"20px", "paddingBottom":"100px"}
    return (
      <div>
        <Navigation />

        <Info />
          <div style={padding}><hr></hr>
            <h3>Let CryptoBox manage your cryptocurrency</h3>
          </div>
          <div style={buttonPadding}>
            <Link to="/settings"><button className="btn btn-round btn-outline-dark" type='button'><h3>Try It Free!</h3></button></Link>
          </div>
          <Footer />

      </div>

        );
  }
}

export default Register;
