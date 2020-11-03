import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import dotenv from 'dotenv';
dotenv.config();
// console.log(process.env);

// const { REACT_APP_DOMAIN_KEY, REACT_APP_CLIENT_ID } = process.env;

ReactDOM.render(
  <Auth0Provider
    // domain="process.env.DOMAIN"
    // clientId="process.env.CLIENT_ID"
    domain="dev-j40u92er.us.auth0.com"
    clientId="OD4cC4ZuQd2rN4bzHZICj0iwMQZaJZCT"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <React.StrictMode>
      <GithubProvider>
        <App />
      </GithubProvider>
    </React.StrictMode>
    ,
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
