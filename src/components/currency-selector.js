import React, { Component } from 'react';
import Select from './select'

export default class Selector extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromType: '',
      toType: ''
    }
}

executeTrade(e) {
  e.preventDefault();
  console.log("Conversion executed!")
}

setFromType(value) {
  console.log(`From set to ${value.select}`)
  this.setState({fromType: value.select})
}

setToType(value) {
  console.log(`To set to ${value.select}`)
  this.setState({toType: value.select})
}

render() {
    return (
      <div>
        <p>Convert: {this.state.fromType}</p>
        <form onSubmit={(e) => this.executeTrade(e)}>

          <Select select={(e) => this.setFromType(e)}/>
          <span>
                        <p>To: <span role="img" aria-labelledby="megaphone"> 💵  </span></p>
                    </span> {this.state.toType}
          {/* <Select select={(e) => this.setToType(e)}/>
          <div> */}
        {/* <button type="submit">
          Execute
        </button> */}
      </form>
      </div>
    );
}
}
