import React, { Component } from 'react';
import './App.css'
import './select.css'

import Fetcher from './fetcher'

// import Welcome from '../components/balance'
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

    return (
      <div className="d-flex-lg">
        {/* <header role="banner">
            <h1><span role="img" aria-labelledby="megaphone">Welcome 🏡</span></h1>
            <h2>Please Scroll Down</h2>
            </header>

            <div style={white} className="container card" >
              <Welcome percent={100+'%'} color="#7da916" name="" balance={20000} time="past day"/>


          </div> */}


      {/* <div className="container" >
        <a href="#calculator"  style={{"color": "#415772"}}><h1 ><i className="fa fa-angle-down text-success animated bounce infinite"></i></h1></a>
        <h2>Make exchanges using USD<span role="img" aria-labelledby="US Dollars"> 💵</span></h2>

      </div> */}


        <div  className="text-light fixed-calc card-2 gradient-blue" id="calculator">
          <div className="d-flex-lg" id="section1" >
          <div hidden={this.state.hidden}>
            <Select />
          </div>
          <div className="hide-button" onClick={e => this.hideThis(e)} >
              <i className="fa fa-chevron-up btn" hidden={this.state.hidden}></i>
              <i className="fa fa-chevron-down btn" hidden={!this.state.hidden} ></i>
          </div>
          </div>
        </div>


        <div className="justify-content-left" id="prices" style={{"width": "100%"}}>

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
