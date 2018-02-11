import React, { Component } from 'react';
import './select.css'
import dateFormat from 'dateformat';

import './fetcher.css'

// import round from '../js/round'
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

  componentWillMount() {
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
        const style = {"color": color }
        return style
      }



      return (

        <div>
            <header>
                      <h3>Top 100 Cryptocurrencies</h3>
                      {/* <div className="p-2">
                        <a className="btn btn-outline-dark" type="button" href='/home'>
                          <small>{'updated ' + dateFormat(Date(hits.slice(0).last_updated), "h:MM:ss TT")}</small>
                        </a>
                      </div> */}
                      <p>{'updated ' + dateFormat(Date(this.state.hits.slice(0).last_updated), "h:MM:ss TT")}</p>
            </header>

            {/* <div hidden={!hits} className="alert alert-danger" role="alert">

              <p><span role="img" aria-labelledby="welcome">⛔️ There is currently an issue with CoinmarketCap's API</span></p>
              <small className="text-muted">Please visit <a href="https://coinmarketcap.com">coinmarketcap.com</a> while the issue is resolved  </small>
            </div> */}


            <table className="table table-sm table-bordered table-responsive-sm table-hover" >
              <thead className="bg-light text-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change(24h)</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {hits.map(hit =>
                <tr key={hit.id}>
                  <th scope="row">{hit.rank}</th>
                  <td>
                    <div>

                        {hit.name}
                    </div><small>{hit.symbol}</small></td>
                    <td>{'$' + hit.price_usd}</td>
                    <td style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h + ' %'}</td>
                    <td>{'$' + parseFloat(hit.market_cap_usd).toLocaleString("currency")}</td>
                    <td>{'$' + parseFloat(hit['24h_volume_usd']).toLocaleString("currency")}</td>
                </tr>
                  )}

            </tbody>
          </table>
        </div>
      );
    }
  }

export default Fetcher;
