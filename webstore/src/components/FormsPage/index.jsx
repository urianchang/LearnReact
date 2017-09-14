import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './forms.css';

const FormsPage = ({ match }) => (
  <div>
    <div className="forms-sidebar">
      <h2>Forms</h2>
      <ul>
        <li>
          <Link className="sidebar-link" to={`${match.url}/goldengear`}>
            Golden Gear Nomination
          </Link>
        </li>
        <li>
          <Link className="sidebar-link" to={`${match.url}/order`}>
            Store Order
          </Link>
        </li>
        <li>
          <Link className="sidebar-link" to={`${match.url}/ideas`}>
            Product Suggestion
          </Link>
        </li>
      </ul>
    </div>
    <div className="forms-container">
      <Switch>
        <Route exact path={match.url} render={() => (
            <h3>Please select a form.</h3>
          )} />
        <Route path={`${match.url}/goldengear`} component={ GoldenGearNomination } />
        <Route path={`${match.url}/order`} component={ OrderForm } />
        <Route path={`${match.url}/ideas`} component={ IdeaForm } />
      </Switch>
    </div>
  </div>
);

// <Route path={`${match.url}/:formId`} component={ Form } />

//: Google Forms below
const GoldenGearNomination = () => (
  <iframe
    className="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSdJ5mbjX1FYpiqhET8COlMjXe0Oqq-qhL7vhWONE-RS5nVeow/viewform?embedded=true"
    title="Golden Gear Nomination Form"
  >
    Loading...
  </iframe>
);

const OrderForm = () => (
  <iframe
    className="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSeAeHIDUSdF2vyaTnK1ByiGFFvXvwSJIMBtyydXmzQvVA4O7g/viewform?embedded=true"
    title="Store Order Form"
  >
    Loading...
  </iframe>
);

const IdeaForm = () => (
  <iframe
    className="google-form"
    src="https://docs.google.com/forms/d/e/1FAIpQLSf7WfY1G_sYccYHK5TFd9FafHja9CZOnZxDR4KixqxCp-OEWA/viewform?embedded=true"
    title="Store Order Form"
  >
    Loading...
  </iframe>
);

export default FormsPage;
