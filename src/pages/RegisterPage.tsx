import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import axios from 'axios';

import { Input } from '../components/Input';
import { Form } from '../components/Form';
import { Image } from '../components/Image';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Page } from './Page';
import { storeAccessToken } from '../utils/AuthUtils';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://pyazo.com';

interface RegisterFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

interface RegisterResponse {
  data: {
    access_token: string;
  };
}

export function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<RegisterFormData>();

  function validatePasswordsMatch(confirmPassword: string) {
    const { password } = getValues();
    return confirmPassword === password;
  }

  function onSubmit(data: FieldValues) {
    axios
      .post<RegisterResponse>(`${baseUrl}/auth/register`, data)
      .then(({ data: response }) => {
        storeAccessToken(response.data.access_token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Page.CenteredContent>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Image src="logo.svg" />
        <Form.Title>Let&apos;s set up your new account</Form.Title>
        <Form.Field>
          <Form.Field.Label htmlFor="username">username</Form.Field.Label>
          <Input
            id="username"
            placeholder="Enter your username"
            {...register('username', { required: true })}
          />
          {errors.username && errors.username.type === 'required' && (
            <Form.Field.ErrorMessage>
              Please enter your username
            </Form.Field.ErrorMessage>
          )}
          {errors.username && errors.username.type === 'pattern' && (
            <Form.Field.ErrorMessage>
              Please enter a valid username
            </Form.Field.ErrorMessage>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Field.Label htmlFor="password">Password</Form.Field.Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true, minLength: 4 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <Form.Field.ErrorMessage>
              Please enter your password
            </Form.Field.ErrorMessage>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <Form.Field.ErrorMessage>
              Please use at least 8 characters for your password
            </Form.Field.ErrorMessage>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Field.Label htmlFor="confirmPassword">
            Confirm password
          </Form.Field.Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Enter your password once again"
            {...register('confirmPassword', {
              required: true,
              validate: validatePasswordsMatch,
            })}
          />
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'required' && (
              <Form.Field.ErrorMessage>
                Please enter your password again
              </Form.Field.ErrorMessage>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <Form.Field.ErrorMessage>
                The two passwords do not match
              </Form.Field.ErrorMessage>
            )}
        </Form.Field>
        <Form.Field>
          <Button type="submit">Register</Button>
        </Form.Field>
        <Form.Footer>
          <Link to="/login">Already have an account?</Link>
        </Form.Footer>
      </Form>
    </Page.CenteredContent>
  );
}
