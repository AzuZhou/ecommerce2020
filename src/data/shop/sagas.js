import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotsToMap } from 'utils/firebase/firebase';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from 'data/shop/actions';
import ShopActionTypes from 'data/shop/types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotsToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollections() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollections)]);
}
