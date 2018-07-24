/*
 *
 * TripDetail actions
 *
 */

import * as actionTypes from './constants';

export function loadDataAction(id) {
  return {
    type: actionTypes.LOAD_DATA_INIT,
    id,
  };
}

export function loadDataSuccessAction(payload) {
  return {
    type: actionTypes.LOAD_DATA_SUCCES,
    data: payload,
  };
}

export function loadDataFailAction(error) {
  return {
    type: actionTypes.LOAD_DATA_FAILED,
    error,
  };
}

export function onAddDataAction() {
  return {
    type: actionTypes.ON_ADD_DATA,
  };
}
