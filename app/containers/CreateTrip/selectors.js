import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createTrip state domain
 */

const selectCreateTripDomain = state => state.get('createTrip', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CreateTrip
 */

const makeSelectCreateTrip = () =>
  createSelector(selectCreateTripDomain, substate => substate.toJS());

export default makeSelectCreateTrip;
export { selectCreateTripDomain };
