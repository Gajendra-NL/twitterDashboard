import { takeLatest, put, call } from 'redux-saga/effects';
import data from '../dataSource/tweets';

function* searchAsync(searchData) {
  const result = yield call(getDataAsync, searchData.payload);
  yield put({
    type: 'NEW_SEARCH_ASYNC',
    payload: {
      data: result,
      searchString: searchData.payload,
    }
  });
}

const getDataAsync = searchString => new Promise(function(resolve, reject) {
  const result = data.filter(e => (
    e.text.includes(searchString) ||
    (e.quoted_status && e.quoted_status.text.includes(searchString)) ||
    (e.retweeted_status && e.retweeted_status.text.includes(searchString))
  ));
  if (result) {
    resolve(result);
  }
});

export function* watchNewSearch() {
  yield takeLatest('NEW_SEARCH', searchAsync);
}
