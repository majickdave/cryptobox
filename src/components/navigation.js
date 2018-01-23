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
  <nav className="navbar navbar-inverse navbar-expand-lg fixed-top text-light" style={backgroundColor}>
    <div className="container">
      <div className="navbar-brand">
        <Link style={Color} to={routes.LANDING}><img src={icon} className="App-logo shake-chunk shake-constant--hover" alt="logo"/>
          CryptoBox</Link>
      </div>
      <div className="justify-content-between">
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={Color}>
                <i className="fas fa-bars"></i>
              </button>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={Color}>
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav mr-auto" style={Color}>
              <li className="nav-item active" ><Link to={routes.HOME} style={Color}><button className="btn btn-block" style={Color}><p><i className="fas fa-home"></i> Home</p></button></Link></li>
              <li className="nav-item"><Link to={routes.ACCOUNT} style={Color}><button className="btn btn-block" style={Color}><p><i className="fas fa-user-circle"></i> Account</p></button></Link></li>
              <li className="nav-item"><SignOutButton/></li>
            </ul>

          </div>
        </div>


    </div>
  </nav>
    {/* <Footer /> */}
</div>

const NavigationNonAuth = () =>
<div>
  <nav className="navbar navbar-inverse navbar-expand-lg fixed-top card-4 text-light" style={backgroundColor}>
    <div className="container">
      <div className="navbar-brand">
        <Link to={routes.LANDING}><img src={icon} className="App-logo"  alt="logo"/></Link>
      </div>
      <div>
      <ul className="navbar-nav mr-auto" style={Color}>
        <div className="nav-item" aria-labelledby="navbarDropdownMenuLink">
          <Link to={routes.SIGN_IN}><button className="btn btn-block" style={Color}>
            <p><i className="fas fa-user" aria-hidden="true"></i> Login</p></button></Link>
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
