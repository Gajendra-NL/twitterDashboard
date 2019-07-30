import { takeLatest, put } from 'redux-saga/effects';
import data from '../dataSource/tweets';

function* searchAsync() {
  yield put({ type: 'NEW_SEARCH_ASYNC', payload: data.slice(0, 20) });
}

export function* watchNewSearch() {
  yield takeLatest('NEW_SEARCH', searchAsync);
}

export const dummy = () => {};
