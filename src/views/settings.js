import React, { Component } from 'react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

import bankIcon from '../powered_by_stripe.svg';
import btcIcon from '../crypto-icons/btc.svg';
import ethIcon from '../crypto-icons/eth.svg';
import bchIcon from '../crypto-icons/bch.svg';
import xrpIcon from '../crypto-icons/xrp.svg';
import xmrIcon from '../crypto-icons/xmr.svg';
import ltcIcon from '../crypto-icons/ltc.svg';

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
                      <Linker icon={bankIcon} name="Bank" />

                    </div>
                    <div className="link-crypto">

                      <Linker icon={btcIcon} name="Bitcoin"/>
                      <Linker icon={bchIcon} name="Bitcoin Cash"/>
                      <Linker icon={ethIcon} name="Ethereum"/>
                      <Linker icon={ltcIcon} name="Litecoin"/>
                      <Linker icon={xrpIcon} name="Ripple"/>
                      <Linker icon={xmrIcon} name="Monero"/>

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
