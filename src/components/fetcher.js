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
        <div>
                    <h2>Top 100 Cryptocurrencies</h2>
        </div>
        <div className="d-flex">
          {/* <button type="button" className="fixed-button btn btn-secondary card-1" onClick={this.props.refreshPrices}>
            <span role="img" aria-labelledby="reload">📡</span>
          </button> */}
          <header>


          </header>
          <div className="card-deck">
            <div className="row ">

          {hits.map(hit =>
                          <div className="col-xs-3">
            <div className="d-flex-xs">
            <div className="card bg-dark text-light" key={hit.id}>
              <div className="card-body">#{hit.rank}</div>

              <p className="card-title">{hit.name}</p><p style={percentChange(hit.percent_change_24h)}>({hit.symbol})</p>
                <p className="card-text" style={percentChange(hit.percent_change_24h)}>${round(hit.price_usd, 6)} </p>
              <p style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% <small>past day</small></p>
              <small style={percentChange(hit.percent_change_1h)}>{hit.percent_change_1h}% <i>past hour</i></small>
              <div><small style={percentChange(hit.percent_change_7d)}>{hit.percent_change_7d}% <i>past week</i></small></div>
            </div>
          </div>
        </div>
          )}

        </div>
        </div>
      </div>
      </div>
      );
    }
  }

export default Fetcher;
