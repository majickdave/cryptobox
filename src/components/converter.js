import React, { Component } from 'react';

class Converter extends Component {
  executeTrade(e) {
    e.preventDefault();
    console.log("trade executed!");
  }
  render() {
    var startValue = 1
    var endValue = 16000;


    return (
      <section>

        <form onSubmit={(e) => this.executeTrade(e)}>
          <div>
            <p>Choose an Amount</p>
            <input type="number" value={startValue}/>
            <select name="coins">
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="ltc">LTC</option>
              <option value="xmr">XMR</option>
              <option value="xrp">XRP</option>
              <option value="usd">USD</option>
            </select>
            <p>Then convert it to</p>
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
            <p>result: </p><input type="number" value={endValue}></input>
          </div>
          <button type='submit'>Execute Trade</button>
        </form>
      </section>
    )
  }
}

export default Converter;
