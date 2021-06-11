import { createSymbiote } from 'redux-symbiote';

import {
  initialState
} from './initialState';

import {
  docs
} from './docs';

/** Симбиоты приложения */
export const { actions, reducer } = createSymbiote(initialState, {
  ...docs,
}, '');
