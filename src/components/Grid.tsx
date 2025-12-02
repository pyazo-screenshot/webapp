import styled from 'styled-components';
import tw from 'twin.macro';

interface GridRowItemProps {
  itemsPerRow?: string;
}

const GridBase = styled.div`
  ${tw`w-full shadow-none flex flex-wrap`}
`;

const GridRowBase = styled.div`
  ${tw`w-full flex`}
`;

const GridRowItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'itemsPerRow',
})<GridRowItemProps>`
  ${tw`w-full sm:w-1/3 md:w-1/6 lg:w-1/6 xl:w-2/12 px-2 py-4`}
`;

const GridRow = Object.assign(GridRowBase, {
  Item: GridRowItem,
});

export const Grid = Object.assign(GridBase, {
  Row: GridRow,
});
