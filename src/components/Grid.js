import styled from 'styled-components';
import tw from 'twin.macro';

export const Grid = styled.div`
  ${tw`w-full shadow-none flex flex-wrap`}
`;

Grid.Row = styled.div`
  ${tw`w-full flex`}
`;

Grid.Row.Item = styled.div`
  ${tw`w-full sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-2/12 px-2 py-4`}
`;
