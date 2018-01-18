import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navigation from './navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
    </div>
  </Router>

export default App;

// const App = () =>
//
//             <Router>
//               <Navigation />
//                 <div className="app">
//
//                     <main>
//                         <Route exact path="/" component={Register} />
//                         <Route exact path="/settings" component={Settings} />
//                         <Route exact path="/dashboard" component={Dashboard} />
//                         <Route exact path="/signup" component={SignUp} />
//                     </main>
//                 </div>
//             </Router>
//
// export default App;
