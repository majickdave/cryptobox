import React, { Component } from 'react';
import './select.css'

import dateFormat from 'dateformat';
// import { LineChart, Line } from 'recharts';


// const HOURLY_API = 'https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG';

const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data, isLoading: false }));
  }


  render() {

    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading Data ...</p>;
    }

      function percentChange(percent) {
      var color;
        if (parseFloat(percent) >= 0) {
          color = "green"
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
          <div className="row card-deck justify-content-center">

          {hits.map(hit =>

          <div key={hit.id} className="col-auto-md " style={{"padding": "10px", "maxWidth": "100%"}}>

            <div className="container" >

              <div
                className="card-1 bg-light text-dark" >
                <div className="container gradient-blue text-light card-title" style={percentChange(hit.percent_change_24h)}>
                  {'#' + hit.rank+ ' '}{' (' + hit.symbol + ') '}
                </div>

              <div className="container">
                <p className="card-text ">{hit.name}</p>
              </div>

              <div className="card-body container ">

                <div className="card-text container ">
                  <p  style={percentChange(hit.percent_change_24h)}>
                    {'$'+hit.price_usd}
                  </p>
                </div>
              <div className="card-text container" ><small style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% past day</small></div>
              <div className="card-text container"><small ><span role="img" aria-labelledby="market cap">🧢</span>{' $'+ parseFloat(hit.market_cap_usd).toLocaleString("currency")}</small></div>

            </div>
            <div className="card-footer container "><small>{'updated ' + dateFormat(Date(hit.last_updated), "h:MM:ss TT")}</small></div>
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
