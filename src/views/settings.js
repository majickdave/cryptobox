import React, { Component } from 'react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';
import '../App.css';

import Linker from '../components/linker';

class Settings extends Component {

  render () {

    return (
            <div className="link-account">
              <Navigation />

              <div className="signup-form">
                <form>
                  <div className="form-section">
                    <div className="link-bank">
                      <Linker name="Link Your Bank" />

                    </div>
                    <div className="link-crypto">

                      <Linker name="Buy Bitcoin"/>
                      <Linker name="Buy Ethereum"/>
                      <Linker name="Buy Litecoin"/>
                      <Linker name="Buy Monero"/>
                      <Linker name="Buy Ripple"/>
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
