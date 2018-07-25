import { fromJS } from 'immutable';
import createTripReducer from '../reducer';

describe('createTripReducer', () => {
  it('returns the initial state', () => {
    expect(createTripReducer(undefined, {})).toEqual(fromJS({}));
  });
});
