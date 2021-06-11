import {
  createSelector
} from 'reselect';

import {
  getState
} from '.';

export const getPopups = createSelector(
  [getState],
  state => (state.popups || {}).opened || []
);
