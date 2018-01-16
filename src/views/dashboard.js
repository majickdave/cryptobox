import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import ExampleChart from '../components/chart'
import Select from '../components/select'
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

    var header = {"paddingTop": "30px"}
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
                <h3>Greetings, your balance is:</h3><Welcome name="Tyler" balance="$5,058.19"/>
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
          <Select />
        </div>
        <div>
          <Footer />
        </div>
      </div>




        );
  }
}

export default Dashboard;
