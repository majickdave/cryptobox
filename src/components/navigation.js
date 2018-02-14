import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import icon from '../icon.svg';
import Footer from './footer'
import Feedback from './feedback'

import './App.css'
import './select.css'


const Navigation = ({ authUser }) =>
<div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<div>
  <nav className="navbar navbar-inverse navbar-expand-lg fixed-top text-light card-2 gradient-blue" >
    <div className="container">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo shake-chunk shake-constant--hover" alt="logo"/>
          </Link>CryptoBox
      </div>
      <div className="justify-content-between">
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <button className="navbar-toggler btn-outline-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <i className="fas fa-bars"></i>
              </button>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav mr-auto" >
              <li className="nav-item active" ><Link to={routes.HOME} ><button className="btn btn-outline-light" ><i className="fas fa-home"></i> Home</button></Link></li>
              <li className="nav-item"><Link to={routes.ACCOUNT} ><button className="btn btn-outline-light"><i className="fas fa-user-circle"></i> Account</button></Link></li>
              <li className="nav-item"><Feedback /></li>
              <li className="nav-item"><SignOutButton/></li>
            </ul>

          </div>
        </div>


    </div>
  </nav>
    <Footer />
</div>

const NavigationNonAuth = () =>
<div>
  <nav className="navbar navbar-inverse navbar-expand-lg fixed-top card-2 text-light gradient-blue">
    <div className="container">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo"  alt="logo"/></Link>CryptoBox
      </div>
      <div>
      <ul className="navbar-nav mr-auto">
        <div className="nav-item" aria-labelledby="navbarDropdownMenuLink">
          <Link to={routes.SIGN_IN}><button className="btn btn-outline-light" >
            <i className="fas fa-user" aria-hidden="true"></i> Login</button></Link>
        </div>
      </ul>
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
