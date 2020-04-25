import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    ${tw`w-screen h-screen bg-background`}
  }

  body {
    ${tw`bg-background`}
  }
`;
