import { takeEvery, call, put } from 'redux-saga/effects';
import request from 'utils/request';

import * as actionTypes from './constants';
import { loadDataFinish, loadDataFailed } from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(actionTypes.LOAD_DATA_START, loadDataSaga);
}

function* loadDataSaga() {
  try {
    const config = {
      url: 'trip-get',
      method: 'GET',
    };
    const response = yield call(request, config);
    // console.log(response.data);
    yield put(loadDataFinish(response.data));
  } catch (error) {
    yield put(loadDataFailed(error));
  }
}
