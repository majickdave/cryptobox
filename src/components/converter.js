import React, { Component } from 'react';
import '../App.css'

class Converter extends Component {
  executeTrade(e) {
    e.preventDefault();
    console.log("trade executed!");
  }
  render() {
    var style={"color": "darkblue"};
    return (
      <section>

        <form onSubmit={(e) => this.executeTrade(e)} style={style}>
          <div>
            <p>Convert</p>
            <input type="number"/>
            <select name="coins">
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="ltc">LTC</option>
              <option value="xmr">XMR</option>
              <option value="xrp">XRP</option>
              <option value="usd">USD</option>
            </select>
            <p>to</p>
            <select name="coins">
              <option value="usd">USD</option>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="ltc">LTC</option>
              <option value="xmr">XMR</option>
              <option value="xrp">XRP</option>

            </select>
          </div>
          <div>
            <p>result: $16,000</p>
          </div>
        </form>
      </section>
    )
  }
}

export default Converter;
