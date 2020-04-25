import styled from 'styled-components';
import tw from 'twin.macro';

export const Form = styled.form`
  ${tw`w-full max-w-md bg-background shadow-none rounded px-8 pt-6 pb-8 mb-4`}
`;

Form.Title = styled.h1`
  ${tw`text-center text-2xl text-white pt-2 pb-8 `}
`;

Form.Footer = styled.div`
  ${tw`text-center text-sm pt-2 `}
`;

Form.Field = styled.div`
  ${tw`pb-4 w-full`}
`;

Form.Field.Label = styled.div`
  ${tw`block text-gray-700 text-sm mb-2`}
`;

Form.Field.ErrorMessage = styled.p`
  ${tw`text-red-500 text-xs pt-1`}
`;
