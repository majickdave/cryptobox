import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import '../App.css'

import Welcome from '../components/balance'

class Settings extends Component {

  render () {
    var bank ={"background-color": "green", "color": "white"};
    var btc ={"background-color": "#ea963d", "color": "white"};
    var eth ={"background-color": "#171d2f", "color": "white"};
    var ltc ={"background-color": "gray", "color": "white"};
    var xmr ={"background-color": "#e26f38", "color": "white"};
    var xrp ={"background-color": "#3575a3", "color": "white"};
    return (
            <div className="link-account">
              <Navigation />
              <div className="welcome-message">
                <p>
                  <Welcome name="Woz" balance="$1550.00"/>
                </p>
              </div>
              <div className="signup-form">
                <form>
                  <div className="form-section">
                    <div className="link-bank">
                      <Link to="/dashboard"><button type="button" style={bank}><h1>Link Your Bank</h1></button></Link>
                    </div>
                    <div class="link-crypto">

                      <Link to="/dashboard"><button type="button" value="BTC" style={btc}><h2>Buy Bitcoin</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="ETH" style={eth}><h2>Buy Ethereum</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="LTC" style={ltc}><h2>Buy Litecoin</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="XMR" style={xmr}><h2>Buy Monero</h2></button></Link>
                      <Link to="/dashboard"><button type="button" value="XRP" style={xrp}><h2>Buy Ripple</h2></button></Link>
                    </div>
                  </div>
                  <div  className="go-to-dash">
                    <Link to="/dashboard"><button type='button'><h2>Go to Dashboard</h2></button></Link>
                  </div>

                </form>
              </div>
            <Footer />
            </div>
        );
  }
}

export default Settings;
