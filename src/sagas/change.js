import {
  put,
} from 'redux-saga/effects';

import {
  ReduxFormsChange,
} from './consts';

import {
  StoreKeys
} from '../consts';

/** Формирует действие смены значения поля в Redux Form
 *
 * @param {string} field имя поля
 * @param {string} value значение поля
 *
 * @returns {object} действие
 *
 */
export const change = ({
  field,
  value
}) => ({
  type: ReduxFormsChange,
  meta: {
    form: StoreKeys.Director,
    field
  },
  payload: value
});

/** Формирует сагу put (dispatch)
   *
   * @param {string} field имя поля
   * @param {string} value значение поля
   *
   * @returns {PutEffect} сага
   *
   */
export const putSaga = ({
  field,
  value
}) => put(change({
  field,
  value
}));
