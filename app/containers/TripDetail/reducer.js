/*
 *
 * TripDetail reducer
 *
 */

import { fromJS } from 'immutable';
import * as actionTypes from './constants';

export const initialState = fromJS({
  loading: null,
  error: null,
  trip: null,
});

function tripDetailReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_INIT:
      return loadDataStartReducer(state, action);
    case actionTypes.LOAD_DATA_SUCCES:
      return loadDataSuccessReducer(state, action);
    case actionTypes.LOAD_DATA_FAILED:
      return loadDataFailReducer(state, action);
    case actionTypes.ON_ADD_DATA:
      return onAddDataReducer(state, action);
    default:
      return state;
  }
}

function loadDataStartReducer(state) {
  return state
    .set('loading', true)
    .set('error', null)
    .set('trip', null);
}

function loadDataSuccessReducer(state, action) {
  return state
    .set('loading', false)
    .set('error', null)
    .set('trip', action.data);
}

function loadDataFailReducer(state, action) {
  return state
    .set('loading', false)
    .set('error', action.error)
    .set('trip', null);
}

function onAddDataReducer(state) {
  return state.set('loading', true).set('error', null);
}

export default tripDetailReducer;
