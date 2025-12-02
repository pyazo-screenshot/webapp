import styled from 'styled-components';
import tw from 'twin.macro';

export const Card = styled.div`
  ${tw`w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full`}
`;

Card.ImageContainer = styled.div`
  ${tw`w-full h-48 overflow-hidden`}
`;

Card.Body = styled.div`
  ${tw`px-6 py-4 mt-auto`}
`;

Card.Title = styled.div`
  ${tw`font-bold text-xl mb-2`}
`;

Card.Description = styled.p`
  ${tw`text-gray-700 text-base`}
`;
