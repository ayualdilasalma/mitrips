import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get('mainPage', initialState);

/**
 * Other specific selectors
 */

const selectLoading = () =>
  createSelector(selectMainPageDomain, substate => substate.get('loading'));

const selectTrips = () =>
  createSelector(selectMainPageDomain, substate => substate.get('trips'));

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(selectMainPageDomain, substate => substate.toJS());

export { selectMainPageDomain, selectLoading, makeSelectMainPage, selectTrips };
