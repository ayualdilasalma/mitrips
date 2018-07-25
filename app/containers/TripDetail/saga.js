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
    const dataAdd = {
      participants: [
        {
          name: 'Test',
        },
        {
          name: 'Adit',
        },
      ],
      endDate: '2018-09-08T16:00:00.000Z',
      schedules: [
        {
          time: '2018-09-07T21:00:00.000Z',
          activity: 'Meet up at Muara Angke Dock',
        },
      ],
      tripper: [
        {
          name: 'Fidelis',
          userId: '-',
        },
      ],
      startDate: '2018-09-07T16:00:00.000Z',
      budget: 450000,
      name: 'Gili Labak Trip',
      id: 'RSO9GQDVr6HX0KLhDuTe',
    };
    const config = {
      url: `trip-save`,
      method: 'POST',
      data: dataAdd,
    };
    const response = yield call(request, config);
    const { data } = response;
    let idUpdatedData = data.split("'");
    idUpdatedData = idUpdatedData[1].split("'");
    // console.log(idUpdatedData[0]);
    yield put(actions.loadDataAction(idUpdatedData[0]));
  } catch (error) {
    // console.log(error);
    yield put(actions.loadDataFailAction('Failed to add participants'));
  }
}
