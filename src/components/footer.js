import React, { Component } from 'react';
import Feedback from './feedback'


class Footer extends Component {
  render() {
    var style={"background": "#393b3d"}
    return (
        <footer className="fixed-footer" style={style}><Feedback /></footer>
    )
  }
}

export default Footer;
