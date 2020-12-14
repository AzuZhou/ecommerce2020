import userActionTypes from 'data/user/types';

export const googleSignIn = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN,
});

export const emailSignIn = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN,
  payload: emailAndPassword,
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
