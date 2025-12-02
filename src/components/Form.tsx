import styled from 'styled-components';
import tw from 'twin.macro';

const FormBase = styled.form`
  ${tw`w-full max-w-md bg-background shadow-none rounded px-8 pt-6 pb-8 mb-4`}
`;

const FormTitle = styled.h1`
  ${tw`text-center text-2xl text-white pt-2 pb-8 `}
`;

const FormFooter = styled.div`
  ${tw`text-center text-sm pt-2 `}
`;

const FormFieldBase = styled.div`
  ${tw`pb-4 w-full`}
`;

const FormFieldLabel = styled.label`
  ${tw`block text-gray-700 text-sm mb-2`}
`;

const FormFieldErrorMessage = styled.p`
  ${tw`text-red-500 text-xs pt-1`}
`;

const FormField = Object.assign(FormFieldBase, {
  Label: FormFieldLabel,
  ErrorMessage: FormFieldErrorMessage,
});

export const Form = Object.assign(FormBase, {
  Title: FormTitle,
  Footer: FormFooter,
  Field: FormField,
});
