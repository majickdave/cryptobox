import React, { Component } from 'react';
import './App.css'

import Fetcher from './fetcher'

import Welcome from '../components/balance'
import ExampleChart from '../components/chart'
import Select from '../components/select'


class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
  const Color = {"backgroundColor": "#415772", "color": "#f2f2f2"}
  const padding = {"marginTop": "15px"}


    return (
            <div className="bg-light ">
              <header role="banner">
                <h1>My Dashboard</h1>
                <Welcome name="Tyler" balance="5000"/>
              </header>
              <div>
                <div className="row">
                  <div className="col-sm">
                    <div className="card-1">
                      <ExampleChart />
                    </div>
                  </div>
                    <div className="col-sm card-1" id="section1" style={Color}>
                      <Select />
                    </div>
              </div>

          <div className="bg-dark text-light container card-5" style={padding}>

              <u><h1>Top 100 Currencies</h1></u>
              <Fetcher />
            </div>

          </div>
          <h1>Live prices powered by <a href="https://coinmarketcap.com">coinmarketcap.com</a> </h1>
        </div>




        );
  }
}

export default Dashboard;
