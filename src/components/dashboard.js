import React, { Component } from 'react';
import './App.css'
import './select.css'

import Fetcher from './fetcher'

import Welcome from '../components/balance'
import ExampleChart from '../components/chart'
import Select from '../components/select'
// import UserPage from  './UI'


class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
  const Color = {"backgroundColor": "#415772"}
  const utilize = {"marginTop": "40px"}

  const white = {"backgroundColor": "white"}

    return (
      <div className="bg-light">
        <header role="banner">
            <h1><span role="img" aria-labelledby="megaphone">Welcome 🏡</span></h1>
            </header>



        <div style={white} className="container card-4" >
          <Welcome percent={3.3} color="#7da916" name="" balance={20000} time="past day"/>
          <ExampleChart />

      </div>
      <div style={utilize}>
        <h1><i className="fa fa-calculator"></i></h1>
        <h1>Make exchanges using USD<span role="img" aria-labelledby="US Dollars"> 💵</span></h1>
      </div>
        <div  className="text-light calculator card-4">
          <div id="section1" style={Color}>
            <Select />
          </div>
        </div>
        <div className="bg-dark text-light">
        <Fetcher />
        <small className="text-muted">Live prices powered by <a href="https://coinmarketcap.com">coinmarketcap.com</a> </small>
      </div>
    </div>




        );
  }
}

export default Dashboard;
