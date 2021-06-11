import {
  createSelector
} from 'reselect';

import {
  getErrorProps
} from './error';

export const getProps = createSelector(
  [
    getErrorProps,
  ],
  error => ({
    isShow: false && !error
  })
);
