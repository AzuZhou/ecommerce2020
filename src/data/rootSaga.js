import { all, call } from 'redux-saga/effects';
import { fetchCollections } from 'data/shop/sagas';

export default function* rootSaga() {
  yield all([call(fetchCollections)]);
}
