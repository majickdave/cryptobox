import React from 'react';
import Info from '../components/info';
import './App.css'

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const copyright = { "background": "-webkit-linear-gradient(white, #839da8)",
"fontSize": "0.8em",
"-webkit-text-fill-color": "transparent",
"-webkit-background-clip": "text",
"font-family": `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif`
}

const LandingPage = () =>
  <div>
    <Info />
      <div><hr></hr>
        <h3>Let CryptoBox manage your cryptocurrency</h3>
      </div>
      <div style={{"paddingBottom": "100px", "paddingTop": "50px"}}>
        <Link style={{"color": "white"}} to={routes.SIGN_UP}>
          <button className="btn btn-outline-dark" type="button" style={{"width": "80%"}}>Sign up</button>
        </Link>
      </div>

      <div style={{"bottom": "20", "textAlign": "center"}}>
        <p style={copyright}>
          Copyright &copy; 2018 David Samuel
        </p>
      </div>
  </div>

export default LandingPage;
