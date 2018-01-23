import React, { Component } from 'react';
import round from '../js/round';


const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
    this.refreshPrices = this.refreshPrices.bind(this)
  }

  componentDidMount() {
    if (!this.refreshPrices) {
      this.refreshPrices()
    }

  }

  refreshPrices() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
      const { hits } = this.state;

      function percentChange(percent) {
      var color;
        if (parseFloat(percent) >= 0) {
          color = "lime"
        } else {
          color = "orangered"
        }
        var size = Math.abs(percent / 100) + 1
        const style = {"color": color, "fontSize":`${size}em` }
        return style
      }
      const padding = {"paddingTop": "30px"}
      return (
        <div>
          <header>
            <button type="button" className="btn btn-block btn-outline-light" onClick={this.refreshPrices}>
              <span role="img" aria-labelledby="reload">Refresh Prices 📡</span></button>

          <h2>Top 100 Cryptocurrencies</h2>

          </header>

          {hits.map(hit =>
            <div  className="container" key={hit.id}>
              <div style={padding}>#{hit.rank}</div>
              <p>{hit.name}</p><p style={percentChange(hit.percent_change_24h)}>({hit.symbol})</p>
                <h1 style={percentChange(hit.percent_change_24h)}>${round(hit.price_usd, 6)} </h1>
              <p style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% <small>past day</small></p>
              <small style={percentChange(hit.percent_change_1h)}>{hit.percent_change_1h}% <i>past hour</i></small>
              <div><small style={percentChange(hit.percent_change_7d)}>{hit.percent_change_7d}% <i>past week</i></small></div>
            </div>
          )}
        </div>
      );
    }
  }

export default Fetcher;
