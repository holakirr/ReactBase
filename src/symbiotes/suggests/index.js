import { createSymbiote } from 'redux-symbiote';

import {
  listState,
  getListSymbiotes
} from './list';

export const initialState = {
  organization: {
    ...listState
  }
};

/** Подсказки */
export const { actions, reducer } = createSymbiote(initialState, {
  /** Загрузка подсказок для организаций */
  organization: getListSymbiotes('organization'),
  /** Загрузка подсказок для ФИО */
  fullname: {
    /** ФИО */
    ...getListSymbiotes('fullName')
  },
  /** Загрузка подсказок для адреса */
  address: {
    /** адрес */
    ...getListSymbiotes('address')
  },
  clear: () => ({
    ...initialState
  }),
}, 'suggests');
