import styled from 'styled-components';
import tw from 'twin.macro';

const PageBase = styled.div`
  ${tw`w-screen h-screen flex`}
`;

const PageCenteredContent = styled(PageBase)`
  ${tw`items-center justify-center`}
`;

export const Page = Object.assign(PageBase, {
  CenteredContent: PageCenteredContent,
});
