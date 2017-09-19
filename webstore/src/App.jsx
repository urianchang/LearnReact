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
import PatchList from './components/PatchList';
import FormsPage from './components/FormsPage';
import HexGrid from './components/HexGrid';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component = { Home } />
            <Route path="/patches" component = { PatchList } />
            <Route path="/forms" component = { FormsPage } />
            <Route path="/hex" component= { HexGrid } />
            <Route component = { NoMatch } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
