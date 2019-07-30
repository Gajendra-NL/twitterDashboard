import { takeLatest, put } from 'redux-saga/effects';
import data from '../dataSource/tweets';

function* searchAsync(searchData) {
  yield put({
    type: 'NEW_SEARCH_ASYNC',
    payload: {
      data: getDataFromJson(searchData.payload),
      searchString: searchData.payload,
    }
  });
}

function getDataFromJson(searchString) {
  return data.slice(0, 5);
}

export function* watchNewSearch() {
  yield takeLatest('NEW_SEARCH', searchAsync);
}

export const dummy = () => {};
