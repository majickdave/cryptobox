import React, { Component } from 'react';
import round from '../js/round';
import ltcIcon from '../crypto-icons/ltc.svg';


const API = 'https://api.coinmarketcap.com/v1/ticker/';
const DEFAULT_QUERY = '';

class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentWillMount() {
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
        var size = Math.abs(percent / 100 * 50) + 20
        const style = {"color": color, "fontSize":`${size}px` }
        return style
      }
      const padding = {"paddingTop": "30px"}
      return (
        <div>
          {hits.map(hit =>
            <div  key={hit.id}>
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
