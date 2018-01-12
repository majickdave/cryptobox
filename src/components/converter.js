import React, { Component } from 'react';
import Selector from './currency-selector'
import '../App.css'

class Converter extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromValue: '',
      fromType: '',
      toValue: '',
      toType: ''
    }
}

inputChanged() {
  this.setState({fromValue: this.inputEl.value})

}
  setValues() {
    console.log("state saved!")
    this.setState({fromValue: this.props.value})
  }

  calculateResult() {
    console.log("calculated!")
  }

  updateResult() {
    var result = this.state.fromValue;
    return result * 16000;
  }

  render() {
    var style={"border": "1px solid darkblue"};
    return (
      <section>


          <div>
            <p>Convert</p>
            <input onChange={e => this.inputChanged()} type="number" style={style} ref={ el => this.inputEl = el }/>
            <div>

                <Selector onChange={(e) => this.setValues(e)} onSubmit={(e) => this.calculateResult()}/>

            </div>


          </div>
          <div>
            <p>result: ${this.updateResult()}</p>
          </div>

      </section>
    )
  }
}

export default Converter;
