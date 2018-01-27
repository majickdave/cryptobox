import React, { Component } from 'react';
import './select.css'
// import { LineChart, Line } from 'recharts';


// const HOURLY_API = 'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG';

const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      hourly: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }


  render() {
      const { hits } = this.state;

      function percentChange(percent) {
      var color;
        if (parseFloat(percent) >= 0) {
          color = "lightgreen"
        } else {
          color = "orangered"
        }
        var size = 1
        const style = {"color": color, "fontSize":`${size}em` }
        return style
      }

      return (

        <div>
          <header>
                    <h3>Top 100 Cryptocurrencies</h3>
          </header>

          {/* <div hidden={!hits} className="alert alert-danger" role="alert">

            <p><span role="img" aria-labelledby="welcome">⛔️ There is currently an issue with CoinmarketCap's API</span></p>
            <small className="text-muted">Please visit <a href="https://coinmarketcap.com">coinmarketcap.com</a> while the issue is resolved  </small>
          </div> */}
          <div className="card-deck">

          {hits.map(hit =>

          <div key={hit.id} className="col-auto-lg-3">

            <div className="container">

              <div
                className="card-1 bg-dark text-light" style={{
                "marginTop": "5px", "marginBottom": "5px", "width": "100%"}} >
              <p>{'#' + hit.rank}</p>
              <div className="card-title"><small></small></div>
              <div className="card-body" style={{"padding": "5px"}}>
                <div className="card-text">
                  <p>{hit.name}</p>
                </div>
                <div className="card-text">

                      <small>{' (' + hit.symbol + ')'}</small>
                    </div>
                    <div className="card-text">
                  <small  style={percentChange(hit.percent_change_24h)}>{'$'+hit.price_usd}
                  </small>
                </div>
              <div className="card-text" ><small style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% past day</small></div>
              <div className="card-text"><small >{' mkt cap: $'+ parseFloat(hit.market_cap_usd).toLocaleString("currency")}</small></div>
            </div>
          </div>
          </div>

        </div>
      )}
    </div>
  </div>
      );
    }
  }

export default Fetcher;
