import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

class About extends Component {
  render() {
    return(
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )} />
  </div>
);

const NoMatch = () => (
  <div>
    <h1>404</h1>
    <h2>Sorry! The page that you requested could not be found.</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
