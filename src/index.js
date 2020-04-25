import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import 'tailwindcss/dist/base.css';

import { routes, PrivateRoute } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { getAccessToken } from './utils/AuthUtils';

const accessToken = getAccessToken();

window.axios = axios;

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        {routes.map((route, key) =>
          route.isPublic ? (
            <Route
              key={key}
              path={route.path}
              component={route.component}
              exact
            />
          ) : (
            <PrivateRoute
              key={key}
              path={route.path}
              component={route.component}
              exact
            />
          )
        )}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
