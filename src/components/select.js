import React, { Component } from 'react';
import './App.css'


const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

const prices = {'USD': 1};
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
      amount: '',
      hits: [],
      coin: '',
      resultCoin: '',

    };

    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
      this.pricer();
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
    var cash = this.state.amount
    var sent = cash / prices[this.state.fromType];
    var recieved = cash / prices[this.state.toType]
    if (cash <= myBalance) {
      alert('Converted ' + sent  + ' ' + this.state.fromType + ' to\n' +
    recieved + ' ' +  this.state.toType + '\nA total value of $' + round(cash, 2));
  } else if (this.state.amount === 0){
    alert('Enter an amount to convert');
  } else {
    alert('You have insufficient funds');
  }
    event.preventDefault();
  }


  inputChanged() {
    this.setState({
      amount: this.dollar.value,
      coin: ''
    })
  }

  coinChanged() {
    var coinAmount = this.coin.value * prices[this.state.fromType]
    this.setState({
      resultCoin: '',
      coin: this.coin.value,
      amount: coinAmount
    })

  }

  resultCoinChanged() {
    var coinAmount = this.resultCoin.value * prices[this.state.toType]
    this.setState({
      coin: '',
      resultCoin: this.resultCoin.value,
      amount: coinAmount
    })
  }

  pricer() {
    this.state.hits.map(hit =>
      prices[hit.symbol.toLowerCase()] = hit.price_usd
    )
  }

  render() {


    var style = {"border": "1px solid black"}
    var inputStyle = {"color": "lightblue", "backgroundColor": "black", "borderTop": "1px solid cyan", "borderLeft": "1px solid cyan"}
    const cyanBorder = {"border": "1px solid cyan", "color": "white"}

    const isInvalid = this.state.amount === 0 || this.state.fromType === '' || this.state.toType === '' || this.state.fromType === this.state.toType;

    const myPrices = round(this.state.amount, 2).toLocaleString("currency");
    const price1 = round(prices[this.state.fromType], 6);
    const price2 = round(prices[this.state.toType], 6);

    return (

      <div className="container" id="content">

        <div className="container">
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
          {/* From Amount */}

          <div className="input-group">

          <input defaultValue='' placeholder={'$USD →'} step={.01} min={0} max={10 ** 8} onChange={e => this.inputChanged()}
             className=" input-group-prepend bg-dark text-light form-control" type="number" ref={ el => this.dollar = el }
           style={cyanBorder} value={round(this.state.amount, 2)}/>

            <select  className=" form-control" defaultValue="btc" onChange={this.handleFromChange} style={style}>
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
              <option value="usd">$-USD</option>
            </select>

            <input defaultValue='' placeholder={'← ' + this.state.fromType.toUpperCase()} step={10**-8} min={0} max={10 ** 8} onChange={e => this.coinChanged()}
               className=" input-group-append bg-dark text-light form-control" type="number" ref={ el => this.coin = el }
             style={cyanBorder}  value={this.state.coin} />

           </div>
           <div className="justify-content-between">
                 <small><i className="fa fa-arrow-up"></i> {'Enter $-USD, ' + this.state.toType.toUpperCase() + ' '}<i className="fa fa-arrow-down"></i>{', or ' +
                   this.state.fromType.toUpperCase() + ' '}
                 </small>
               <small><i className="fa fa-arrow-up"></i></small>
           </div>




      <div className="input-group" >
        <div className="input-group-prepend">
          <select className="form-control" defaultValue="eth" onChange={this.handleToChange}>
            <option value="usd">$-USD</option>
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
        <input
          defaultValue='' placeholder={'← ' + this.state.toType.toUpperCase()} step={10**-8} min={0} max={10 ** 8} onChange={e => this.resultCoinChanged()}
           className="bg-dark text-light form-control" type="number" ref={ el => this.resultCoin = el }
         style={cyanBorder} value={this.state.resultCoin}
       />
    </div>
    <button disabled={isInvalid} className="btn btn-block btn-success"  type="submit">
      <i className="fa fa-bolt"></i>{' Trade $' + myPrices}
    </button>
</form>
    </div>
      <div>
        <p className="result" style={inputStyle}>{'$'+myPrices}

          {' ➠ '+round(this.state.amount / price1, 8) + ' ' + this.state.fromType.toUpperCase() + '(1 ' + this.state.fromType + ' = ' + price1.toLocaleString("currency") +') ☟ '}</p>
      </div>
      <div isHidden={this.state.fromType === 'usd'}>
        <p className="result" style={inputStyle}>{round(this.state.amount / price2, 6) + ' ' + this.state.toType.toUpperCase()+ '(1 ' + this.state.toType + ' = ' + price2.toLocaleString("currency") + ')'}
      </p>
      </div>


    </div>

    );
  }
}
