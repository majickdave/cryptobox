import React, { Component } from 'react';


export default class Select extends Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  select(e, value) {
    e.preventDefault();
    return this.props.select(value)
  }

  render() {
    var style={"color": "black", "border": "1px solid black"};
    return (
      <div>
        <select value={this.props.value} style={style} onChange={(e) => this.select(e, this.select.value)}>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="ltc">LTC</option>
          <option value="xmr">XMR</option>
          <option value="xrp">XRP</option>
          <option value="usd">USD</option>
        </select>
      </div>
    );
  }
}
