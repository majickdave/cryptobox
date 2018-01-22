import React, { Component } from 'react';
import './App.css'

import Fetcher from './fetcher'

// import Welcome from '../components/balance'
// import ExampleChart from '../components/chart'
import Select from '../components/select'
// import UserPage from  './UI'


class Dashboard extends Component {

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }


  render() {
  const Color = {"backgroundColor": "#415772", "color": "#f2f2f2"}
  const padding = {"marginTop": "15px"}
    // const marginBottom = {"marginBottom": "15px"}


    return (
            <div className="bg-light ">
              <header role="banner">
                <div className="header">
                <h1>Dashboard</h1>
                {/* <Welcome name="Tyler" balance="5000"/> */}
                {/* <UserPage /> */}
              </div>
              </header>
              <div>
                    {/* <div className="card-1" style={marginBottom}>
                      <ExampleChart />

                  </div> */}
                    <div className="card-3" id="section1" style={Color}>
                      <Select />
                    </div>

          <div className="bg-dark text-light" style={padding}>

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
