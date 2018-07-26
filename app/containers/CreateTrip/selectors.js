import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the createTrip state domain
 */

const selectCreateTripDomain = state => state.get('createTrip', initialState);

/**
 * Other specific selectors
 */
const selectLoadingCreate = () =>
  createSelector(selectCreateTripDomain, substate => substate.get('loading'));
const selectStatusCreate = () =>
  createSelector(selectCreateTripDomain, substate => substate.get('success'));
const selectDataCreate = () =>
  createSelector(selectCreateTripDomain, substate => substate.get('data'));
const selectErrorCreate = () =>
  createSelector(selectCreateTripDomain, substate => substate.get('error'));

/**
 * Default selector used by CreateTrip
 */

const makeSelectCreateTrip = () =>
  createSelector(selectCreateTripDomain, substate => substate.toJS());

// export default makeSelectCreateTrip;
export {
  makeSelectCreateTrip,
  selectCreateTripDomain,
  selectLoadingCreate,
  selectDataCreate,
  selectStatusCreate,
  selectErrorCreate,
};
