import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MyComponents from '../components/index.js';

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/components">Components</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/components">
              <MyComponents />
            </Route>
            <Route path="/projects">
              <MyProjects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About me</h2>;
}

function MyProjects() {
  return <h2>The Projects</h2>;
}