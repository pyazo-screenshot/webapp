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
import { regex } from '../regex';
import { storeAccessToken } from '../utils/AuthUtils';

export function LoginPage() {
  const history = useHistory();
  const { register, errors, handleSubmit, setError } = useForm();

  function onSubmit(data) {
    axios
      .post('/auth/login', data)
      .then(({ data: response }) => {
        storeAccessToken(response.data.access_token);
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
          <Form.Field.Label htmlFor="email">Email</Form.Field.Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email address"
            ref={register({
              required: true,
              pattern: regex.email,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <Form.Field.ErrorMessage>
              Please enter your email address
            </Form.Field.ErrorMessage>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Form.Field.ErrorMessage>
              Please enter a valid email address
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
              minLength: 8,
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
              The email and password combination is incorrect
            </Form.Field.ErrorMessage>
          )}
        </Form.Field>
        <Form.Field>
          <Link to="/register">Sign up</Link>
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
