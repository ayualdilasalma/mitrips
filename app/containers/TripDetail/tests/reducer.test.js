import { fromJS } from 'immutable';
import tripDetailReducer from '../reducer';

describe('tripDetailReducer', () => {
  it('returns the initial state', () => {
    expect(tripDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
