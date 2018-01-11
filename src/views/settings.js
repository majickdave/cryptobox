import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import '../App.css'

class Settings extends Component {
  render() {
    return (
            <div className="link-account">
              <Navigation />


                <form id="link-account">
                  <div class="form-section">
                    <div>
                      <p class="dream-date-header">Link Bank</p>
                      <input type="checkbox" required></input>
                    </div>
                    <div>

                      <button type="button"><p class="dream-date-header">Buy Bitcoin</p></button>
                      <button type="button"><p class="dream-date-header">Buy Ethereum</p></button>
                      <button type="button"><p class="dream-date-header">Buy Litecoin</p></button>
                      <button type="button"><p class="dream-date-header">Buy Monero</p></button>
                      <button type="button"><p class="dream-date-header">Buy Ripple</p></button>
                    </div>
                  </div>
                  <button type='submit' ><Link to="/dashboard"><p>Go to Dashboard</p></Link></button>
                </form>

            <Footer />
            </div>





        );
  }
}

export default Settings;
