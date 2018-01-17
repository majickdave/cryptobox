import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Register from './views/register'
import Settings from './views/settings'
import Dashboard from './views/dashboard'
import SignUp from './views/signup'

class App extends Component {
  render() {
    return (
            <Router>
                <div className="app">

                    <main>
                        <Route exact path="/" component={Register} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/signup" component={SignUp} />
                    </main>
                </div>
            </Router>
        );
  }
}

export default App;
