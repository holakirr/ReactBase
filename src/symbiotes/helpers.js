import set from 'setimmutable';

export { default as set } from 'setimmutable';

const objectPath = require('object-path');

export const { get } = objectPath;

/** Действие Начало
 *
 * @param {string} key ключ состояния, которое изменяется
 * @param {object} initialState состояние, которое нужно наложить на текущее состояние
 * @param {function} callback функция обратного вызова после всех базовых изменений
 *
 * @return {object} новое состояние
 *
 */
export const start = ({
  key = '',
  initialState = null,
  callback = state => state
} = {}) => (state, props) => {
  let result = initialState ?
    set(state, key, {
      ...state[key] || {},
      ...initialState
    }) :
    state;

  result = set(result, `${key}.isProcess`, true);
  result = set(result, `${key}.hasError`, false);
  result = set(result, `${key}.errorMessage`, '');
  result = callback(result, props);

  return result;
};

/** Действие Ошибка
 *
 * @param {string} key ключ состояния, которое изменяется
 * @param {object} initialState состояние, которое нужно наложить на текущее состояние
 * @param {function} callback функция обратного вызова после всех базовых изменений
 *
 * @return {object} новое состояние
 *
 */
export const fail = ({
  key = '',
  initialState = null,
  callback = state => state
} = {}) => (state, { errorMessage = '' } = {}) => {
  let result = initialState ?
    set(state, key, {
      ...state[key] || {},
      ...initialState
    }) :
    state;

  result = set(result, `${key}.isProcess`, false);
  result = set(result, `${key}.hasError`, true);
  result = set(result, `${key}.errorMessage`, errorMessage);

  result = callback(result);

  return result;
};

/** Действие Отмена
 *
 * @param {string} key ключ состояния, которое изменяется
 * @param {object} initialState состояние, которое нужно наложить на текущее состояние
 * @param {function} callback функция обратного вызова после всех базовых изменений
 *
 * @return {object} новое состояние
 *
 */
export const cancel = ({
  key = '',
  initialState = null,
  callback = state => state
} = {}) => (state) => {
  let result = initialState ?
    set(state, key, {
      ...state[key] || {},
      ...initialState
    }) :
    state;

  result = set(state, `${key}.isProcess`, false);
  result = set(result, `${key}.hasError`, false);
  result = set(result, `${key}.errorMessage`, '');

  result = callback(result);

  return result;
};

/** Действие Успех
 *
 * @param {string} key ключ состояния, которое изменяется
 * @param {object} initialState состояние, которое нужно наложить на текущее состояние
 * @param {function} callback функция обратного вызова после всех базовых изменений
 *
 * @return {object} новое состояние
 *
 */
export const success = ({
  key = '',
  dataKey = '',
  resultProp,
  initialState = null,
  callback = state => state
} = {}) => (state, props) => {
  let result = initialState ?
    set(state, key, { ...initialState }) :
    state;
  result = set(result, `${key}.isProcess`, false);
  result = set(result, `${key}.hasError`, false);
  result = set(result, `${key}.errorMessage`, '');
  if ((props || {}).data && dataKey) {
    if (resultProp) {
      result = set(result, dataKey, props.data[resultProp]);
    } else {
      result = set(result, dataKey, props.data);
    }
  }

  result = callback(result, props);

  return result;
};

/** Набор действий без действия Успех
 *
 * @param {string} key ключ состояния, которое изменяется
 * @param {object} initialState состояние, которое нужно наложить на текущее состояние
 *
 * @return {object} набор действий
 *
 */
export const processNoSuccess = ({
  key = '',
  initialState = null
} = {}) => ({
  start: start({ key, initialState }),
  pending: start({ key, initialState }),
  fail: fail({ key, initialState }),
  cancel: cancel({ key, initialState }),
});

/** Полный набор действий
 *
 * @param {string} key ключ состояния, которое изменяется
 *
 * @return {object} набор действий
 *
 */
export const process = ({
  key = '',
  dataKey = '',
  resultProp
} = {}) => ({
  ...processNoSuccess({ key }),
  success: success({ key, dataKey, resultProp })
});

/** Состояние операции */
export const processState = {
  /** Признак наличия ошибки */
  hasError: false,
  /** Текст ошибки */
  errorMessage: '',
  /** Признак выполнения действия/операции */
  isProcess: false,
};
