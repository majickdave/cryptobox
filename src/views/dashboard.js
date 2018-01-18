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
            <div style={header}>
              <header role="banner">
                <h1>My Dashboard</h1>
              </header>
              <div style={chart}>
                <ExampleChart />
              </div>
              <div className="welcome-message">
                <Welcome name="Tyler" balance="$5,058.19"/>
              </div>
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
