import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import '../App.css'

import Welcome from '../components/balance'

class Settings extends Component {

  render () {
    return (
            <div className="link-account">
              <Navigation />
              <div className="welcome-message">
                  <Welcome name="Tyler" balance="$1550.00"/>
              </div>
              <div className="signup-form">
                <form>
                  <div className="form-section">
                    <div className="link-bank">
                      <Link to="/dashboard"><button type="button" ><h1>Link Your Bank</h1></button></Link>
                    </div>
                    <div className="link-crypto">

                      <Link to="/dashboard"><button type="button" value="BTC" ><h2>Buy Bitcoin</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="ETH" ><h2>Buy Ethereum</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="LTC" ><h2>Buy Litecoin</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="XMR" ><h2>Buy Monero</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="XRP" ><h2>Buy Ripple</h2></button></Link>
                    </div>
                    <div  className="go-to-dash">
                      <Link to="/dashboard"><button type='button'><h2>Go to Dashboard</h2></button></Link>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <Footer />
              </div>
            </div>
        );
  }
}

export default Settings;
