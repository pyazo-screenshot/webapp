import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

import { isAuthenticated } from './utils/AuthUtils';
import { SocketPage } from './pages/SocketPage';

// eslint-disable-next-line
export function PrivateRoute({ component, ...rest }) {
  const authenticated = isAuthenticated();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export const routes = [
  {
    path: '/login',
    component: LoginPage,
    isPublic: true,
  },
  {
    path: '/register',
    component: RegisterPage,
    isPublic: true,
  },
  {
    path: '/',
    component: SocketPage,
    isPublic: false,
  },
];
