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

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
