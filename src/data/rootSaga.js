import { all, call } from 'redux-saga/effects';
import { fetchCollections } from 'data/shop/sagas';
import { userSagas } from 'data/user/sagas';

export default function* rootSaga() {
  yield all([call(fetchCollections), call(userSagas)]);
}
