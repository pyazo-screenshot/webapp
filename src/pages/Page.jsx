import styled from 'styled-components';
import tw from 'twin.macro';

export const Page = styled.div`
  ${tw`w-screen h-screen flex`}
`;

Page.CenteredContent = styled(Page)`
  ${tw`items-center justify-center`}
`;
