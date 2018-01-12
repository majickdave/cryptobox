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
                <p>
                  <Welcome name="Woz" balance="$1550.00"/>
                </p>
              </div>
                <form>
                  <div className="form-section">
                    <div className="link-bank">
                      <button type="button" value=""><h1>Link Your Bank</h1></button>
                    </div>
                    <div class="link-crypto">

                      <button type="button" value="BTC"><h2>Buy Bitcoin</h2></button>
                      <button type="button" value="ETH"><h2>Buy Ethereum</h2></button>
                      <button type="button" value="LTC"><h2>Buy Litecoin</h2></button>
                      <button type="button" value="XMR"><h2>Buy Monero</h2></button>
                      <button type="button" value="XRP"><h2>Buy Ripple</h2></button>
                    </div>
                  </div>
                  <div  className="go-to-dash">
                    <Link to="/dashboard"><button type='button'><h2>Go to Dashboard</h2></button></Link>
                  </div>

                </form>
            <Footer />
            </div>
        );
  }
}

export default Settings;
