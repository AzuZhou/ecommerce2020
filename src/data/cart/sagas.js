import { takeLatest, call, put, all } from 'redux-saga/effects';
import userActionTypes from 'data/user/types';
import { clearCart } from 'data/cart/actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
