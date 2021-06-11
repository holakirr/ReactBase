import {
  call, put
} from 'redux-saga/effects';

import {
  sendMessageToServer
} from './log';

/** Выполняет сагу
   *
   * @param {object} action Действия для выполнения (до start)
   * @param {object} api Параметры Api, func - метод апи, params - параметры для выполнения запроса
   * @param {object} props Параметры, которые будет переданы в симбиоты
   * @param {string} defaultErrorMessage Текст ошибки по умолчанию (для fail)
   * @param {func} callback Метод будет вызван после успешного выполенения запроса
   *
   */
export function* sagaRunner({
  action = {},
  api = {
    func: () => {},
    params: {}
  },
  props,
  defaultErrorMessage = '',
  callback = () => {},
  preSuccess = () => {},
  error,
} = {}) {
  try {
    yield put((action.pending || action.start)());

    const result = yield call(api.func, api.params);

    const {
      isSuccess,
      code,
      errorMessage = defaultErrorMessage,
      payload = {}
    } = (result || {});

    const params = {
      ...payload,
      responseCode: code,
      ...api.params,
      ...(props || {})
    };

    if (isSuccess) {
      yield preSuccess(params);
      yield put(action.success(params));
      yield callback(params);
    } else {
      if (error) {
        yield error(params);
      }
      yield put(action.fail({ errorMessage }));
    }
  } catch (e) {
    console.log(e);
    yield call(
      sendMessageToServer,
      {
        message: `${e.message || ''}
          ${e.fileName || ''}
          ${e.lineNumber || ''}
          ${e.columnNumber || ''}`,
        stack: e.stack
      }
    );
    yield put(action.fail({ errorMessage: e.message }));
  }
}
