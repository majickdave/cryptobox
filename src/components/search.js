import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
    // ...
    { value: 'btc', label: 'Bitcoin' },
    // ...
];

export default class Search extends Component {

  render () {


    return (
      <div>
        <Select
            name="university"
            value="one"
            options={options}
            onChange={val => console.log(val)}
        />
      </div>
    )
  }
  }
