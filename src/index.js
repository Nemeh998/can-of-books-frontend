import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react"; //demo2
ReactDOM.render(
  <React.StrictMode>
 
<Auth0Provider
    domain="dev-7frjc2i7.eu.auth0.com"
    clientId="u0CYeIHZitD5t6t0B0dUEePjX7ZJYUPR"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
