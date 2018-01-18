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


const NavigationAuth = () =>
<div>
  <nav className="navbar fixed-top navbar-dark bg-dark">
    <div className="navbar-brand">
      <Link to={routes.LANDING}><img src={icon} className="App-logo" alt="logo"/></Link>

    </div>
    <div className="nav-item dropdown bg-dark">
      <button className="btn btn-outline-info dropdown-toggle" id="navbarDropdownMenuLink" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">Account</button>

    <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
      <ul className="navbar-nav">
        <li className="dropdown-item"><Link to={routes.HOME}><button className="btn btn-outline-info">Home</button></Link></li>
        <li className="dropdown-item"><Link to={routes.ACCOUNT}><button className="btn btn-outline-info">Settings</button></Link></li>
        <li className="dropdown-item"><SignOutButton/></li>
      </ul>
    </div>
  </div>
  </nav>
  <div>
    <Footer />
  </div>
</div>


const NavigationNonAuth = () =>
<div>
  <nav className="navbar fixed-top navbar-light bg-dark">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo"  alt="logo"/></Link>
      </div>
      <div className="nav-item dropdown">
        <button className="btn btn-outline-light dropdown-toggle" id="navbarDropdownMenuLink" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</button>

        <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item"><Link to={routes.SIGN_IN}>Sign In</Link></a>
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
