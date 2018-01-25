import React, { Component } from 'react';
import round from '../js/round';
import './select.css'


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

  componentWillMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));

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
          {/* <button type="button" className="fixed-button btn btn-secondary card-1" onClick={this.props.refreshPrices}>
            <span role="img" aria-labelledby="reload">📡</span>
          </button> */}
          <header>
            <h2>Top 100 Cryptocurrencies</h2>
          </header>
          <div className="card-deck">

          {hits.map(hit =>

          <div key={hit.id} className="col-auto-sm-3">

            <div className="container">

            <div className="card bg-dark text-light"  style={{
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
                  <small  style={percentChange(hit.percent_change_24h)}>{'$'+round(hit.price_usd, 6).toLocaleString("currency")}
                  </small>
                </div>
              <div className="card-text" ><small style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% past day</small></div>
              <div className="card-text"><small >{' mkt cap: $'+ round(hit.market_cap_usd,10).toLocaleString("currency")}</small></div>
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
