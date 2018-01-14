import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import ExampleChart from '../components/chart'
import Converter from '../components/converter'
import '../App.css'

import Welcome from '../components/balance'

class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
    var chart = {
    "margin": "0",
    "top": "50%",
    "left": "50%",
    "border": "1px solid black"
  }
  var formStyle = {
    "border": "1px solid black",
    "paddingBottom": "100px"
  }

    var execute = {"paddingTop": "40px"}
    var header = {"paddingTop": "10px"}


    var balance = function () {
      return (
        <p>
          $50,58.19 <small> (+3% last day)</small>
        </p>
      )
    }
    return (
      <div>
        <Navigation />

            <div style={header}>
              <header role="banner">
                <h1>My Dashboard</h1>
              </header>
              <div style={chart}>
                <ExampleChart />
              </div>
              <div className="welcome-message">
                  <Welcome name="Tyler" balance="$5,058.19"/>
                  {balance}
              </div>
              {/* <section>
                <div>
                  <p>Total Balance: $1550.00</p>
                </div>
                <div>
                  <p>Bitcoin Balance: $800.00 - 0.05 BTC </p>
                </div>
                <div>
                  <p>Ethereum Balance: $400.00 - 0.5 ETH </p>
                </div>
                <div>
                  <p>LiteCoin Balance: $200.00 - 0.5 LTC </p>
                </div>
                <div>
                  <p>Monero Balance: $100.00 - 0.3 XMR </p>
                </div>
                <div>
                  <p>Ripple Balance: $50.00 - 50 XRP </p>
                </div>
              </section> */}

            </div>

        <div style={formStyle}>
          <Converter />
          <div style={execute}>
            <button className="btn btn-round btn-outline-dark" type="button" onClick={(e) => this.executeTrade(e)}><p>Execute Trade</p></button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>




        );
  }
}

export default Dashboard;
