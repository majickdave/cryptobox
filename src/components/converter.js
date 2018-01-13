import React, { Component } from 'react';
import Selector from './currency-selector'
import '../App.css'


class Converter extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromValue: 0,
      fromType: '',
      toValue: 0,
      toType: ''
    }
  }

  setFromType(type) {
    this.setState({fromType: this.inputEl.value})
  }

  calculateResult() {
    console.log("calculated!")
  }

  updateResult() {
    var userInput = this.state.fromValue;
    var finalValue;
    if (this.state.fromType === 'btc') {
      finalValue = userInput * 16000;
    } else {
      finalValue = userInput;
    }
    return finalValue;
  }

  render() {
    var inputStyle = {"border": "1px solid darkblue"};
    var resultStyle = {"color": "white", "backgroundColor": "black"};
    return (
      <section>


          <div>
            <input max={16000} type="number" style={inputStyle} ref={ el => this.inputEl = el }/>
            <div>

                <Selector onSubmit={(e) => this.calculateResult()}/>

            </div>


          </div>
          <div>
            <p style={resultStyle}>${this.updateResult()}</p>
          </div>

      </section>
    )
  }
}

export default Converter;
