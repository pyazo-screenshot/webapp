import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

import { isAuthenticated } from './utils/AuthUtils';
import { ImagesPage } from './pages/ImagesPage';

// eslint-disable-next-line
export function PrivateRoute({ component: Component, location, ...rest }) {
  const authenticated = isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.object,
};

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
    component: ImagesPage,
    isPublic: false,
  },
];
