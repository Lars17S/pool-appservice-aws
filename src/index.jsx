import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Amplify } from 'aws-amplify';
import App from './App';
import config from './aws-exports';

config.oauth.redirectSignIn = `${window.location.origin}/`;
config.oauth.redirectSignOut = `${window.location.origin}/`;

Amplify.configure(config);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
