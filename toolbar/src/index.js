import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CookieMonster from './cookieMonster';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CookieMonster />, document.getElementById('root'));
registerServiceWorker();
