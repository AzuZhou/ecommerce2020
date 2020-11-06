import React, { useState } from 'react';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { signInWithGoogle } from 'utils/firebase/firebase';

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

        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Goolge
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
