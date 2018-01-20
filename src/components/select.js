import React, { Component } from 'react';


const prices = {};

const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

const myBalance = 20000;

const round = function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromType: 'btc',
      toType: 'eth',
      amount: round(Math.random(), 1),
      hits: [],
    };

    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  componentWillUpdate() {
    this.pricer();
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

  pricer() {
    this.state.hits.map(hit =>
      prices[hit.symbol.toLowerCase()] = hit.price_usd
    )
  }

  render() {


    var style = {"border": "1px solid black"}
    var resultStyle = {"color": "lime", "background": "black", "border": "1px solid #fff"}
    var paddingStyle = {"marginTop": "50px"};
    const marginBottom = {"marginBottom": "50px"}


    const isInvalid = this.state.amount === 0 || this.state.fromType === '' || this.state.toType === '' || this.state.fromType === this.state.toType;

    return (

      <div style={paddingStyle} id="content">
        <h4>Currency Converter</h4>

      <form onSubmit={this.handleSubmit}>
        {/* <div className="input-group">

          <input  placeholder="enter an amount of" step={0.0025} min={0} max={10 ** 20} onChange={e => this.inputChanged()}
             className="form-control" type="number" style={style} ref={ el => this.inputEl = el }/>
             <div className="input-group mb-3">

               <input type="text">
               </input>
               <div className="input-group-append">
                 <i class="fa fa-search"></i>
               </div>
             </div>
        </div> */}
        <div className="input-group">
          <input  defaultValue={this.state.amount} placeholder="enter an amount of" step={0.0025} min={0} max={10 ** 20} onChange={e => this.inputChanged()}
             className="form-control" type="number" style={style} ref={ el => this.inputEl = el }/>
          <div className="input-group-append">
            <select defaultValue="btc" onChange={this.handleFromChange} style={style}>
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
            </select>
          </div>
        </div>

      <div>
        <select defaultValue="eth" onChange={this.handleToChange} style={style}>
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
        </select>

      <span className="text-light">
       <p><span>{this.state.fromType} = ${round(prices[this.state.fromType], 2)}</span> ➟ <span>{this.state.toType} = ${round(prices[this.state.toType], 2)} </span></p>
     </span>
      </div>
      <div>
        <p style={resultStyle}>{(this.state.amount * prices[this.state.fromType]) / prices[this.state.toType] + ' ' + this.state.toType}</p>
      </div>
      <div>
      </div>
      <div style={paddingStyle}>
        <button  style={marginBottom} disabled={isInvalid} className="btn btn-success"  type="submit">
          <i class="fa fa-bolt"></i> Trade ${round(this.state.amount * prices[this.state.fromType], 2)}
        </button>
      </div>
      </form>
    </div>

    );
  }
}
