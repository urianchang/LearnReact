import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Form = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const FormsPage = ({ match }) => (
  <div>
    <h2>Forms</h2>
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
    <Switch>
      <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )} />
      <Route path={`${match.url}/:topicId`} component={Form} />
    </Switch>
  </div>
);

export default FormsPage;
