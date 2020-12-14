import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { googleSignIn, emailSignIn } from 'data/user/actions';

const SignIn = ({ googleSignIn, emailSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignIn(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
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
          handleChange={handleChange}
          type='email'
          required
        />
        <FormInput
          name='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          type='password'
          required
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>
            Sign in with Goolge
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignIn: () => dispatch(googleSignIn()),
  emailSignIn: (email, password) => dispatch(emailSignIn({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
