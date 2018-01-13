import React, { Component } from 'react';
import Feedback from './feedback'


class Footer extends Component {
  render() {
    var style={"background": "transparent",
              "padding-bottom": "30px"
              }
    return (
        <footer className="fixed-footer" style={style}><Feedback /></footer>
    )
  }
}

export default Footer;
