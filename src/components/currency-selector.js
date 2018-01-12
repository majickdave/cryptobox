import React, { Component } from 'react';


export default class Selector extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromValue: '',
      toValue: ''
    }
}

setChange(e) {
  e.preventDefault();
  console.log("Conversion executed!")
}
setValue(e) {
  e.preventDefault();
  console.log("Value set!")
  this.setState({fromValue: 'The value has been set'})
}

render() {
    var style={"color": "darkblue", "border": "1px solid black"};
    return (
      <div>
        <form onSubmit={(e) => this.setChange(e)}>
        <select name="fromValue" style={style} onChange={(e) => this.setValue(e)}>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="ltc">LTC</option>
          <option value="xmr">XMR</option>
          <option value="xrp">XRP</option>
          <option value="usd">USD</option>
        </select>
      <p>to</p>
      <select name="toValue" style={style}>
        <option value="usd">USD</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
        <option value="ltc">LTC</option>
        <option value="xmr">XMR</option>
        <option value="xrp">XRP</option>
      </select>
      <div>
        <button type="submit">
          Execute
        </button>
      </div>
      </form>
      </div>
    );
}
}

Selector.defaultProps = {
  from: 'btc',
  to: 'usd'
};
