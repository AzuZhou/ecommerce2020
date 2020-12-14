import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { signUp } from 'data/user/actions';

const SignUp = ({ signUp }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  });
  const { email, displayName, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match ");
      return;
    }

    signUp({ email, password, displayName });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
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
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUp(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
