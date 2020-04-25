import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledRouterLink = styled(RouterLink)`
  ${tw`text-primary hover:text-primary-dark`}
`;

export function Link({ to, children }) {
  return <StyledRouterLink to={to}>{children}</StyledRouterLink>;
}

Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
};
