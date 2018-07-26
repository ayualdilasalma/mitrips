/*
 *
 * CreateTrip reducer
 *
 */

import { fromJS } from 'immutable';
import * as actionTypes from './constants';

export const initialState = fromJS({
  loading: null,
  data: null,
  success: null,
  error: null,
});

function createTripReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ON_CREATE_TRIP_START:
      return onCreateReducer(state, action);
    case actionTypes.ON_CREATE_TRIP_FINISH:
      return onCreateFinishReducer(state, action);
    case actionTypes.ON_CREATE_TRIP_FAILED:
      return onCreateFailedReducer(state, action);
    default:
      return state;
  }
}

function onCreateReducer(state, action) {
  return state
    .set('loading', true)
    .set('data', null)
    .set('success', null)
    .set('error', null);
}

function onCreateFinishReducer(state, action) {
  return state
    .set('loading', false)
    .set('data', action.data)
    .set('success', action.data);
}

function onCreateFailedReducer(state, action) {
  return state
    .set('loading', false)
    .set('data', null)
    .set('success', false)
    .set('error', action.error);
}

export default createTripReducer;
