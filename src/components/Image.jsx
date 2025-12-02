import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Image = styled.img`
  ${tw`mx-auto h-48 w-auto`}
  ${({ $fullWidth }) => $fullWidth && css`${tw`w-full h-full object-contain`}`}
`;
