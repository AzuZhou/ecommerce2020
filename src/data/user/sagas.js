import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from 'data/user/types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from 'utils/firebase/firebase';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from 'data/user/actions';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT, signOut);
}

export function* userSagas() {
  yield all([call(onGoogleSignIn), call(onEmailSignIn), call(onCheckUserSession), call(onSignOut)]);
}
