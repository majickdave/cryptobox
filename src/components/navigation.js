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


const backgroundColor = {"backgroundColor": "#415772", "maxHeight": "60px"}
const Color = {"backgroundColor": "#415772", "color": "#f2f2f2"}

const NavigationAuth = () =>
<div >
  <nav className="navbar fixed-top card-4" style={backgroundColor}>
    <div className="navbar-brand text-light">
      <Link to={routes.LANDING}><img src={icon} className="App-logo shake-chunk shake-constant--hover" alt="logo"/></Link>
        CryptoBox
    </div>
    <div className="nav-item dropdown">
      <button className="btn dropdown-toggle " id="navbarDropdownMenuLink" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false" style={Color}><i className="fa fa-gear"></i> Settings</button>

    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={Color}>
      <ul className="navbar-nav" style={Color}>
        <li className="dropdown-item "><Link to={routes.HOME}><button className="btn btn-block card-4" style={Color}><i className="fa fa-home"></i> Home</button></Link></li>
        <li className="dropdown-item"><Link to={routes.ACCOUNT}><button className="btn btn-block card-4" style={Color}><i className="fa fa-user-circle"></i> Account</button></Link></li>
        <li className="dropdown-item"><SignOutButton/></li>
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
