import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = styled.button`
  ${tw`bg-primary hover:bg-primary-dark text-white my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
`;

Button.Icon = styled.img`
  ${tw`mx-auto h-8 w-auto`}
`;
