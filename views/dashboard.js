import React, { Component } from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import ExampleChart from '../components/chart'
import Select from '../components/select'
import '../App.css'
import round from '../js/round';

import Welcome from '../components/balance';

const prices = {
    usd: 1,
    btc: 12062.20,    // Bitcoin
    eth:1075.75,      // Ethereum
    ltc: 199.15,      // Litecoin
    bch: 1948.04,     // Boitcoin Cash
    xrp: 1.35,        // Ripple
    ada: 0.621833,    // Cardano
    xem: 1.10,  // NEM
    neo: 147.63,  // neo
    xlm: 1.10,  // Stellar
    miota: 3.00,  // IOTA
    eos: 10.79,  // EOS
    dash: 795.20,  // DASH
    xmr: 342.83, // Monero
    trx: 10.79,  // TRON
    btg: 213.04,  // Bitcoin Gold
    etc: 32.23,  // Ethereum Classic
    qtum: 40.77,  // Qtum
    icx: 7.60,  // ICON
    lsk: 22.72,  // Lisk
    xrb: 16.12,  // RaiBlocks
    ardr: 1.94,  // Ardor
    omg: 18.16,  // OmiseGO
    ppt: 44.49,  // Populous
    zec: 527.84  // Zcash
}

const myBalance = 5058.19;


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.myBalance = this.props.myBalance;
    this.type = this.props.type;
  }

  handleChange(event) {
    this.type = event.target.value;
  }

  handleSubmit(event) {
    var cash = this.props.amount * prices[this.props.type]
    var result = cash / prices[this.props.toType];
    if (cash <= myBalance) {
      alert('Converted ' + this.props.amount + ' ' + this.props.type + ' to\n' +
    result + ' ' +  this.props.toType + '\nA total value of $' + round(cash, 2));
  } else if (this.props.amount === 0){
    alert('Enter an amount to convert');
  } else {
    alert('You have insufficient funds');
  }
    event.preventDefault();
  }

  inputChanged() {
    this.myBalance = this.inputEl.value;
  }


  render() {
    var style = {"border": "1px solid black"}
    var resultStyle = {"color": "#000", "backgroundColor": "#e1dec7", "border": "2px double #88847d"}
    var paddingStyle = {"padding": "20px"};
    var equivalencies = {"color": "white", "backgroundColor": "#aaa"};
    var enter = {"color": "white", "background": "#080333"};

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

    var toType = 'usd';
    var fromType = 'btc';
    var amount = 1;
    return (

      <div>
        <Navigation />

            <div style={header}>
              <header role="banner">
                <h1>My Dashboard</h1>
              </header>
              <div style={chart}>
                <ExampleChart />
              </div>
              <div className="welcome-message">
                <Welcome name="Tyler" currentBalance={5058.19} previousBalance={5000}/>
              </div>
            </div>

        <div style={formStyle}>
          <form onSubmit={this.props.handleSubmit}>
            <p style={enter}>{prices[fromType]}
              1 {fromType} = ${round(prices[fromType], 2)}
            </p>
            <div style={formStyle}>
              <Select type='usd'/>
            </div>
            <input  placeholder="enter an amount" step={0.0025} min={0} max={10 ** 20} onChange={e => this.inputChanged()}
              type="number" style={style} ref={ el => this.inputEl = el }/>
            <div style={formStyle}>
              <Select type='btc'/>
            </div>
            <p style={equivalencies}>
              1 {toType} = ${round(prices[toType], 2)}
            </p>
            <div>
              <p style={resultStyle}>{(amount * prices[fromType]) / prices[toType] + ' ' + toType}</p>
            </div>
            <div style={paddingStyle}>
              <input  className="btn btn-outline-success"  type="submit" value={"Execute Trade for $" + round(amount * prices[fromType], 2)}></input>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>




        );
  }
}

export default Dashboard;
