/*
 *
 * CreateTrip actions
 *
 */

import * as actionTypes from './constants';

export function onCreateAction(data) {
  return {
    type: actionTypes.ON_CREATE_TRIP_START,
    data,
  };
}

export function onCreateFinishAction(payload) {
  return {
    type: actionTypes.ON_CREATE_TRIP_FINISH,
    data: payload,
  };
}

export function onCreateFailedAction(error) {
  return {
    type: actionTypes.ON_CREATE_TRIP_FAILED,
    error,
  };
}
