import React, { Component } from 'react';


const prices = {
    usd: 1,
    btc: 10802.70,    // Bitcoin
    eth: 957.74,      // Ethereum
    ltc: 173.39,      // Litecoin
    bch: 1709.28,     // Boitcoin Cash
    xrp: 1.06,        // Ripple
    ada: 0.537430,    // Cardano
    xem: 0.850907,  // NEM
    neo: 121.86,  // neo
    xlm: 0.378031,  // Stellar
    miota: 2.47,  // IOTA
    eos: 9.48,  // EOS
    dash: 710.13,  // DASH
    xmr: 290.87, // Monero
    trx: 0.048295,  // TRON
    btg: 176.87,  // Bitcoin Gold
    etc: 26.26,  // Ethereum Classic
    qtum: 34.17,  // Qtum
    icx: 6.59,  // ICON
    lsk: 19.03,  // Lisk
    xrb: 14.35,  // RaiBlocks
    ardr: 1.58,  // Ardor
    omg: 16.05,  // OmiseGO
    ppt: 36.90,  // Populous
    zec: 497.79  // Zcash
}

const myBalance = 5058.19;

const round = function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromType: 'usd',
      toType: 'usd',
      amount: 0
    };

    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(event) {
    this.setState({fromType: event.target.value});
  }

  handleToChange(event) {
    this.setState({toType: event.target.value});
  }

  handleSubmit(event) {
    var cash = this.state.amount * prices[this.state.fromType]
    var result = cash / prices[this.state.toType];
    if (cash <= myBalance) {
      alert('Converted ' + this.state.amount + ' ' + this.state.fromType + ' to\n' +
    result + ' ' +  this.state.toType + '\nA total value of $' + round(cash, 2));
  } else if (this.state.amount === 0){
    alert('Enter an amount to convert');
  } else {
    alert('You have insufficient funds');
  }
    event.preventDefault();
  }


  inputChanged() {
    this.setState({
      amount: this.inputEl.value
    })
  }

  render() {


    var style = {"border": "1px solid black"}
    var resultStyle = {"color": "#000", "backgroundColor": "#e1dec7", "border": "2px double #88847d"}
    var paddingStyle = {"padding": "20px"};
    var equivalencies = {"color": "white", "backgroundColor": "#aaa"};
    var enter = {"color": "white", "background": "#080333"};

    return (
    <section>
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <p style={enter}>{this.state.fromPrice}
            1 {this.state.fromType} = ${round(prices[this.state.fromType], 2)}
          </p>
          <select defaultValue="" onChange={this.handleFromChange} style={style}>
            <option value="" disabled>Choose your favorite currency</option>
            <option value="btc">Bitcoin</option>
            <option value="eth">Ethereum</option>
            <option value="bch">Bitcoin Cash</option>
            <option value="ltc">Litecoin</option>
            <option value="xrp">Ripple</option>
            <option value="ada">Cardano</option>
            <option value="xem">NEM</option>
            <option value="neo">NEO</option>
            <option value="xlm">Stellar</option>
            <option value="miota">IOTA</option>
            <option value="eos">EOS</option>
            <option value="dash">DASH</option>
            <option value="xmr">Monero</option>
            <option value="trx">TRON</option>
            <option value="btg">Bitcoin Gold</option>
            <option value="etc">Ethereum Classic</option>
            <option value="qtum">Qtum</option>
            <option value="icx">ICON</option>
            <option value="lsk">Lisk</option>
            <option value="xrb">RaiBlocks</option>
            <option value="ardr">Ardor</option>
            <option value="omg">OmiseGO</option>
            <option value="ppt">Populous</option>
            <option value="zec">Zcash</option>
            <option value="usd">USD</option>
          </select>
        </div>
          <div >
          <input  placeholder="enter an amount" step={0.0025} min={0} max={10 ** 20} onChange={e => this.inputChanged()}
            type="number" style={style} ref={ el => this.inputEl = el }/>

          </div>
      <div>
        <select defaultValue="" onChange={this.handleToChange} style={style}>
          <option value="" disabled>Convert it to...</option>
          <option value="btc">Bitcoin</option>
          <option value="eth">Ethereum</option>
          <option value="bch">Bitcoin Cash</option>
          <option value="ltc">Litecoin</option>
          <option value="xrp">Ripple</option>
          <option value="ada">Cardano</option>
          <option value="xem">NEM</option>
          <option value="neo">NEO</option>
          <option value="xlm">Stellar</option>
          <option value="miota">IOTA</option>
          <option value="eos">EOS</option>
          <option value="dash">DASH</option>
          <option value="xmr">Monero</option>
          <option value="trx">TRON</option>
          <option value="btg">Bitcoin Gold</option>
          <option value="etc">Ethereum Classic</option>
          <option value="qtum">Qtum</option>
          <option value="icx">ICON</option>
          <option value="lsk">Lisk</option>
          <option value="xrb">RaiBlocks</option>
          <option value="ardr">Ardor</option>
          <option value="omg">OmiseGO</option>
          <option value="ppt">Populous</option>
          <option value="zec">Zcash</option>
          <option value="usd">USD</option>
        </select>
      <p style={equivalencies}>
        1 {this.state.toType} = ${round(prices[this.state.toType], 2)}
      </p>
      </div>
      <div>
        <p style={resultStyle}>{(this.state.amount * prices[this.state.fromType]) / prices[this.state.toType] + ' ' + this.state.toType}</p>
      </div>
      <div>
      </div>
      <div style={paddingStyle}>
        <input  className="btn btn-outline-success"  type="submit" value={"Execute Trade for $" + round(this.state.amount * prices[this.state.fromType], 2)}></input>
      </div>
      </form>
    </div>
    </section>
    );
  }
}
