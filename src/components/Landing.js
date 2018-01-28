import React from 'react';
import Info from '../components/info';
import './App.css'

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';



const padding = {"padding": "50px", "color": "white"}

const LandingPage = () =>
  <div>
    <Info />
      <div><hr></hr>
        <h3>Let CryptoBox manage your cryptocurrency</h3>
      </div>
      <div >
        <Link style={padding} to={routes.SIGN_UP}><button className="btn btn-dark btn-block gradient-blue" type="button"><p>Sign Up</p></button></Link>
      </div>

  </div>

export default LandingPage;
