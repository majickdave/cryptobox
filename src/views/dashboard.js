import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import ExampleChart from '../components/chart'
import Converter from '../components/converter'

class Dashboard extends Component {


  render() {
    return (
      <div>
        <Navigation />
        <section>
          <header role="banner">
            <h1>Dashboard</h1>
            <div className="row">
              <div>
                <ExampleChart />
              </div>
              <hr></hr>
              <div>
                <p>Bitcoin Balance: $800 - 0.05 BTC </p>
              </div>
              <div>
                <p>Ethereum Balance: $400 - 0.5 ETH </p>
              </div>
              <div>
                <p>LiteCoin Balance: $200 - 0.5 LTC </p>
              </div>
              <div>
                <p>Monero Balance: $100 - 0.3 XMR </p>
              </div>
              <div>
                <p>Ripple Balance: $50 - 50 XRP </p>
              </div>
            </div>
          </header>
        </section>
        <div>
          <Converter />
        </div>
      <Footer />
      </div>




        );
  }
}

export default Dashboard;
