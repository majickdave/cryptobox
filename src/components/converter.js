import React, { Component } from 'react';
import Selector from './currency-selector'
import '../App.css'

const btcPrice = 14158.09;
// const ethPrice = 1164.24;

class Converter extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromAmount: 0,
      toAmount: 0
    }

  }

  inputChanged() {
    this.setState({fromAmount: this.inputEl.value, toAmount: this.inputEl.value * btcPrice })
  }

  calculateResult() {
    console.log("calculated!")
  }

  updateResult() {
      return this.state.fromAmount * btcPrice;

  }


  render() {
    var inputStyle = {"border": "1px solid black"};
    var resultStyle = {"color": "black", "backgroundColor": "lightgray",
  "paddintTop": "10px"};

    const round = function precisionRound(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }




    return (
      <section>


          <div>
            <input max={16000} onChange={e => this.inputChanged()} type="number" style={inputStyle} ref={ el => this.inputEl = el }/>
            <div>

                <Selector onChange={(e) => this.setValues(e)} onSubmit={(e) => this.updateResult(e)}/>

            </div>


          </div>
          <div style={resultStyle}>
            <p >${round(this.state.toAmount, 2)}</p>
          </div>

      </section>
    )
  }
}

export default Converter;
