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

      return (
        <div>
          {hits.map(hit =>
            <div key={hit.id}>
              <h1>{hit.rank} : {hit.name}</h1>
              <p>{hit.symbol} : ${round(hit.price_usd, 2)}</p>
            </div>
          )}
        </div>
      );
    }
  }

export default Fetcher;
