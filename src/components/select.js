import React, { Component } from 'react';


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
