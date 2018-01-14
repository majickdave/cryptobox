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

setFromType(type) {
  console.log(`From set to ${type}`)
}

setToType(value) {
  console.log(`To set to ${value.select}`)
  this.setState({toType: value.select})
}

render(props) {

    return (

      <div>
        <div>
          <p>Convert: {this.state.fromType}</p>
        </div>
        <form onSubmit={(e) => this.executeTrade(e)}>

          <Select select={this.setFromType(this.select)}/>
          <span>
                        <p>To: <span role="img" aria-labelledby="US-Dollars"> 💵  </span></p>
                    </span> {this.state.toType}
          <Select select={(e) => this.setToType(e)}/>

        {/* <button type="submit">
          Execute
        </button> */}


      </form>
      </div>

    );

  }
}
