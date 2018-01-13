import React, { Component } from 'react';
import Feedback from './feedback'


class Footer extends Component {
  render() {
    var style={"background": "transparent",
              "paddingBottom": "30px"
              }
    return (
        <footer className="fixed-footer" style={style}><Feedback /></footer>
    )
  }
}

export default Footer;
