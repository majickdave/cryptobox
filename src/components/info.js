import React, { Component } from 'react';

import dash from '../screenshot-dash.PNG'
import coin from '../coin-exchange.PNG'
import visualize from '../visualize.PNG'

class Info extends Component {
  render() {
    const screenshotStyle = {"maxHeight": "400px", "width": "auto"}
    return (
      <div>
        <section>
        <header role="banner">

          <h1>CryptoBox</h1><hr></hr>
          <h2>cryptocurrency in the cloud.</h2>
        </header>
      </section>
        <section>
          <header>
              <h3>Currency Calculator</h3>
          </header>
          <p><img style={screenshotStyle} src={dash} alt="cryptobox dashboard"></img></p>
          <p>CryptoBox helps you manage your cryptocurrency. Having a calculator and seeing live prices helps you invest smarter.</p>
        </section>
        <section>
          <header>
              <h3>Execute exchange trades</h3>
          </header>
          <p><img style={screenshotStyle} src={coin} alt="cryptobox calulator"></img></p>
          <p>CryptoBox provides a tool to quickly simulate exchanges and trades. After trades are finalized, the transaction is queued, and your account is credited.</p>
        </section>
        <section>
          <header>
              <h3>Visualize your crypto value</h3>
          </header>
          <p><img style={screenshotStyle} src={visualize} alt="cryptobox dashboard"></img></p>
          <p>Interactive charts and personalized statistics help you stay on track with your goals.</p>
        </section>
      </div>

    )
  }
}

export default Info;
