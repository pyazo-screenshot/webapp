import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { Input } from '../components/Input';
import { Form } from '../components/Form';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Image } from '../components/Image';
import { Page } from './Page';
import { storeAccessToken } from '../utils/AuthUtils';

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://pyazo.com';

export function LoginPage() {
  const history = useHistory();
  const { register, errors, handleSubmit, setError } = useForm();

  function onSubmit(data) {
    axios
      .post(`${baseUrl}/auth/login`, data)
      .then(({ data: response }) => {
        storeAccessToken(response.access_token);
        history.push('/');
      })
      .catch(() => {
        setError('password', 'incorrect');
      });
  }

  return (
    <Page.CenteredContent>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Image src="logo.svg" />
        <Form.Title>Welcome to Pyazo</Form.Title>
        <Form.Field>
          <Form.Field.Label htmlFor="username">Username</Form.Field.Label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your username"
            ref={register({
              required: true,
            })}
          />
          {errors.username && errors.username.type === 'required' && (
            <Form.Field.ErrorMessage>
              Please enter your username
            </Form.Field.ErrorMessage>
          )}
        </Form.Field>
        <Form.Field>
          <Form.Field.Label htmlFor="password">Password</Form.Field.Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            ref={register({
              required: true,
              minLength: 4,
            })}
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
          {errors.password && errors.password.type === 'incorrect' && (
            <Form.Field.ErrorMessage>
              The username and password combination is incorrect
            </Form.Field.ErrorMessage>
          )}
        </Form.Field>
        <Form.Field>
          <Button type="submit">LOG IN</Button>
        </Form.Field>
        <Form.Footer>
          <Link to="/register">Sign up</Link>
        </Form.Footer>
      </Form>
    </Page.CenteredContent>
  );
}
