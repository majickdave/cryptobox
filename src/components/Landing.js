import React from 'react';
import Info from '../components/info';
import './App.css'

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const copyright = { "background": "-webkit-linear-gradient(white, #839da8)",
"fontSize": "0.8em",
"WebkitTextFillColor": "transparent",
"WebkitBackgroundClip": "text",
}

const LandingPage = () =>
  <div>
    <Info />
    <section className="gradient-blue text-light" style={{"height": "100%"}}>
      <div>
        <h3>Let CryptoBox manage your cryptocurrency</h3>
      </div>
      <div style={{"paddingBottom": "100px", "paddingTop": "50px"}}>
        <Link style={{"color": "white"}} to={routes.SIGN_UP}>
          <button className="btn btn-outline-light" type="button" style={{"width": "60vw", 'height': '70px'}}>Sign up</button>
        </Link>
      </div>

      <div style={{"bottom": "20", "textAlign": "center"}}>
        <p style={copyright}>
          Copyright &copy; 2018 David Samuel
        </p>
      </div>
    </section>
  </div>

export default LandingPage;
