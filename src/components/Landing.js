import React from 'react';
import Info from '../components/info';
import './App.css'

import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const padding = {"padding": "50px"}

const LandingPage = () =>
  <div>
    <Info />
      <div><hr></hr>
        <h3>Let CryptoBox manage your cryptocurrency</h3>
      </div>
      <div style={padding}>
        <Link to={routes.SIGN_UP}><button className="btn btn-round btn-outline-dark" type="button"><p>Sign Up free</p></button></Link>
      </div>

  </div>

export default LandingPage;
