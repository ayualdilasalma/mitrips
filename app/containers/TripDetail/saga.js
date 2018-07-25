import { takeEvery, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as actionTypes from './constants';
import * as actions from './actions';
import { selectTripItem } from './selectors';

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(actionTypes.LOAD_DATA_INIT, loadDataSaga);
  yield takeEvery(actionTypes.ON_ADD_DATA, addDataSaga);
}

function* loadDataSaga(payload) {
  try {
    const config = {
      url: `trip-getById?id=${payload.id}`,
    };
    const response = yield call(request, config);
    const { data } = response;
    yield put(actions.loadDataSuccessAction(data));
  } catch (error) {
    yield put(actions.loadDataFailAction(error));
  }
}

function* addDataSaga() {
  try {
    const dataOld = yield select(selectTripItem());
    dataOld.participants.push({
      name: 'Test',
    });
    const config = {
      url: `trip-save`,
      method: 'POST',
      data: dataOld,
    };
    yield call(request, config);
    //  const { data } = response;
    //  let idUpdatedData = data.split("'");
    //  idUpdatedData = idUpdatedData[1].split("'");
    // console.log(idUpdatedData[0]);
    yield put(actions.loadDataAction(dataOld.id));
    //  console.log(dataOld);
  } catch (error) {
    // console.log(error);
    yield put(actions.loadDataFailAction('Failed to add participants'));
  }
}
