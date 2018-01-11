import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a><Link to="/">Home</Link></a>
      </nav>
    )
  }
}

export default Navigation;
