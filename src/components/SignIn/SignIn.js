import React, { useState } from 'react';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          label='Email'
          value={email}
          handleChange={event => setEmail(event.target.value)}
          type='email'
          required
        />
        <FormInput
          name='password'
          label='Password'
          value={password}
          handleChange={event => setPassword(event.target.value)}
          type='password'
          required
        />

        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
