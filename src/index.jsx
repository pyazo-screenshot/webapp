import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './index.css';

import { routes, PrivateRoute } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { getAccessToken } from './utils/AuthUtils';

const accessToken = getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

createRoot(document.getElementById('root')).render(
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
  </React.StrictMode>
);
