import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactNode } from 'react';

const StyledRouterLink = styled(RouterLink)`
  ${tw`text-primary hover:text-primary-dark`}
`;

interface LinkProps {
  to: string;
  children: ReactNode;
}

export function Link({ to, children }: LinkProps) {
  return <StyledRouterLink to={to}>{children}</StyledRouterLink>;
}
