import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tripDetail state domain
 */

const selectTripDetailDomain = state => state.get('tripDetail', initialState);

/**
 * Other specific selectors
 */
const selectLoadingTrip = () =>
  createSelector(selectTripDetailDomain, substate => substate.get('loading'));

const selectErrorTrip = () =>
  createSelector(selectTripDetailDomain, substate => substate.get('error'));

const selectTripItem = () =>
  createSelector(selectTripDetailDomain, substate => substate.get('trip'));

/**
 * Default selector used by TripDetail
 */

// const makeSelectTripDetail = () =>
//   createSelector(selectTripDetailDomain, substate => substate.toJS());

export {
  selectTripDetailDomain,
  selectLoadingTrip,
  selectErrorTrip,
  selectTripItem,
};
