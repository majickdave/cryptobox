import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

class Settings extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <section>
                <form id="record-dream">
                  <div class="form-section">
                    <div>
                      <p class="dream-date-header">Link Bank</p>
                      <input type="checkbox" required></input>
                    </div>
                    <div>
                      <p class="dream-date-header">Link Bitcoin</p>
                      <input type="checkbox"></input>
                    </div>
                    <div>
                      <p class="dream-date-header">Link Ethereum</p>
                      <input type="checkbox"></input>
                    </div>
                    <div>
                      <p class="dream-date-header">Link Litecoin</p>
                      <input type="checkbox"></input>
                    </div>
                    <div>
                      <p class="dream-date-header">Link Monero</p>
                      <input type="checkbox"></input>
                    </div>
                    <div>
                      <p class="dream-date-header">Link Ripple</p>
                      <input type="checkbox"></input>
                    </div>
                  </div>
                  <button type='submit' ><Link to="/dashboard">Link Accounts</Link></button>
                </form>
              </section>
              <Footer />
      </div>




        );
  }
}

export default Settings;
