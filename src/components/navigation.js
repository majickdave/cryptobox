import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import icon from '../icon.svg';
import '../App.css'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/"><img src={icon} className="App-logo" alt="logo"></img></Link>
        </ul>

      </nav>
    )
  }
}

export default Navigation;
