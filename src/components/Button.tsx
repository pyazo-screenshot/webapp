import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonBase = styled.button`
  ${tw`bg-primary hover:bg-primary-dark text-white my-2 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-light w-full`}
`;

const ButtonIcon = styled.img`
  ${tw`mx-auto h-8 w-auto`}
`;

export const Button = Object.assign(ButtonBase, {
  Icon: ButtonIcon,
});
