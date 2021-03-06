import React, { Component } from 'react';
import './App.css'
import dateFormat from 'dateformat';
import './select.css'
import round from '../js/round'


const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

const prices = {'USD': 1};
const myBalance = 20000;


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromType: 'btc',
      toType: 'usd',
      amount: '',
      hits: [],
      coin: '',
      resultCoin: '',
      display: ''
    };

    this.handleToChange = this.handleToChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
      this.pricer();
  }

  componentDidMount() {
    return this.fetcher();
  }

  fetcher() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
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
    if (cash <= 0){
      alert('Enter a valid amount to convert');
    }  else if (myBalance >= cash) {
    alert('Converted ' + sent  + ' ' + this.state.fromType + ' to\n' +
    recieved + ' ' +  this.state.toType + '\nA total value of $' + round(cash, 2));
    this.setState({
      coin: '',
      resultCoin: '',
      display: '',
      amount: ''
    })
  } else {
    alert('You have insufficient funds');
  }

    event.preventDefault();
  }


  inputChanged() {
    this.setState({
      amount: this.dollar.value,
      coin: '',
      resultCoin: ''

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

  onComponentDidChange() {
    if (this.state.display !== this.state.amount.toString()) {
      this.setState({display: this.state.amount})
    }
  }

  pricer() {
    this.state.hits.map(hit =>
      prices[hit.symbol.toLowerCase()] = hit.price_usd
    )
  }

  timer() {
    return 'updated ' + dateFormat(Date(this.state.hits.slice(0).last_updated), "h:MM:ss TT")
  }

  render() {

    const paddingTop = {"paddingTop": "2px"}


    const isInvalid = this.state.amount === 0 || this.state.amount === '' || this.state.fromType === '' || this.state.toType === '' || this.state.fromType === this.state.toType;

    const myPrices = round(this.state.amount, 2).toLocaleString("currency");
    const price1 = round(prices[this.state.fromType], 6);
    const price2 = round(prices[this.state.toType], 6);

    const disabled = this.state.toType === 'usd';


    return (

      <div id="content" className="m-0 p-1" >
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
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
               placeholder={round(this.state.amount, 2)} onChange={e => this.inputChanged()} min={0} step={1}
               className=" container form-control" type="number" ref={ el => this.dollar = el }
           />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <small hidden={!disabled}><i className="fa fa-arrow-up"></i>
          {' buy ' + this.state.fromType.toUpperCase() + ' with $-USD '}
          </small>


          <div className="input-group" style={paddingTop}>



            <select  className=" input-group-append form-control" defaultValue={this.state.fromType} onChange={this.handleFromChange} >
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
            <input step={10**-20} min={0}
              placeholder={round(this.state.amount / price1, 8) + ' ' + this.state.fromType.toUpperCase()}
             onChange={e => this.coinChanged()}
               className="form-control" type="number" ref={ el => this.coin = el }
               value={this.state.coin} />

           </div>
           <div className="justify-content-between p-2">


                 <small hidden={disabled}> {'Trade ' + this.state.fromType.toUpperCase() + ' for ' +
                   this.state.toType.toUpperCase() + ' '}
                   <i className="fa fa-arrow-down"></i>
                   <i className="fa fa-arrow-up"></i>
                 </small>

           </div>




      <div className="input-group" >
          <select className="input-group-prepend form-control" defaultValue={this.state.toType} onChange={this.handleToChange} >
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

          <input step={10**-20} min={0}
            value={this.state.resultCoin}
             placeholder={round(this.state.amount / price2, 6) + ' ' + this.state.toType.toUpperCase()}  onChange={e => this.resultCoinChanged()}
             className="form-control input-group-append" type="number" ref={ el => this.resultCoin = el }
           hidden={disabled}
         />


    </div>
    <div className="p-3">
      <button disabled={isInvalid} className="btn btn-block btn-success "  type="submit" >
        <i className="fa fa-bolt"></i>{' Trade $' + myPrices}
      </button>
    </div>






</form>

      {/* <div>
        <p className="result" style={inputStyle}>{'$'+myPrices}

          {' ➠ '+round(this.state.amount / price1, 8) + ' ' + this.state.fromType.toUpperCase() + ' (1 ' + this.state.fromType + ' = $' + price1.toLocaleString("currency") +') ☟ '}</p>
      </div>
      <div hidden={disabled}>
        <p className="result" style={inputStyle}>{round(this.state.amount / price2, 6) + ' ' + this.state.toType.toUpperCase()+ ' (1 ' + this.state.toType + ' = $' + price2.toLocaleString("currency") + ')'}
      </p>
      </div> */}


    </div>

    );
  }
}
