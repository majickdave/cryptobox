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

  inputChanged() {
    this.setState({fromValue: this.inputEl.value})
  }

  calculateResult() {
    console.log("calculated!")
  }

  updateResult() {

      return this.state.fromValue * 14357.20;

  }

  render() {
    var inputStyle = {"border": "1px solid black"};
    var resultStyle = {"color": "white", "backgroundColor": "green"};
    return (
      <section>


          <div>
            <input max={16000} onChange={e => this.inputChanged()} type="number" style={inputStyle} ref={ el => this.inputEl = el }/>
            <div>

                <Selector onChange={(e) => this.setValues(e)} onSubmit={(e) => this.updateResult()}/>

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
