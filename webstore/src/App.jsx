import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

//: Import Page/Template components
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import PatchHistory from './components/PatchHistory';
import Topics from './components/Topics';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component = { Home } />
            <Route path="/patches" component = { PatchHistory } />
            <Route path="/topics" component = { Topics } />
            <Route component = { NoMatch } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
