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
                <h1><span role="img" aria-labelledby="megaphone">Welcome 🏡</span></h1>
                {/* <Welcome name="Tyler" balance="5000"/> */}
                {/* <UserPage /> */}
            </header>
          <div>
                    {/* <div className="card-1" style={marginBottom}>
                      <ExampleChart />
                  </div> */}


              <div className="card-3 fixed" id="section1" style={Color}>
                <Select />
              </div>
            </div>
            <div className="col-sm">
              <div className="bg-dark text-light" style={padding}>
              <Fetcher />
            </div>
          </div>

          <small className="text-muted">Live prices powered by <a href="https://coinmarketcap.com">coinmarketcap.com</a> </small>
        </div>




        );
  }
}

export default Dashboard;
