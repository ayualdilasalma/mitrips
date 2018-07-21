/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as actions from './constants';

export const initialState = fromJS({
  loading: null,
  trips: null,
  error: null,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOAD_DATA_START:
      return loadDataStart(state, action);
    case actions.LOAD_DATA_FINISH:
      return loadDataFinish(state, action);
    case actions.LOAD_DATA_FAILED:
      return loadDataFail(state, action);
    default:
      return state;
  }
}

function loadDataStart(state) {
  return state
    .set('loading', true)
    .set('trips', null)
    .set('error', null);
}

function loadDataFinish(state, action) {
  return state
    .set('loading', false)
    .set('trips', action.data)
    .set('error', null);
}

function loadDataFail(state, action) {
  return state
    .set('loading', false)
    .set('error', action.error)
    .set('trips', null);
}

export default mainPageReducer;
