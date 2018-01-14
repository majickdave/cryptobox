import React, { Component } from 'react';


export default class Select extends Component {
  constructor(props) {
  super(props);
    this.state = {
      selected: '',
    }
  }

  select(value, e) {
    e.preventDefault();
    this.setState({selected: value});
  }

  render() {
    var style={"color": "black", "border": "1px solid black"};
    const value = this.props.value;
    return (
      <div>
        <select value={this.props.value} style={style} onChange={(e) => this.select(value, e)}>
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
