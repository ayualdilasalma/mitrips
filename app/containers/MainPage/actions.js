/*
 *
 * MainPage actions
 *
 */

import * as actions from './constants';

export function loadDataStart() {
  return {
    type: actions.LOAD_DATA_START,
  };
}

export function loadDataFinish(payload) {
  return {
    type: actions.LOAD_DATA_FINISH,
    data: payload,
  };
}

export function loadDataFailed(payload) {
  return {
    type: actions.LOAD_DATA_FAILED,
    error: payload,
  };
}
