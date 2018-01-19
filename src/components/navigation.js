import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import icon from '../icon.svg';
import './App.css'
import Footer from './footer'


const Navigation = ({ authUser }) =>
<div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const padding = {"paddingRight": "15px"}
const NavigationAuth = () =>
<div>
  <nav className="navbar fixed-top navbar-dark bg-dark">
    <div className="navbar-brand">
      <Link to={routes.LANDING}><img src={icon} className="App-logo" alt="logo"/></Link>

    </div>
    <div className="nav-item dropdown bg-dark" style={padding}>
      <button className="btn btn-outline-info dropdown-toggle " id="navbarDropdownMenuLink" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false"><i className="fa fa-gear"></i> Account</button>

    <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink" >
      <ul className="navbar-nav">
        <li className="dropdown-item bg-dark"><Link to={routes.HOME}><button className="btn btn-block btn-outline-info"><i className="fa fa-home"></i> Home</button></Link></li>
        <li className="dropdown-item bg-dark"><Link to={routes.ACCOUNT}><button className="btn btn-block btn-outline-info"><i className="fa fa-user"></i> Settings</button></Link></li>
        <li className="dropdown-item bg-dark"><SignOutButton/></li>
      </ul>
    </div>
  </div>
  </nav>
  <div>
    <Footer />
  </div>
</div>

const colorStyle = {"color": "white", "background": "transparent"};
const NavigationNonAuth = () =>
<div>
  <nav className="navbar fixed-top navbar-light bg-dark">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo"  alt="logo"/></Link>
      </div>
      <div className="nav-item dropdown">
        <button className="btn btn-outline-light dropdown-toggle" id="navbarDropdownMenuLink" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</button>

        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <Link to={routes.SIGN_IN}><button style={colorStyle} className="dropdown-item">Sign In</button></Link>
        </div>
      </div>

  </nav>
  <div>
    <Footer />
  </div>
</div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
