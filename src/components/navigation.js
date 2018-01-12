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
        <ul >
          <a href="https://goo.gl/forms/zcKQQaNuS3qL98yu2" target="_blank" rel="noopener noreferrer">
            <button className="feedback-button">
              <span>
                  <p>Click to leave Feedback <span role="img" aria-labelledby="megaphone"> 📣 </span></p>
              </span>
            </button>
          </a>
        </ul>

      </nav>
    )
  }
}

export default Navigation;
