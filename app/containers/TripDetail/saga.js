import { takeEvery, take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as actionTypes from './constants';
import * as actions from './actions';

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
    const config = {
      url: `trip-save`,
      method: 'POST',
      data: {
        participants: [
          {
            name: 'Test',
          },
        ],
        endDate: '2018-09-08T16:00:00.000Z',
        schedules: [
          {
            activity: 'Meet up at Muara Angke Dock',
            time: '2018-09-07T21:00:00.000Z',
          },
        ],
        tripper: [
          {
            name: 'Fidelis',
            userId: '-',
          },
          {
            name: 'Aditya PM',
            userId: '01',
          },
        ],
        startDate: '2018-09-07T16:00:00.000Z',
        budget: 450000,
        name: 'Gili Labak Trip',
        id: 'RSO9GQDVr6HX0KLhDuTe',
      },
    };
    const response = yield call(request, config);
    const { data } = response;
    yield put(actions.loadDataAction(data.id));
  } catch (error) {
    yield put(actions.loadDataFailAction(error));
  }
}
