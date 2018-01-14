import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
              <h3>Manage your accounts </h3>
          </header>
          <p>[<em>placeholder for screenshot of cryptocurrency management platform</em>]</p>
          <p>CryptoBox helps you manage your cryptocurrency. Seeing all of your coins in place helps you invest smarter.</p>
        </section>
        <section>
          <header>
              <h3>Execute exchange trades</h3>
          </header>
          <p>[<em>placeholder for screenshot of coin exchanging interface</em>]</p>
          <p>CryptoBox provides a tool to quickly simulate exchanges and trades. After trades are finalized, the transaction is queued, and your account is credited.</p>
        </section>
        <section>
          <header>
              <h3>Visualize your cryptocurrency</h3>
          </header>
          <p>[<em>placeholder for screenshot of CryptoBox account balance</em>]</p>
          <p>Interactive charts and personalized statistics help you stay on track with your goals.</p>
        </section>
      </div>

    )
  }
}

export default Info;
