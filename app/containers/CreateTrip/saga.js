import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';

import * as actionTypes from './constants';
import * as actions from './actions';

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(actionTypes.ON_CREATE_TRIP_START, createTripSaga);
}

function* createTripSaga(payload) {
  try {
    const config = {
      method: 'POST',
      url: 'trip-save',
      data: payload.data
    }
    const response = yield call(request, config);
    console.log(response);
    yield call(actions.onCreateFinishAction(response.data));
  } catch (error) {
    console.log(error);
    yield call(actions.onCreateFailedAction('failed to create trip'));
  }
}
