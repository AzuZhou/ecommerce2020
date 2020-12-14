import { all, call } from 'redux-saga/effects';
import { shopSagas } from 'data/shop/sagas';
import { userSagas } from 'data/user/sagas';
import { cartSagas } from 'data/cart/sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
