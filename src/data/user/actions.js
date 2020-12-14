import userActionTypes from 'data/user/types';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignIn = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN,
});

export const googleSignInSuccess = user => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = error => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: error,
});

export const emailSignIn = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN,
  payload: emailAndPassword,
});

export const emailSignInSuccess = user => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = error => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: error,
});
