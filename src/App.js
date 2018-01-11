import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Register from './views/register'
import Settings from './views/settings'
import Dashboard from './views/dashboard'

class App extends Component {
  render() {
    return (
            <Router>
                <div className="app">

                    <main>
                        <Route exact path="/" component={Register} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </main>
                </div>
            </Router>
        );
  }
}

export default App;
