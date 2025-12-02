import styled from 'styled-components';
import tw from 'twin.macro';

const CardBase = styled.div`
  ${tw`w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full`}
`;

const CardImageContainer = styled.div`
  ${tw`w-full h-48 overflow-hidden`}
`;

const CardBody = styled.div`
  ${tw`px-6 py-4 mt-auto`}
`;

const CardTitle = styled.div`
  ${tw`font-bold text-xl mb-2`}
`;

const CardDescription = styled.p`
  ${tw`text-gray-700 text-base`}
`;

export const Card = Object.assign(CardBase, {
  ImageContainer: CardImageContainer,
  Body: CardBody,
  Title: CardTitle,
  Description: CardDescription,
});
