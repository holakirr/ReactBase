import {
  createSelector
} from 'reselect';

import {
  getPopups
} from './popups';

import {
  PopupNames,
} from '../consts';

export const getErrorProps = createSelector(
  [getPopups],
  popups => popups.find(x => x.name === PopupNames.Error)
);

export const getErrorData = createSelector(
  [getErrorProps],
  props => (props || {}).data || {}
);

export const getProps = createSelector(
  [getErrorData],
  error => ({
    isShow: !!error.message,
    title: 'Ошибка приложения!',
    message: `${error.message || ''}
      <br />${error.stack || ''}
      <br />${(error.options || {}).url || ''}
      <br />${JSON.stringify((error.options || {}).fetchOptions || {}, null, 2)}`,
    type: error.type
  })
);
