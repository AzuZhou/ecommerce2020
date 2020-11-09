import React, { useState } from 'react';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { auth, createUserProfileDocument } from 'utils/firebase/firebase';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match ");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={event => setDisplayName(event.target.value)}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
