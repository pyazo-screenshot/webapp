import styled from 'styled-components';
import tw from 'twin.macro';

const LayoutBase = styled.div``;

const LayoutContainer = styled.div`
  ${tw`mx-auto px-4`}
`;

export const Layout = Object.assign(LayoutBase, {
  Container: LayoutContainer,
});
