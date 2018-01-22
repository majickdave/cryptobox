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


const backgroundColor = {"backgroundColor": "#415772"}
const Color = {"backgroundColor": "#415772", "color": "#f2f2f2", "border": "none"}


const NavigationAuth = () =>
<div>
  <nav className="navbar navbar-expand-lg fixed-top card-4 text-light" style={backgroundColor}>
    <div class="container">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo shake-chunk shake-constant--hover" alt="logo"/></Link>
          CryptoBox
      </div>
      <div class="justify-content-between">
        <ul class="nav justify-content-end">
            <li class="nav-item">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={Color}>
                <i className="fa fa-bars"></i>
              </button>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={Color}>
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav mr-auto" style={Color}>
              <li className="nav-item active" ><Link to={routes.HOME} style={Color}><button className="btn btn-block" style={Color}><i className="fa fa-home"></i> Home</button></Link></li>
              <li className="nav-item"><Link to={routes.ACCOUNT} style={Color}><button className="btn btn-block" style={Color}><i className="fa fa-user-circle"></i> Account</button></Link></li>
              <li className="nav-item"><SignOutButton/></li>
            </ul>

          </div>
        </div>


    </div>
  </nav>
    <Footer />
</div>

const colorStyle = {"color": "white", "background": "transparent"};
const NavigationNonAuth = () =>
<div>
  <nav className="navbar card-4 fixed-top navbar-light bg-dark text-light">
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
