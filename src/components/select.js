import React, { Component } from 'react';
import btcIcon from '../crypto-icons/btc.svg';


const btcPrice = 12062.20; // Bitcoin
const ethPrice = 1075.75;// Ethereum
const ltcPrice = 199.15; // Litecoin
const bchPrice = 1948.04; // Boitcoin Cash
const xrpPrice = 1.35; // Ripple
const adaPrice = 0.621833; // Cardano
const xemPrice = 1.10;  // NEM
const neoPrice = 147.63;  // neoPrice
const xlmPrice = 1.10;  // Stellar
const miotaPrice = 3.00;  // IOTA
const eosPrice = 10.79;  // EOS
const dashPrice = 795.20;  // DASH
const xmrPrice = 342.83; // Monero
const trxPrice = 10.79;  // TRON
const btgPrice = 213.04;  // Bitcoin Gold
const etcPrice = 32.23;  // Ethereum Classic
const qtumPrice = 40.77;  // Qtum
const icxPrice = 7.60;  // ICON
const lskPrice = 22.72;  // Lisk
const xrbPrice = 16.12;  // RaiBlocks
const ardrPrice = 1.94;  // Ardor
const omgPrice = 18.16;  // OmiseGO
const pptPrice = 44.49;  // Populous
const zecPrice = 527.84;  // Zcash

const round = function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromValue: 'btc',
      toType: 'usd',
      amount: 1,
      result: btcPrice,
      dollars: btcPrice,
      price: btcPrice,
      toPrice: 1
    };

    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFromChange(event) {
    this.inputChanged();
    this.setState({fromValue: event.target.value});
  }

  handleToChange(event) {
    this.inputChanged();
    this.setState({toType: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.dollars < 5058.19) {
      alert('Converted ' + this.state.amount + ' ' + this.state.fromValue + ' To ' +
    this.state.result + ' ' +  this.state.toType + ' A total value of $' + round(this.state.dollars, 2));
  } else if (this.state.dollars === 0){
    alert('Enter an amount to convert');

  } else {
    alert('You have insufficient funds');
  }
    event.preventDefault();
  }



  inputChanged() {
    var fromPrice;
    var toPrice;
    if (this.state.fromValue === 'btc') {
      fromPrice = btcPrice;
    } else if (this.state.fromValue === 'eth') {
      fromPrice = ethPrice;
    } else if (this.state.fromValue === 'bch') {
      fromPrice = bchPrice;
    } else if (this.state.fromValue === 'ltc'){
      fromPrice = ltcPrice;
    } else if (this.state.fromValue === 'xrp'){
      fromPrice = xrpPrice;
    } else if (this.state.fromValue === 'ada'){
      fromPrice = adaPrice;
    } else if (this.state.fromValue === 'xem'){
      fromPrice = xemPrice;
    } else if (this.state.fromValue === 'neo'){
      fromPrice = neoPrice;
    } else if (this.state.fromValue === 'xlm'){
      fromPrice = xlmPrice;
    } else if (this.state.fromValue === 'miota'){
      fromPrice = miotaPrice;
    } else if (this.state.fromValue === 'eos'){
      fromPrice = eosPrice;
    } else if (this.state.fromValue === 'dash'){
      fromPrice = dashPrice;
    } else if (this.state.fromValue === 'xmr'){
      fromPrice = xmrPrice;
    } else if (this.state.fromValue === 'trx'){
      fromPrice = trxPrice;
    } else if (this.state.fromValue === 'btg'){
      fromPrice = btgPrice;
    } else if (this.state.fromValue === 'etc'){
      fromPrice = etcPrice;
    } else if (this.state.fromValue === 'qtum'){
      fromPrice = qtumPrice;
    } else if (this.state.fromValue === 'icx'){
      fromPrice = icxPrice;
    } else if (this.state.fromValue === 'lsk'){
      fromPrice = lskPrice;
    } else if (this.state.fromValue === 'xrb'){
      fromPrice = xrbPrice;
    } else if (this.state.fromValue === 'ardr'){
      fromPrice = ardrPrice;
    } else if (this.state.fromValue === 'omg'){
      fromPrice = omgPrice;
    } else if (this.state.fromValue === 'ppt'){
      fromPrice = pptPrice;
    } else if (this.state.fromValue === 'zec'){
      fromPrice = zecPrice;
    }

    if (this.state.toType === 'btc') {
      toPrice = btcPrice;
    } else if (this.state.toType === 'eth') {
      toPrice = ethPrice;
    } else if (this.state.toType === 'bch') {
      toPrice = bchPrice;
    } else if (this.state.toType === 'ltc'){
      toPrice = ltcPrice;
    } else if (this.state.toType === 'xrp'){
      toPrice = xrpPrice;
    } else if (this.state.toType === 'ada'){
      toPrice = adaPrice;
    } else if (this.state.toType === 'xem'){
      toPrice = xemPrice;
    } else if (this.state.toType === 'neo'){
      toPrice = neoPrice;
    } else if (this.state.toType === 'xlm'){
      toPrice = xlmPrice;
    } else if (this.state.toType === 'miota'){
      toPrice = miotaPrice;
    } else if (this.state.toType === 'eos'){
      toPrice = eosPrice;
    } else if (this.state.toType === 'dash'){
      toPrice = dashPrice;
    } else if (this.state.toType === 'xmr'){
      toPrice = xmrPrice;
    } else if (this.state.toType === 'trx'){
      toPrice = trxPrice;
    } else if (this.state.toType === 'btg'){
      toPrice = btgPrice;
    } else if (this.state.toType === 'etc'){
      toPrice = etcPrice;
    } else if (this.state.toType === 'qtum'){
      toPrice = qtumPrice;
    } else if (this.state.toType === 'icx'){
      toPrice = icxPrice;
    } else if (this.state.toType === 'lsk'){
      toPrice = lskPrice;
    } else if (this.state.toType === 'xrb'){
      toPrice = xrbPrice;
    } else if (this.state.toType === 'ardr'){
      toPrice = ardrPrice;
    } else if (this.state.toType === 'omg'){
      toPrice = omgPrice;
    } else if (this.state.toType === 'ppt'){
      toPrice = pptPrice;
    } else if (this.state.toType === 'zec'){
      toPrice = zecPrice;
    } else {
      toPrice = 1;
    }

    this.setState({
      amount: this.inputEl.value,
      result: (this.inputEl.value * fromPrice) / toPrice,
      dollars: this.inputEl.value * fromPrice,
      price: fromPrice,
      toPrice: toPrice

    })
  }

  render() {


    var style = {"border": "1px solid black"}
    var resultStyle = {"color": "#000", "backgroundColor": "#e1dec7", "border": "2px double #88847d"}
    var paddingStyle = {"padding": "20px"};

    return (
    <section>
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Pick your favorite currency:
          <select value={this.state.value} onChange={this.handleFromChange} style={style}>

            <option selected value="btc">Bitcoin</option>
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
          </select>
          </label>
        </div>
          <div>
          <input placeholder="enter an amount" step={0.0025} min={0} max={10 ** 20} onChange={e => this.inputChanged()}
            type="number" style={style} ref={ el => this.inputEl = el }/><p>{this.state.fromPrice}
            1 {this.state.fromValue} = ${round(this.state.price, 2)}</p>
          </div>
      <div>
        <label>
          Convert it to:
        <select value={this.state.value} onChange={this.handleToChange} style={style}>
          <option selected value="btc"><span role="img" aria-labelledby="usd">Bitcoin<img src={btcIcon} alt="bitcoin-icon"></img> </span></option>
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
          <option selected value="usd">
              <span role="img" aria-labelledby="usd">USD 💵 </span>
            </option>
        </select>
      </label>
      <p>
      1 {this.state.toType} = ${round(this.state.toPrice, 2)}</p>
      </div>
      <div>
        <p style={resultStyle}>{this.state.result + ' ' + this.state.toType}</p>
      </div>
      <div>
      </div>
      <div style={paddingStyle}>
        <input  className="btn btn-outline-success"  type="submit" value={"Execute Trade for $" + round(this.state.dollars, 2)}></input>
      </div>
      </form>
    </div>
    </section>
    );
  }
}
