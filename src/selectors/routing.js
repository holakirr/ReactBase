import {
  createSelector
} from 'reselect';

import {
  getState,
  getAppState
} from '.';

import {
  AppModes
} from '../consts';

export const getRoutingState = createSelector(
  [getState],
  state => state.router || {}
);

export const getRoutingLocation = createSelector(
  [getRoutingState],
  state => state.location || {}
);

export const getRoutingLocationState = createSelector(
  [getRoutingLocation],
  location => location.state || {}
);

export const getRoutingFrom = createSelector(
  [getRoutingLocationState],
  state => state.from || {}
);

export const getRoutingProps = createSelector(
  [getRoutingFrom],
  from => ({
    from
  })
);

/** Текущий режим приложения */
export const getAppMode = createSelector(
  [getAppState],
  state => state.mode || AppModes.Home
);
