import React, { Component } from 'react';
import round from '../js/round'

const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
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
          color = "lime"
        } else {
          color = "red"
        }
        const style = {"color": color}
        return style
      }

      return (
        <div>
          {hits.map(hit =>
            <div key={hit.id}>
              <div>#{hit.rank}</div> <div>last updated on {Date(hit.last_updated)}</div>
              <p style={percentChange(hit.percent_change_24h)}>{hit.name}({hit.symbol})</p>
                <h1 style={percentChange(hit.percent_change_24h)}>${round(hit.price_usd, 6)} </h1>
              <p style={percentChange(hit.percent_change_24h)}>{hit.percent_change_24h}% <small>past day</small></p>
            </div>
          )}
          <hr></hr>
        </div>
      );
    }
  }

export default Fetcher;
