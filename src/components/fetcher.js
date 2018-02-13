import React, { Component } from 'react';
import './select.css'
import dateFormat from 'dateformat';
import round from '../js/round'
import './fetcher.css'

import Select from '../components/select'

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
      fromType: '',
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data, isLoading: false }));
  }

  sendToCalc(symbol) {
    this.setState({symbolSelected: symbol})

  }


  render() {

    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading Data ...</p>;
    }

      function percentChange(percent) {
      var color;
        if (parseFloat(percent) >= 0) {
          color = "lime"
        } else {
          color = "orangered"
        }
        const style = {"color": color }
        return style
      }

      function plusOrMinus(percent) {
        var change = '-';
        if (percent >= 0) {
          change = "+"
        }
        return change
      }

      function refreshPage(){
          window.location.reload();
      }

      return (

        <div>



          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content gradient-blue">
                <div className="modal-header text-light">
                  Currency calculator
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{"color": "#aaa"}}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                  <div  className="text-light fixed-calc card-2 gradient-blue" id="calculator">
                    <div className="d-flex-lg" id="section1" >
                    <div hidden={this.state.hidden}>
                      <Select symbol={this.state.fromType} hits={this.state.hits}/>
                    </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
            <header>

                        <p>Top 100 cryptocurrencies updated at </p>
                        <div className="p-2">
                          <button className="btn btn-outline-dark" type="button" onClick={refreshPage}>
                            {' ' + dateFormat(Date(hits.slice(0).last_updated), "h:MM:ss TT")}
                          </button>
                        </div>


            </header>

            {/* <div hidden={!hits} className="alert alert-danger" role="alert">

              <p><span role="img" aria-labelledby="welcome">⛔️ There is currently an issue with CoinmarketCap's API</span></p>
              <small className="text-muted">Please visit <a href="https://coinmarketcap.com">coinmarketcap.com</a> while the issue is resolved  </small>
            </div> */}


            <table className="table table-sm table-bordered table-responsive-sm table-dark table-hover" >
              <thead className="bg-light text-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Change (24h)</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">Volume (24h)</th>
                </tr>
              </thead>
              <tbody>
                {hits.map(hit =>

                <tr key={hit.id}>



                  <th scope="row" >
                     {hit.rank}
                   </th>


                    <td className="text-left">

                      <button onClick={e => this.sendToCalc(hit.symbol)} className="bg-light rounded card text-dark text-left w-100" type="button" style={{"background": "transparent", "border": "none"}}
                        data-toggle="modal" data-target="#exampleModal"
                         >
                        {hit.name}
                        <div ><small>{hit.symbol}</small></div>

                      </button>
                    </td>


                  <td className="text-left">
                    <div >
                      {'$' + hit.price_usd}
                    </div>
                    <small style={percentChange(hit.percent_change_24h)}>
                      {plusOrMinus(hit.percent_change_24h) + ' $' + Math.abs(round(parseFloat(hit.percent_change_24h/100 * hit.price_usd), 8))}
                    </small>

                  </td>
                  <td >
                    <div  style={percentChange(hit.percent_change_24h)} >
                      {hit.percent_change_24h + '%'}
                    </div>
                  </td>

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
