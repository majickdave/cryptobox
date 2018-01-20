import React, { Component } from 'react';

import ExampleChart from '../components/chart'
import Select from '../components/select'
import './App.css'
import Welcome from '../components/balance'
import Fetcher from './fetcher'


class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
    var chart = {
    "margin": "0",
    "top": "50%",
    "left": "50%"
  }
  // var formStyle = {
  //   "border": "1px solid black",
  //   "paddingBottom": "100px"
  // }

    return (
      <div >
            <div className="bg-light">
              <header role="banner">
                <h1>My Dashboard</h1>
              </header>
              <div className="card">
                <ExampleChart />
              </div>
              <div className="welcome-message">
                <Welcome name="Tyler" balance="5000"/>
              </div>
            </div>
            <Select />

        <div className="card bg-dark text-light">

          <Fetcher />
        </div>
        <h1>Live prices powered by <a href="https://coinmarketcap.com">coinmarketcap.com</a> </h1>
      </div>




        );
  }
}

export default Dashboard;
