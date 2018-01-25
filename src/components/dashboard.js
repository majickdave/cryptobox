import React, { Component } from 'react';
import './App.css'
import './select.css'

import Fetcher from './fetcher'

import Welcome from '../components/balance'
// import ExampleChart from '../components/chart'
import Select from '../components/select'
// import UserPage from  './UI'


class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
  const utilize = {"marginTop": "40px"}
  const white = {"backgroundColor": "white"}

  const backgroundColor = {"backgroundColor": "#415772", "maxWidth": "500px", "maxHeight": "200px", "left": "200vw"}

    return (
      <div className="d-flex-lg bg-light">

        <header role="banner">
          <div className="alert alert-danger" role="alert">

            <p><span role="img" aria-labelledby="welcome">⛔️ There is currently an issue with CoinmarketCap's API</span></p>
            <small className="text-muted">Please visit <a href="https://coinmarketcap.com">coinmarketcap.com</a> while the issue is resolved  </small>
          </div>
        </header>



        <div style={white} className="container card-4" >
          <Welcome percent={100+'%'} color="#7da916" name="" balance={20000} time="past day"/>
          {/* <ExampleChart /> */}

      </div>
      <div style={utilize}>
        <h1><i className="fa fa-calculator"></i></h1>
        <h1>Make exchanges using USD<span role="img" aria-labelledby="US Dollars"> 💵</span></h1>
      </div>
        <div  className="text-light fixed-calc container card-4" style={backgroundColor}>
          <div id="section1" >
            <Select />
          </div>
        </div>
        <div className="container bg-light text-dark">
        <Fetcher />

      </div>
      <div>
        <small className="text-muted">Live prices powered by <a href="https://coinmarketcap.com">coinmarketcap.com</a> </small>
      </div>
    </div>





        );
  }
}

export default Dashboard;
