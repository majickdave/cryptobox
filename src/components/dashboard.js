import React, { Component } from 'react';
import './App.css'
import './select.css'

import Fetcher from './fetcher'

import Welcome from '../components/balance'
// import ExampleChart from '../components/chart'
import Select from '../components/select'
// import UserPage from  './UI'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  executeTrade(e) {
    e.preventDefault();
    alert("Please Leave Feedback")
  }

  hideThis(e) {
    this.setState({hidden: !this.state.hidden})
    e.preventDefault();
  }


  render() {
  const utilize = {"marginTop": "40px"}
  const white = {"backgroundColor": "white"}



    return (
      <div className="d-flex-lg bg-light">
        <header role="banner">
            <h1><span role="img" aria-labelledby="megaphone">Welcome 🏡</span></h1>
            </header>

            <div style={white} className="container card" >
              <Welcome percent={100+'%'} color="#7da916" name="" balance={20000} time="past day"/>
              {/* <ExampleChart /> */}

          </div>

      <div className="container" style={utilize}>
        <a href="#calculator" className="text-dark" style={{"color": "#415772"}}><h1 ><i className="fa fa-angle-down text-success animated bounce infinite"></i></h1></a>
        <h2>Make exchanges using USD<span role="img" aria-labelledby="US Dollars"> 💵</span></h2>

      </div>


        <div  className="text-light fixed-calc container card-2 gradient-blue" id="calculator">
          <div id="section1" hidden={this.state.hidden}>
            <Select />
          </div>
          <button className="btn btn-circle btn-outline-dark text-dark bg-light hide-button card-3" onClick={e => this.hideThis(e)}>
            <i className="fa fa-chevron-up" hidden={this.state.hidden}></i>
            <i className="fa fa-chevron-down" hidden={!this.state.hidden} ></i>
          </button>

        </div>


        <div className="container bg-dark text-light" id="prices" style={{"width": "100%"}}>
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
